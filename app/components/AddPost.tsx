"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Title = {
  title: "",
};

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // create a post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/post", { title }),
    {
      onError: (error) => {
        console.log(error);
        setTitle("");
        setIsDisabled(false);
        alert("you have to be signed in to save a message");
      },
    }
    // await fetch("/api/post", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title }),
    // })
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(
      title,

      {
        onSuccess: () => {
          setTitle("");
          setIsDisabled(false);
          console.log("submited");
          alert("thanks");
        },
      }
    );
  };

  return (
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="whats on your mind"
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>
      {/*  */}
      <div className={`flex bg-yellow-300 items-center justify-between gap-2`}>
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          }`}
        >
          {`${title.length}`}/300{" "}
        </p>
        <button
          disabled={isDisabled}
          type="submit"
          className="bg-teal-600 text-white py-2 rounded-lg p-2 disabled:opacity-25"
        >
          Create A Post
        </button>
      </div>
    </form>
  );
}
