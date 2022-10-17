import { createAsyncThunk } from '@reduxjs/toolkit'
import PostsService from './PostsService.js'


export class PostsSlice {
  constructor () {
    this.initialState = {
      isError: false,
      isSuccess: false,
      message: ''
    }
  }

  getAllPosts() {
    createAsyncThunk('posts/all', async (thunkAPI) => {
      try {
        return await PostsService.getAllPosts()
      } catch (error) {
        const message = error.response.data.message || (error.response && error.response.data && error.response.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    })
  }

  getPostById() {
    createAsyncThunk('posts/id', async (id, thunkAPI) => {
      try {
        return await PostsService.getPostById(id)
      } catch (error) {
        const message = error.response.data.message || (error.response && error.response.data && error.response.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    })
  }
}