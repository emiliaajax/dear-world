import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Grid } from "@mui/material"
import Stack from '@mui/material/Stack'

class PostForm extends React.Component {
  constructor () {
    super()

    this.state = { 
      author: '',
      subject: '',
      title: '',
      text: ''
     } 
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
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
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TextField 
                    label='Författare' 
                    size='small' 
                    name='author' 
                    value={this.state.author} 
                    onChange={this.onChange}>
                  </TextField>
                  </Grid>
                  <Grid item xs={4}>
                  <TextField 
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
                  Text
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    )
  }
}
 
export default PostForm