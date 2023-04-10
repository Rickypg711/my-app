"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  // const queryClient = useQueryClient();

  // create a post
  const createPost = async (title: string) => {
    try {
      const response = await axios.post("/api/post", { title });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const onSuccess = () => {
    toast.success('POST has been made 🔥')
    setTitle("");
    setIsDisabled(false);
    console.log("submited");
    alert("thanks");
  };

  const onError = (error: AxiosError) => {
    console.log(error);
    setTitle("");
    setIsDisabled(false);
    // alert("you have to be signed in to save a message");
    toast.error(error.message)

  };

  const { mutate } = useMutation(createPost, { onSuccess, onError });

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="what's on your mind"
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


// import React, { useState, FormEvent, ChangeEvent } from "react";

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// const Title = {
//   title: "",
// };

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [isDisabled, setIsDisabled] = useState(false);

//   // create a post
//   const { mutate } = useMutation(
//     async (title: string) => await axios.post("/api/post", { title }),
//     {
//       onError: (error) => {
//         console.log(error);
//         setTitle("");
//         setIsDisabled(false);
//         alert("you have to be signed in to save a message");
//       },
//     }
//     // await fetch("/api/post", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({ title }),
//     // })
//   );

//   const submitPost = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsDisabled(true);
//     mutate(
//       title,

//       {
//         onSuccess: () => {
//           setTitle("");
//           setIsDisabled(false);
//           console.log("submited");
//           alert("thanks");
//         },
//       }
//     );
//   };

//   return (
//     <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
//       <div className="flex flex-col my-4">
//         <textarea
//           onChange={(e) => setTitle(e.target.value)}
//           name="title"
//           value={title}
//           placeholder="whats on your mind"
//           className="p-4 text-lg rounded-md my-2 bg-gray-200"
//         ></textarea>
//       </div>
//       {/*  */}
//       <div className={`flex bg-yellow-300 items-center justify-between gap-2`}>
//         <p
//           className={`font-bold text-sm ${
//             title.length > 300 ? "text-red-700" : "text-gray-700"
//           }`}
//         >
//           {`${title.length}`}/300{" "}
//         </p>
//         <button
//           disabled={isDisabled}
//           type="submit"
//           className="bg-teal-600 text-white py-2 rounded-lg p-2 disabled:opacity-25"
//         >
//           Create A Post
//         </button>
//       </div>
//     </form>
//   );
// }
