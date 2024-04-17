import PostEditor from "./PostEditor";
import { useAddPost } from "../../hooks/Post/useAddPost";

export default function AddPost() {
  const { input, handleContentChange, handleInputChange, handleSubmit } =
    useAddPost();

  return (
    <PostEditor
      post={input}
      handleContentChange={handleContentChange}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}
