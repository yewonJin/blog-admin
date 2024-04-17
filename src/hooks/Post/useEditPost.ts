import { useMutation, useQuery, useQueryClient } from "react-query";

import { usePost } from "./usePost";
import { getPostByPostNumber, updatePost } from "../../api/post";
import { Post } from "../../domain/post";

export const useEditPost = (postNumber: number) => {
  const {
    input,
    initializeInputWithPost,
    handleContentChange,
    handleInputChange,
  } = usePost(postNumber);

  const queryClient = useQueryClient();

  const { data } = useQuery(
    ["getPostByPostNumber", postNumber],
    () => getPostByPostNumber(postNumber),
    {
      onSuccess(data) {
        initializeInputWithPost(data);
      },
    }
  );

  const mutation = useMutation(
    ["addPost"],
    () => {
      const post = data as Post;

      return updatePost({
        ...input,
        content: input.value,
        postNumber: post.postNumber,
        date: post.date,
        views: post.views,
        hearts: post.hearts,
        summary: post.summary,
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries("getPosts");
      },
    }
  );

  const handleSubmit = () => {
    if (!data) return;

    mutation.mutate();
  };

  return {
    input,
    handleContentChange,
    handleInputChange,
    handleSubmit,
  };
};
