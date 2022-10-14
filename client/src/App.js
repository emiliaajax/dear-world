import { Component } from 'react'
import PostForm from './components/PostForm/PostForm.js'

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="App">
      <header className="App-header">
        <div>
          <PostForm></PostForm>
        </div>
      </header>
    </div>
    )
  }
}

export default App
