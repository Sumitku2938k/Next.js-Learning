"use client";
import { submitAction } from "../actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}} className="flex flex-col items-center">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" className="text-white m-4 bg-gray-700 border border-gray-500 rounded"/>
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input type="text" id="address" name="address" className="text-white m-4 bg-gray-700 border border-gray-500 rounded"/>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
