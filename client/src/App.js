import { Component } from 'react'
import BaseLayout from './components/BaseLayout/BaseLayout.js'
import PostForm from './components/PostForm/PostForm.js'

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <BaseLayout>
              <PostForm></PostForm>
            </BaseLayout>
          </div>
        </header>
      </div>
    )
  }
}

export default App
