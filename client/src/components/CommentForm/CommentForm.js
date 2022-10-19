import { Stack, TextField } from '@mui/material';
import React from 'react'

// https://stackoverflow.com/questions/65161428/how-to-remove-border-in-textfield-fieldset-in-material-ui
class CommentForm extends React.Component {
  state = {  } 
  render() { 
    return (
      <>
        <Stack spacing={2} sx={{ maxWidth: '600px' }}>
          <TextField
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
        </Stack>
      </>
    )
  }
}
 
export default CommentForm
