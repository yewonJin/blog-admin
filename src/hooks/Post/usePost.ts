import { ChangeEvent, useState } from "react";
import { produce } from "immer";
import { SelectChangeEvent } from "@mui/material";

import { Post } from "../../domain/post";

export type PostInputType = {
  postNumber: number;
  title: string;
  category: string;
  value: string;
  keyword: string[];
};

export const initialPostInput: PostInputType = {
  postNumber: 0,
  title: "",
  category: "",
  value: "",
  keyword: [],
};

export const usePost = (postNumber: number) => {
  const [input, setInput] = useState({
    ...initialPostInput,
    postNumber,
  });

  const setPostNumber = (postNumber: number) => {
    setInput((prev) => ({ ...prev, postNumber }));
  };

  const initializeInputWithPost = (post: Post) => {
    setInput({
      postNumber,
      title: post.title,
      category: post.category,
      value: post.content,
      keyword: post.keyword,
    });
  };

  const initializeInput = () => {
    setInput(initialPostInput);
  };

  const handleContentChange = (value: string) => {
    if (!value) return;

    setInput(
      produce((draft) => {
        draft["value"] = value;
      })
    );
  };

  const handleInputChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const name = e.target.name as "title" | "category";

    setInput(
      produce((draft) => {
        draft[name] = e.target.value;
      })
    );
  };

  return {
    input,
    setPostNumber,
    initializeInput,
    initializeInputWithPost,
    handleContentChange,
    handleInputChange,
  };
};
