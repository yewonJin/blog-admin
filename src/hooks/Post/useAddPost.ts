import { useMutation, useQuery, useQueryClient } from "react-query";

import { addPost, getNextPostNumber } from "../../api/post";
import { usePost } from "./usePost";

export const useAddPost = () => {
  const { data: nextPostNumber } = useQuery(
    ["getNextPostNumber"],
    getNextPostNumber
  );

  const { input, initializeInput, handleContentChange, handleInputChange } =
    usePost(nextPostNumber);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    ["addPost"],
    () => {
      initializeInput();

      return addPost({
        ...input,
        content: input.value,
        postNumber: nextPostNumber,
        date: new Date(),
        views: 0,
        hearts: 0,
        summary: "",
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries("getPosts");
      },
    }
  );

  const handleSubmit = () => {
    mutation.mutate();
  };

  return {
    input,
    handleContentChange,
    handleInputChange,
    handleSubmit,
  };
};
