import EditPost from "./EditPost";
import AddPost from "./AddPost";
import { usePostStore } from "../../store/post";

export default function PostDetails() {
  const { postNumber } = usePostStore();

  if (postNumber !== 0) {
    return <EditPost postNumber={postNumber} />;
  } else {
    return <AddPost />;
  }
}
