import PostEditor from "./PostEditor";
import { useAddPost } from "../../hooks/Post/useAddPost";

export default function AddPost() {
  const { input, handleContentChange, handleInputChange, handleSubmit } =
    useAddPost();

  if (input.postNumber === 0) return <div>loading</div>;

  return (
    <PostEditor
      post={input}
      handleContentChange={handleContentChange}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}
