import Dexie, { Table } from 'dexie';
import { User, Post, Comment, Interaction, Notification } from '@types';

export class AppDB extends Dexie {
  users!: Table<User>;
  posts!: Table<Post>;
  comments!: Table<Comment>;
  interactions!: Table<Interaction>;
  notifications!: Table<Notification>;

  constructor() {
    super('MakeYourOwnU');
    this.version(1).stores({
      users: 'id, username, createdAt',
      posts: 'id, authorId, createdAt',
      comments: 'id, postId, authorId, createdAt',
      interactions: 'id, userId, postId, commentId, type, createdAt',
      notifications: 'id, userId, fromUserId, createdAt, read',
    });
  }
}

export const db = new AppDB();
