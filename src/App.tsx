import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { setCurrentUser } from '@store/slices/userSlice';
import { db } from '@db/schema';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { theme } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    // Initialize user from database
    const initializeUser = async () => {
      try {
        const users = await db.users.toArray();
        if (users.length > 0) {
          dispatch(setCurrentUser(users[0]));
        }
      } catch (error) {
        console.error('Failed to initialize user:', error);
      }
    };

    initializeUser();
  }, [dispatch]);

  useEffect(() => {
    // Apply theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-gray-950'}`}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
            <h1 className="text-xl font-bold">MakeYourOwnU</h1>
          </div>
          
          <nav className="space-y-4">
            <NavItem icon="🏠" label="Home" />
            <NavItem icon="🔍" label="Explore" />
            <NavItem icon="🔔" label="Notifications" />
            <NavItem icon="💬" label="Messages" />
            <NavItem icon="🔖" label="Bookmarks" />
            <NavItem icon="👤" label="Profile" />
          </nav>

          <button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition">
            Compose Post
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 border-r border-gray-200 dark:border-gray-800 max-w-2xl">
          {/* Timeline Header */}
          <div className="sticky top-0 backdrop-blur bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 px-4 py-3 z-10">
            <h2 className="text-xl font-bold">Home</h2>
          </div>

          {/* Posts Feed */}
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {currentUser ? (
              <div className="p-4">
                <p className="text-gray-600">Welcome, {currentUser.displayName}!</p>
                <p className="text-sm text-gray-500 mt-2">Your offline social media app is ready. Start creating posts!</p>
              </div>
            ) : (
              <div className="p-4 text-center">
                <p className="text-gray-600">Get started by creating a profile</p>
              </div>
            )}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 p-4">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4">
            <input
              type="text"
              placeholder="Search MakeYourOwnU"
              className="w-full bg-gray-200 dark:bg-gray-800 rounded-full py-2 px-4 text-sm"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

function NavItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer transition">
      <span className="text-xl">{icon}</span>
      <span className="text-lg">{label}</span>
    </div>
  );
}

export default App;
