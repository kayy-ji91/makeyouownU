# MakeYourOwnU - Offline Social Media App

A modern offline-first social media application inspired by Threads, X (Twitter), and Instagram. Create posts, share thoughts, and interact locally without needing internet connectivity.

## Features

- 📱 **Post Creation** - Write posts with text, images, and media
- ❤️ **Interactions** - Like, comment, and repost content
- 👥 **User Profiles** - Personal profile with bio and post history
- 🔔 **Activity Feed** - Chronological or algorithmic feed
- 📸 **Media Support** - Images, videos, and media attachments
- 🌙 **Dark Mode** - Modern UI with theme support
- 📵 **Offline-First** - Full functionality without internet
- 💾 **Local Storage** - IndexedDB for persistent data

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Database:** IndexedDB (offline)
- **Build Tool:** Vite
- **UI Components:** Shadcn/ui

## Project Structure

```
makeyouownU/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Post.tsx
│   │   ├── Feed.tsx
│   │   ├── UserProfile.tsx
│   │   └── Composer.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   ├── Search.tsx
│   │   └── Notifications.tsx
│   ├── store/               # Redux store & slices
│   │   ├── postSlice.ts
│   │   ├── userSlice.ts
│   │   ├── feedSlice.ts
│   │   └── store.ts
│   ├── db/                  # IndexedDB operations
│   │   ├── schema.ts        # Database schema
│   │   ├── posts.ts         # Post operations
│   │   ├── users.ts         # User operations
│   │   └── init.ts          # DB initialization
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── hooks/               # Custom React hooks
│   │   ├── usePost.ts
│   │   ├── useFeed.ts
│   │   └── useUser.ts
│   ├── utils/               # Utility functions
│   │   ├── date.ts
│   │   ├── format.ts
│   │   └── validators.ts
│   ├── App.tsx
│   └── main.tsx
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kayy-ji91/makeyouownU.git
cd makeyouownU

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run in production
npm run preview
```

The app will be available at `http://localhost:5173`

## Usage

1. **Create a Profile** - Set up your username and bio
2. **Write Posts** - Click the compose button to create new posts
3. **Add Media** - Upload images and videos to your posts
4. **Interact** - Like, comment, and share other posts
5. **Browse Feed** - View posts from all users in your local database

## Key Features by Component

### Post Component
- Display posts with content, media, and metadata
- Like, comment, and repost actions
- Author information and timestamp

### Feed Component
- Infinite scroll or pagination
- Sort by recency or engagement
- Filter options (all posts, following, trending)

### Composer Component
- Rich text editor
- Image/video upload
- Character counter
- Scheduling support

### User Profile
- Profile customization
- Post history
- Followers/Following list
- Activity statistics

## Data Persistence

All data is stored in the browser's IndexedDB:
- Posts
- User profiles
- Comments and interactions
- Media files (as blobs)

Data persists across browser sessions and works completely offline.

## Development

```bash
# Run with hot reload
npm run dev

# Build TypeScript
npm run build

# Preview production build
npm run preview

# Run tests (when configured)
npm run test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Roadmap

- [ ] Notifications system
- [ ] Direct messaging
- [ ] User discovery and search
- [ ] Trending posts
- [ ] Post scheduling
- [ ] Media filters and editing
- [ ] User authentication
- [ ] Cloud sync option
- [ ] Export/Import data
- [ ] Web share API integration

## License

MIT License - feel free to use this project for personal or commercial purposes

## Support

For issues and feature requests, please open an issue on GitHub.

---

**Made with ❤️ by kayy-ji91**
