import React from 'react';
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 to-purple-200 text-center p-6">
      <h1 className="text-9xl font-extrabold text-pink-500">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Oops! Page not found 🐾
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        It looks like the page you’re looking for wandered off.  
        Don’t worry, we’ll guide you back home.
      </p>
      <button
        onClick={() => navigate('/dashboard')}
        className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition"
      >
        Take Me Home 🏠
      </button>
      <div className="mt-8 text-4xl animate-bounce">🐶</div>
    </div>
  );
};

export default Errorpage;