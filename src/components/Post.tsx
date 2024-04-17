import { Button, Container, Stack, Typography } from "@mui/material";
import { useQuery } from "react-query";

import PostList from "./Post/PostList";
import { getPosts } from "../api/post";
import PostDetails from "./PostDetails/PostDetails";
import { usePostStore } from "../store/post";

export default function Post() {
  const { data } = useQuery(["getPosts"], getPosts);

  const { setPostNumber, handleClickOpen } = usePostStore();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h1" textAlign="start">
          포스트
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setPostNumber(0);
            handleClickOpen();
          }}
        >
          추가
        </Button>
      </Stack>
      <PostList posts={data} />
      <PostDetails />
    </Container>
  );
}
