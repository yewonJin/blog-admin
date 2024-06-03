import { useMutation, useQuery, useQueryClient } from "react-query";

import { getImages, postImages } from "../../api/aws";

export const useSelectImage = (postNumber: number) => {
  const queryClient = useQueryClient();

  const { data: images } = useQuery(["getImages", postNumber], () =>
    getImages(postNumber)
  );

  const mutation = useMutation(
    (formData: FormData) => postImages(postNumber, formData),
    {
      onSuccess() {
        setTimeout(() => {
          return queryClient.invalidateQueries(["getImages"]);
        }, 500);
      },
    }
  );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const formData = new FormData();

    for (let i = 0; i < e.target.files.length; i++) {
      formData.append(`files`, e.target.files[i]);
    }

    mutation.mutate(formData);
  };

  return { images, handleFileChange };
};
