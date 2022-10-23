import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, FormControl, Grid, MenuItem, Select, Stack } from "@mui/material"
import PostsService from '../../features/posts/PostsService'
import { emojiProvider } from 'emoji-provider'
import { Subjects } from '../../enum/subjects.js'

class PostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      author: '',
      subject: '',
      title: '',
      text: ''
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()

    if (this.state.author.trim() === '') {
      this.state.author = 'Anonymous'
    }

    this.state.text = emojiProvider.replaceEmoticonsWithEmojis(this.state.text)
    const postsService = new PostsService()
    const response = await postsService.createPost(this.state)
    this.id = await response.id

    window.location.href = `/post/${await this.id}`
  }

  onChange = (event) => {
    this.setState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))
  }

  onSubjectChange = (event) => {
    this.setState({ subject: event.target.value })
  }

  renderMenuItems() {
    return Object.values(Subjects).map((subject) => {
      return (
        <MenuItem value={subject}>
          {subject}
        </MenuItem>
      )
    })
  }

  render() {
    return (
      <>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <Grid container spacing={2} sx={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Grid item xs={10}>
              <Stack spacing={2}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label='Author' 
                      size='small' 
                      name='author' 
                      value={this.state.author} 
                      onChange={this.onChange}>
                    </TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Select
                          size='small' 
                          labelId='subjectLabel'
                          id='subject'
                          value={this.state.subject}
                          onChange={this.onSubjectChange}
                        >
                          {this.renderMenuItems()}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                <TextField 
                  label='Title' 
                  size='small' 
                  name='title' 
                  value={this.state.title} 
                  onChange={this.onChange}>
                </TextField>
                <TextField 
                  multiline 
                  rows={20}
                  name='text'
                  value={this.state.text} 
                  onChange={this.onChange}>
                </TextField> 
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <Button
                type='submit'
                variant='contained'
                sx={{ backgroundColor: '#222' }}>
                  Publish
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    )
  }
}

export default PostForm
