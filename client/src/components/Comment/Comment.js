import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import React from 'react'
import { DateFormatter } from '../../utils/DateFormatter.js'

class Comment extends React.Component {
  #dateFormatter

  constructor () {
    super()
    this.#dateFormatter = new DateFormatter()
  }

  render() {
    const { name, comment, createdAt } = this.props.comment

    return (
      <>
        <Card variant='filled'>
          <CardHeader
            title={name}
            subheader={this.#dateFormatter.getFormattedDate(createdAt)}
            sx={{ 
              paddingLeft: 0, 
              '.MuiCardHeader-title': { 
                fontSize: '1.2rem', 
                color: 'rgb(0, 100, 112)',
                fontWeight: 'bold' 
              }, 
              '.MuiCardHeader-subheader': { 
                fontSize: '0.9rem', 
                fontStyle: 'italic' 
              } 
            }} 
          />
          <CardContent
            sx={{ 
              paddingLeft: 0, 
              paddingTop: '0px'
            }}>
            <Typography>
              {comment}
            </Typography>
          </CardContent>
          <Divider 
            sx={{ 
              marginTop: '20px' 
            }}
          />
        </Card>
      </>
    )
  }
}
 
export default Comment
