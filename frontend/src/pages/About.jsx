import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 text-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">About Blogify</h1>
          <div className="text-lg lg:text-xl text-gray-700">
            <p>Welcome to Blogify! This blog was created by Ganesh Rana as a personal project to share his thoughts and ideas with the world. Ganesh is a passionate developer who loves to write about technology, coding, and everything in between.</p>
            <p>On this blog, you'll find weekly articles and tutorials covering topics such as web development, software engineering, and programming languages. Ganesh is always learning and exploring new technologies, so be sure to check back often for fresh content!</p>
            <p>We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
