import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counter",
    initialState: { 
        posts: [],
        todos: [],
        albums: [],
        comments: []
    },
    reducers: {
        savePosts: (state, action) => {
            state.posts = action.payload;
        },
        saveTodos: (state, action) => {
            state.todos = action.payload;
        },
        saveAlbums: (state, action) => {
            state.albums = action.payload
        },
        saveComments: (state, action) => {
            state.comments = action.payload
        }
    }
});

// Action creators are generated for each case reducer function
export const { savePosts, saveTodos, saveAlbums, saveComments } = counterSlice.actions;

export default counterSlice.reducer;
