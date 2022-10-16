import { Component } from 'react'
import BaseLayout from './components/BaseLayout/BaseLayout.js'
import Home from './components/Home/Home.js'

class App extends Component {
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <BaseLayout>
            <Home></Home>
          </BaseLayout>
        </header>
      </div>
    )
  }
}

export default App
