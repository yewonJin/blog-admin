import { useMutation, useQueryClient } from "react-query";

import { deletePost } from "../../api/post";

export const useDeletePost = (postNumber: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(["deletePost"], () => deletePost(postNumber), {
    onSuccess() {
      queryClient.invalidateQueries("getPosts");
    },
  });

  const handleDeleteClick = () => {
    mutation.mutate();
  };

  return { handleDeleteClick };
};
