import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Grid } from "@mui/material"
import Stack from '@mui/material/Stack'
import PostsService from '../../features/posts/PostsService'

class PostForm extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = { 
      author: '',
      subject: '',
      title: '',
      text: ''
     } 
  }

  onSubmit = (event) => {
    event.preventDefault()
    const postsService = new PostsService()
    postsService.createPost(this.state)
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
        <form onSubmit={this.onSubmit}>
          <Grid container spacing={2} sx={{ maxWidth: '1000px', margin: '0 auto'}}>
            <Grid item xs={10}>
              <Stack spacing={2}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label='Författare' 
                    size='small' 
                    name='author' 
                    value={this.state.author} 
                    onChange={this.onChange}>
                  </TextField>
                  </Grid>
                  <Grid item xs={6}>
                  <TextField 
                    fullWidth
                    label='Ämne' 
                    size='small' 
                    name='subject' 
                    value={this.state.subject} 
                    onChange={this.onChange}>
                  </TextField>
                  </Grid>
                  </Grid>
                <TextField 
                  label='Rubrik' 
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
                variant='contained'>
                  Publicera
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    )
  }
}
 
export default PostForm