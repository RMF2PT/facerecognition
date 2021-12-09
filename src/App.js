import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="bg-gradient-to-br bg from-indigo-400 to-orange-400 w-full h-screen">
      <Navigation />
      <Logo />
      {/* <ImageLinkForm />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
