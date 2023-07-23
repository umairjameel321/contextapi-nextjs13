'use client'
import React from 'react'
import { createContext, useState } from 'react'
export const PostContext = createContext();

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Post 1', description: 'Description of Post 1' },
    ]);

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const editPost = (id, updatedPost) => {
        setPosts(prevPosts => {
            return prevPosts.map(post => {
              if (post.id === id) {
                return { ...post, ...updatedPost };
              }
              return post;
            });
        });
    }

    const deletePost = (id) => {
        const updatedPosts =  posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    }

    return (
        <PostContext.Provider value={{posts, addPost, editPost, deletePost}}>
            <div>{children}</div>
        </PostContext.Provider>
    )
}
