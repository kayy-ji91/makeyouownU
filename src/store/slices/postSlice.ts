import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '@types';

interface PostState {
  posts: Record<string, Post>;
  loading: boolean;
  error: string | null;
  recentPostIds: string[];
}

const initialState: PostState = {
  posts: {},
  loading: false,
  error: null,
  recentPostIds: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts[action.payload.id] = action.payload;
      state.recentPostIds.unshift(action.payload.id);
    },
    updatePost: (state, action: PayloadAction<Partial<Post> & { id: string }>) => {
      if (state.posts[action.payload.id]) {
        state.posts[action.payload.id] = {
          ...state.posts[action.payload.id],
          ...action.payload,
        };
      }
    },
    removePost: (state, action: PayloadAction<string>) => {
      delete state.posts[action.payload];
      state.recentPostIds = state.recentPostIds.filter(id => id !== action.payload);
    },
    likePost: (state, action: PayloadAction<string>) => {
      if (state.posts[action.payload]) {
        state.posts[action.payload].likeCount += 1;
        state.posts[action.payload].isLiked = true;
      }
    },
    unlikePost: (state, action: PayloadAction<string>) => {
      if (state.posts[action.payload]) {
        state.posts[action.payload].likeCount = Math.max(0, state.posts[action.payload].likeCount - 1);
        state.posts[action.payload].isLiked = false;
      }
    },
    incrementCommentCount: (state, action: PayloadAction<string>) => {
      if (state.posts[action.payload]) {
        state.posts[action.payload].commentCount += 1;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addPost,
  updatePost,
  removePost,
  likePost,
  unlikePost,
  incrementCommentCount,
  setLoading,
  setError,
} = postSlice.actions;

export default postSlice.reducer;
