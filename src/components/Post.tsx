import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';
import { RootState } from '@store/store';
import { likePost, unlikePost, incrementCommentCount } from '@store/slices/postSlice';
import { formatDate } from '@utils/date';
import { Post as PostType } from '@types';

interface PostProps {
  postId: string;
  onReply?: (postId: string) => void;
}

export const Post: FC<PostProps> = ({ postId, onReply }) => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  
  // Get post from Redux store
  const post = useSelector((state: RootState) => state.posts.posts[postId]);
  
  // Get author from Redux store
  const author = useSelector((state: RootState) => 
    post?.authorId ? state.user.users[post.authorId] : null
  );

  if (!post || !author) {
    return null;
  }

  const handleLike = () => {
    if (post.isLiked) {
      dispatch(unlikePost(postId));
    } else {
      dispatch(likePost(postId));
    }
  };

  const handleReply = () => {
    if (onReply) {
      onReply(postId);
    }
    setShowComments(!showComments);
  };

  return (
    <article className="border-b border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition cursor-pointer">
      {/* Post Header */}
      <div className="flex gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0" />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold hover:underline">
              {author.displayName}
            </h3>
            <span className="text-gray-500">@{author.username}</span>
            <span className="text-gray-500">·</span>
            <time className="text-gray-500 text-sm hover:underline">
              {formatDate(post.createdAt)}
            </time>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="ml-15 mb-3">
        <p className="text-base text-gray-900 dark:text-white break-words whitespace-pre-wrap">
          {post.content}
        </p>

        {/* Media */}
        {post.media && post.media.length > 0 && (
          <div className="mt-3 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {post.media.map((m) => (
              <div key={m.id} className="relative bg-black">
                {m.type === 'image' && (
                  <img
                    src={m.url}
                    alt={m.alt || 'Post media'}
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                )}
                {m.type === 'video' && (
                  <video
                    src={m.url}
                    controls
                    className="w-full h-auto max-h-[500px]"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post Stats */}
      <div className="ml-15 flex text-sm text-gray-500 gap-4 mb-3 py-2 border-t border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={handleReply}
          className="hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-900 flex items-center gap-2 px-2 py-1 rounded transition"
        >
          <MessageCircle size={16} />
          <span className="text-xs">{post.commentCount}</span>
        </button>
        <button className="hover:text-green-500 hover:bg-green-50 dark:hover:bg-gray-900 flex items-center gap-2 px-2 py-1 rounded transition">
          <Repeat2 size={16} />
          <span className="text-xs">{post.repostCount}</span>
        </button>
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-2 py-1 rounded transition ${
            post.isLiked
              ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
              : 'hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
          }`}
        >
          <Heart size={16} fill={post.isLiked ? 'currentColor' : 'none'} />
          <span className="text-xs">{post.likeCount}</span>
        </button>
        <button className="hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-900 p-2 rounded transition">
          <Share size={16} />
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="ml-15 mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Comments section - implement with Comment component
          </p>
        </div>
      )}
    </article>
  );
};

export default Post;
