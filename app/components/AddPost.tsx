 'use client'

 import { useMutation, useQueryClient } from "@tanstack/react-query";
 import React, { useState } from "react";
 import axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] =useState(false)

  // create a post
 const {mutate} = useMutation(
   async ({title}: {title: string}) => await axios.post('/api/post/addPost', {title})
 )

 const submitPost = async (e : React.FormEvent) => {
   e.preventDefault();
   setIsDisabled(true);
   mutate({title});
 } 

  return (
    <form  onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
      <div  className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder='whats on your mind'
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>
      {/*  */}
      <div className={`flex bg-yellow-300 items-center justify-between gap-2`}>
          <p className={`font-bold text-sm ${title.length > 300 ? 'text-red-700' : 'text-gray-700'}`}>{`${title.length}`}/300 </p>
          <button
          disabled={isDisabled}
          type='submit'
          className="bg-teal-600 text-white py-2 rounded-lg p-2 disabled:opacity-25"
          
          >Create A Post</button>
      </div>
    </form>
  );
}
