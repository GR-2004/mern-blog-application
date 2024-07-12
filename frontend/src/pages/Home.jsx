import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction.jsx";
import PostCard from "../components/PostCard.jsx";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res= await fetch('/api/post/getposts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPosts();
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 m-8">Welcome to my Blog</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          Here you'll find a variety of articles and tutorials on topics such as web development, software engineering, and programming languages.
        </p>
        <Link to="/search" className="text-sm sm:text-base text-teal-500 font-bold hover:underline">
          View all posts
        </Link>
      </div>
      <div className="bg-amber-100 dark:bg-slate-700 p-4 mb-8">
        <CallToAction />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/search" className="text-sm text-teal-500 hover:underline">
          View all posts
        </Link>
      </div>
    </div>
  );
};

export default Home;
