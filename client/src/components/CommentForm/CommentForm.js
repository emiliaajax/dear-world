import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import CommentsService from '../../services/CommentsService'
import { emojiProvider } from 'emoji-provider'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      comment: '',
      commentEmpty: false,
    }
  }
  
  onChange = (event) => {
    this.setState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))

    if (event.target.name === 'comment') {
      this.setState({ commentEmpty: false })
    } 
  }

  onSubmit = async (event) => {
    event.preventDefault()

    if (this.invalidComment()) {
      this.setState({ commentEmpty: true })
    } else {

    const commentData = {
      postId: this.props.postId,
      name: this.state.name.trim() ? this.state.name : 'Anonymous',
      comment: emojiProvider.replaceEmoticonsWithEmojis(this.state.comment)
    }

    await new CommentsService().createPost(commentData)
    this.setState({ name: '', comment: ''})
  }
  }

  invalidComment() {
    return this.state.comment.trim().length === 0
  }

  render() { 
    return (
      <>
      <form onSubmit={this.onSubmit}>
          <Stack spacing={2} sx={{ maxWidth: '600px' }}>
            <TextField
              name='name'
              value={this.state.name}
              onChange={this.onChange}
              placeholder='Name'
              size='small' 
              sx={{ 
                backgroundColor: 'rgb(242, 242, 242)',
                '.MuiOutlinedInput-notchedOutline': { 
                  border: 'none' 
                },
                maxWidth: '400px'
              }}>
            </TextField>
            <TextField
              name='comment'
              value={this.state.comment}
              onChange={this.onChange}
              error={this.state.commentEmpty ? true : false}
              helperText={this.state.commentEmpty ? 'Your comment is empty' : ''}
              placeholder='Comment'
              multiline
              rows={10} 
              sx={{ 
                backgroundColor: 'rgb(242, 242, 242)',
                '.MuiOutlinedInput-notchedOutline': { 
                  border: 'none' 
                }
              }}>
            </TextField>
            <Button
              type='submit'
              variant='contained'
              sx={{ maxWidth: '180px', backgroundColor: '#222' }}>
                Submit comment
            </Button>
          </Stack>
        </form>
      </>
    )
  }
}
 
export default CommentForm
