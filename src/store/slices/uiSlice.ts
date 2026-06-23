import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  composerOpen: boolean;
  activeTab: 'home' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'profile';
}

const initialState: UIState = {
  theme: 'light',
  sidebarOpen: true,
  composerOpen: false,
  activeTab: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    setComposerOpen: (state, action: PayloadAction<boolean>) => {
      state.composerOpen = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<UIState['activeTab']>) => {
      state.activeTab = action.payload;
    },
  },
});

export const {
  setTheme,
  toggleSidebar,
  setSidebarOpen,
  setComposerOpen,
  setActiveTab,
} = uiSlice.actions;

export default uiSlice.reducer;
