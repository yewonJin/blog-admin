import { useEditPost } from "../../hooks/Post/useEditPost";
import PostEditor from "./PostEditor";

type Props = {
  postNumber: number;
};

export default function EditPost({ postNumber }: Props) {
  const { input, handleContentChange, handleInputChange, handleSubmit } =
    useEditPost(postNumber);

  return (
    <PostEditor
      post={input}
      handleSubmit={handleSubmit}
      handleContentChange={handleContentChange}
      handleInputChange={handleInputChange}
    />
  );
}
