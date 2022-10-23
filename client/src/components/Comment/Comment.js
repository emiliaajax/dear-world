import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import React from 'react'
import dateFormat from 'dateformat'

class Comment extends React.Component {
  render() {
    return (
      <>
        <Card variant='filled'>
          <CardHeader 
            sx={{ paddingLeft: 0, '.MuiCardHeader-title': { fontSize: '1.2rem', color: 'rgb(0, 100, 112)', fontWeight: 'bold' }, '.MuiCardHeader-subheader': { fontSize: '0.9rem', fontStyle: 'italic' } }}
            title={this.props.comment.name}
            subheader={dateFormat(new Date(this.props.comment.createdAt), 'mmmm d, yyyy')}>
          </CardHeader>
          <CardContent sx={{ paddingLeft: 0, paddingTop: '0px'}}>
            <Typography>
              {this.props.comment.comment}
            </Typography>
          </CardContent>
          <Divider sx={{ marginTop: '20px' }}/>
        </Card>
      </>
    )
  }
}
 
export default Comment
