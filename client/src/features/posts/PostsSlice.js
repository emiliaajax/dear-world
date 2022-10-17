import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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

  slice () {
    createSlice({
      name: 'posts',
      initialState: this.initialState,
      reducers: {
        reset: (state) => {
          state.isError = false
          state.isSuccess = false
          state.message = ''
        }
      },
      extraReducers: (builder) => {
        builder
          .addCase(this.getAllPosts.pending, (state) => {
            state.isPending = true
          })
          .addCase(this.getAllPosts.fulfilled, (state, action) => {
            state.isSuccess = true
            state.isError = false
            state.isPending = false
            state.posts = action.payload
          })
          .addCase(this.getAllPosts.rejected, (state, action) => {
            state.isSuccess = false
            state.isError = true
            state.isPending = false
            state.message = action.payload
            state.posts = null
          })
          .addCase(this.getPostById.pending, (state) => {
            state.isPending = true
          })
          .addCase(this.getPostById.fulfilled, (state, action) => {
            state.isSuccess = true
            state.isError = false
            state.isPending = false
            state.post = action.payload
          })
          .addCase(this.getPostById.rejected, (state, action) => {
            state.isSuccess = false
            state.isError = true
            state.isPending = false
            state.message = action.payload
          })
      }
    })
  }
}