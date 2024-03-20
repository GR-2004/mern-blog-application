import React from 'react';
import CallToAction from '../components/CallToAction.jsx';

const Projects = () => {
  return (
    <div className="min-h-screen max-w-3xl mx-auto flex justify-center items-center flex-col gap-6 p-6 md:p-8 lg:p-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Projects</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700">Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
      <CallToAction />
    </div>
  );
};

export default Projects;
