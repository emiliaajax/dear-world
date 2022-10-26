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
  
  /**
   * Updates states whenever the comment form receives input.
   *
   * @param {InputEvent} event 
   */
  #onChange = (event) => {
    this.#updateState(event)
    
    if (this.#isCommentTheEventTarget(event)) {
      this.#updateIsCommentEmptyState(false)
    }
  }

  /**
   * @param {InputEvent} event 
   */
  #updateState(event) {
    this.setState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))
  }

  /**
   * @param {InputEvent} event 
   * @returns {boolean}
   */
  #isCommentTheEventTarget(event) {
    return event.target.name === 'comment'
  }

  /**
   * @param {boolean} status 
   */
  #updateIsCommentEmptyState (status) {
    this.setState({ commentEmpty: status })
  }

  /**
   * @param {SubmitEvent} event 
   */
  #onSubmit = async (event) => {
    event.preventDefault()

    if (this.#isInvalidComment()) {
      this.#updateIsCommentEmptyState(true)
    } else {
      await this.#postComment()
      this.#resetCommentForm()
    }
  }

  /**
   * @returns {boolean}
   */
  #isInvalidComment() {
    return this.state.comment.trim().length === 0
  }

  async #postComment() {
    await new CommentsService().createPost(this.#getCommentData())
  }

  /**
   * @returns {object}
   */
  #getCommentData () {
    return {
      postId: this.props.postId,
      name: this.state.name.trim() ? this.state.name : 'Anonymous',
      comment: emojiProvider.replaceEmoticonsWithEmojis(this.state.comment)
    }
  }

  #resetCommentForm () {
    this.setState({ name: '', comment: ''})
  }

  /**
   * @returns {HTMLElement}
   */
  render() { 
    return (
      <>
        <form onSubmit={this.#onSubmit}>
          <Stack 
            spacing={2} 
            sx={{ 
              maxWidth: '600px' 
            }}>
            <TextField
              name='name'
              value={this.state.name}
              onChange={this.#onChange}
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
              onChange={this.#onChange}
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
              sx={{ 
                maxWidth: '180px', 
                backgroundColor: '#222' 
              }}>
                Submit comment
            </Button>
          </Stack>
        </form>
      </>
    )
  }
}
 
export default CommentForm
