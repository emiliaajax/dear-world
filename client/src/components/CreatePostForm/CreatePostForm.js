import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, FormControl, Grid, MenuItem, Select, Stack } from "@mui/material"
import PostsService from '../../services/PostsService'
import { emojiProvider } from 'emoji-provider'
import { Subjects } from '../../enum/subjects.js'

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      subject: '',
      title: '',
      text: '',
      titleEmpty: false,
      subjectEmpty: false,
      textTooShort: false
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()

    if (this.isInvalidTitle() || this.isInvalidSubject() || this.isInvalidTextLength()) {
      this.displayTitleError()
      this.displaySubjectError()
      this.displayTextError()
    } else {
      const response = await new PostsService().createPost(this.getPostData())
      this.navigateToCreatedPost(await response.id)
    }
  }

  navigateToCreatedPost(id) {
    window.location.href = `/post/${id}`
  }

  getPostData() {
    return {
      author: this.state.author.trim() ? this.state.author : 'Anonymous',
      subject: this.state.subject,
      title: this.state.title,
      text: emojiProvider.replaceEmoticonsWithEmojis(this.state.text)
    }
  }

  isInvalidTitle() {
    return this.state.title.trim().length === 0
  }

  isInvalidSubject() {
    return this.state.subject.length === 0
  }

  isInvalidTextLength() {
    return this.state.text.length < 500
  }

  displayTitleError() {
    if (this.isInvalidTitle()) {
      this.setState({ titleEmpty: true })
    }
  }

  displaySubjectError() {
    if (this.isInvalidSubject()) {
      this.setState({ subjectEmpty: true })
    }
  }

  displayTextError() {
    if (this.isInvalidTextLength()) {
      this.setState({ textTooShort: true })
    }
  }

  onChange = (event) => { 
    this.updatePostFormState(event)
    this.updateEmptyTitleState(event)
    this.updateTextLengthState(event)
  }

  updatePostFormState (event) {
    this.setState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))
  }

  updateEmptyTitleState (event) {
    if (event.target.name === 'title') {
      this.setState({ titleEmpty: false })
    }
  }

  updateTextLengthState (event) {
    if (event.target.name === 'text' && this.state.text.length > 500) {
      this.setState({ textTooShort: false })
    } 
  }

  onSubjectChange = (event) => {
    this.setState({ subject: event.target.value })
    this.setState({ subjectEmpty: false })
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
                        error={this.state.subjectEmpty ? true : false}
                        helperText={this.state.subjectEmpty
                          ? 'You need to choose a subject'
                          : ''
                        }
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
                  error={this.state.titleEmpty ? true : false}
                  helperText={this.state.titleEmpty ? 'Your post needs a title' : ''}
                  value={this.state.title}
                  onChange={this.onChange}>
                </TextField>
                <TextField
                  multiline
                  rows={20}
                  name='text'
                  error={this.state.textTooShort ? true : false}
                  helperText={this.state.textTooShort ? 'Your post needs to be at least 500 characters...' : ''}
                  value={this.state.text}
                  onChange={this.onChange}>
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <Button
                type='submit'
                variant='contained'
                disabled={this.state.publishDisabled ? true : false}
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

export default CreatePostForm
