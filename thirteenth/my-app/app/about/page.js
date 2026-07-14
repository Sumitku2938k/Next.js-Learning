"use client";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <h1>This is about me</h1>
        <p>Goutam is a software engineer.</p>

        {/* Built in Css library in Next.js */}
        <style jsx>{`
          .container {
            padding: 20px;
            background-color: #f5f5f5;
            color: #333;
            font-family: Arial, sans-serif;
            text-align: center;
          }
        `}</style>
      </div>
      {/* Css will not apply on this container and will apply only when make the jsx be like "jsx global"*/}
      <div className="container"> 
        <h1>hello everyone</h1>
      </div>
    </div>
  );
};

export default About;
