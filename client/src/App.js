import { Component } from 'react'
import BaseLayout from './components/BaseLayout/BaseLayout.js'
import PostForm from './components/PostForm/PostForm.js'

class App extends Component {
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <BaseLayout>
            <PostForm></PostForm>
          </BaseLayout>
        </header>
      </div>
    )
  }
}

export default App
