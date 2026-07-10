"use client"
import React from 'react';
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
const page = () => {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  }, []);
  
  return (
    <div>
        <h1>{params.slug}</h1>
        <button onClick={() => router.push('/dashboard')}>Dashboard</button>
    </div>
  );
}

export default page;
