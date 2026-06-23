/**
 * Core TypeScript types for the MakeYourOwnU application
 */

export interface User {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  avatar?: string;
  coverImage?: string;
  createdAt: Date;
  updatedAt: Date;
  followerCount: number;
  followingCount: number;
}

export interface Post {
  id: string;
  authorId: string;
  author?: User;
  content: string;
  media?: Media[];
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  commentCount: number;
  repostCount: number;
  isLiked?: boolean;
  isReposted?: boolean;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  author?: User;
  content: string;
  media?: Media[];
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  isLiked?: boolean;
}

export interface Media {
  id: string;
  type: 'image' | 'video' | 'gif';
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Interaction {
  id: string;
  userId: string;
  postId?: string;
  commentId?: string;
  type: 'like' | 'repost' | 'bookmark';
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'repost' | 'follow';
  fromUserId: string;
  postId?: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export interface FeedFilter {
  sortBy: 'recent' | 'trending' | 'popular';
  includeReplies: boolean;
  includeReposts: boolean;
  mediaOnly: boolean;
}
