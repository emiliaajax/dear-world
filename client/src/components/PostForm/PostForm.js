import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Grid } from "@mui/material"
import Stack from '@mui/material/Stack'
import PostsService from '../../features/posts/PostsService'
import { emojiProvider } from 'emoji-provider'

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

    window.location.href = `/${await this.id}`
  }

  onChange = (event) => {
    this.setState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))
  }

  render() {
    return (
      <>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <Grid container spacing={2} sx={{ maxWidth: '1000px', margin: '0 auto'}}>
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
                      <TextField 
                        fullWidth
                        label='Subject' 
                        size='small' 
                        name='subject' 
                        value={this.state.subject} 
                        onChange={this.onChange}>
                      </TextField>
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
