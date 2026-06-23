import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@types';

interface UserState {
  currentUser: User | null;
  users: Record<string, User>;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  users: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.users[action.payload.id] = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users[action.payload.id] = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User> & { id: string }>) => {
      if (state.users[action.payload.id]) {
        state.users[action.payload.id] = {
          ...state.users[action.payload.id],
          ...action.payload,
        };
        if (state.currentUser?.id === action.payload.id) {
          state.currentUser = state.users[action.payload.id];
        }
      }
    },
    removeUser: (state, action: PayloadAction<string>) => {
      delete state.users[action.payload];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  setCurrentUser,
  addUser,
  updateUser,
  removeUser,
  setLoading,
  setError,
  clearCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;
