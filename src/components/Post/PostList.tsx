import { Stack } from "@mui/material";

import { Post } from "../../domain/post";
import PostItem from "./PostItem";

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <Stack gap={2}>
      {posts.map((post) => (
        <PostItem key={post.postNumber} post={post} />
      ))}
    </Stack>
  );
}
