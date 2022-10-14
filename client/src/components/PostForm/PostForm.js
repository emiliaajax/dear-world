import React from 'react'
import TextField from '@mui/material/TextField'
import { Button } from "@mui/material"
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
          <Stack spacing={2}>
            <Stack direction='row' spacing={1}>
              <TextField 
                label='Författare' 
                size='small' 
                name='author' 
                value={this.state.author} 
                onChange={this.onChange}>
              </TextField>
              <TextField 
                label='Ämne' 
                size='small' 
                name='subject' 
                value={this.state.subject} 
                onChange={this.onChange}>
              </TextField>
            </Stack>
            <TextField 
              label='Rubrik' 
              size='small' 
              name='title' 
              value={this.state.title} 
              onChange={this.onChange}>
            </TextField>
            <TextField 
              multiline 
              rows={10} 
              name='text' 
              value={this.state.text} 
              onChange={this.onChange}>
            </TextField> 
            <Button 
              type='submit'
              variant='contained'>
                Text
            </Button>
          </Stack>
        </form>
      </>
    )
  }
}
 
export default PostForm