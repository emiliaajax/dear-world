import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import BaseLayout from './components/BaseLayout/BaseLayout.js'
import Home from './components/Home/Home.js'
import CreatePostForm from './components/CreatePostForm/CreatePostForm.js'
import FullPost from './components/FullPost/FullPost.js'

class App extends React.Component {
  render() { 
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route 
              exact
              path='/'
              element={<BaseLayout><Home></Home></BaseLayout>}
            />
            <Route
              exact
              path='/create'
              element={<BaseLayout><CreatePostForm></CreatePostForm></BaseLayout>}
            />
            <Route
              exact
              path='/post/:id'
              element={<BaseLayout><FullPost></FullPost></BaseLayout>}
            />
            <Route
              exact
              path='/:subject'
              element={<BaseLayout><Home></Home></BaseLayout>}
            />
            <Route
              path="*"
              element={<BaseLayout><Home></Home></BaseLayout>}
            />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
