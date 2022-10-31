import { Card, CardActionArea, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { DateFormatter } from '../../utils/DateFormatter.js'

class PostPreview extends React.Component {
  #dateFormatter

  constructor () {
    super()
    this.#dateFormatter = new DateFormatter()
  }

  render() { 
    const { title, author, subject, createdAt, text, _id } = this.props.post
  
    const location = `/post/${_id}`
    const textPreview = text.slice(0, 500) + '...'
    const date = this.#dateFormatter.getFormattedDate(createdAt)
    const subHeaderText = `${author} in ${subject} · ${date}`

    return (
      <> 
        <Card variant='filled'>
          <CardActionArea 
            href={location} 
            sx={{ 
              '.MuiCardActionArea-focusHighlight': { 
                color: '#FFFFFF' 
              }
            }}>
            <CardHeader 
              sx={{ 
                '.MuiCardHeader-title': { 
                  fontWeight: 'bold' 
                }, 
                '.MuiCardHeader-subheader': { 
                  fontSize: '0.9rem', 
                  marginTop: '2px' 
                }
              }}
              title={title}
              subheader={subHeaderText}>
            </CardHeader>
            <CardContent 
              sx={{ 
                paddingTop: '0px' 
              }}>
              <Typography>
                {textPreview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    )
  }
}
 
export default PostPreview
