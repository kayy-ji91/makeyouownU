import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeedFilter } from '@types';

interface FeedState {
  postIds: string[];
  filter: FeedFilter;
  loading: boolean;
  hasMore: boolean;
  offset: number;
}

const initialState: FeedState = {
  postIds: [],
  filter: {
    sortBy: 'recent',
    includeReplies: true,
    includeReposts: true,
    mediaOnly: false,
  },
  loading: false,
  hasMore: true,
  offset: 0,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setPostIds: (state, action: PayloadAction<string[]>) => {
      state.postIds = action.payload;
    },
    appendPostIds: (state, action: PayloadAction<string[]>) => {
      state.postIds.push(...action.payload);
    },
    setFilter: (state, action: PayloadAction<Partial<FeedFilter>>) => {
      state.filter = { ...state.filter, ...action.payload };
      state.postIds = [];
      state.offset = 0;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    incrementOffset: (state, action: PayloadAction<number>) => {
      state.offset += action.payload;
    },
    resetFeed: (state) => {
      state.postIds = [];
      state.offset = 0;
      state.hasMore = true;
      state.loading = false;
    },
  },
});

export const {
  setPostIds,
  appendPostIds,
  setFilter,
  setLoading,
  setHasMore,
  incrementOffset,
  resetFeed,
} = feedSlice.actions;

export default feedSlice.reducer;
