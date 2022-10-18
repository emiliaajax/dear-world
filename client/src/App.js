import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import BaseLayout from './components/BaseLayout/BaseLayout.js'
import Home from './components/Home/Home.js'
import PostForm from './components/PostForm/PostForm.js'

class App extends React.Component {
  render() { 
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route 
              path='/'
              element={<BaseLayout><Home></Home></BaseLayout>}
            />
            <Route
              path='/create'
              element={<BaseLayout><PostForm></PostForm></BaseLayout>}
            />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
