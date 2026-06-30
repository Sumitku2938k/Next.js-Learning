// "use client"
import { black } from 'next/dist/lib/picocolors';
// import { useState, useEffect } from 'react';
import fs from "fs/promises"
import { log } from 'next/dist/server/typescript/utils';
import Navbar from './component/Navbar';

export default function Home() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // Simulate an API call or other side effect
  // }, []);
  console.log("Goutam Here ");
  let a = fs.readFile(".gitignore")
  a.then(e => {
    console.log(e.toString())
  })

  return (
    <div style={{ backgroundColor: 'lightgray', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'blue', padding: '20px', border: '1px solid black' }}>
      <h1>My App</h1>
      <Navbar /> 
      <p>I am a page in the second/my-app directory.</p>
      {/* <p>Count: {count}</p> */}
      <button  style={{ padding: '10px', margin: '10px',border: '1px solid black' }}>Increment</button>
    </div>
  );
}
