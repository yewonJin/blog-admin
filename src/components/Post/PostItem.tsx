import { Button, Paper, Stack, Typography } from "@mui/material";

import { Post } from "../../domain/post";
import { usePostStore } from "../../store/post";
import { useDeletePost } from "../../hooks/Post/useDeletePost";

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { setPostNumber, handleClickOpen } = usePostStore();
  const { handleDeleteClick } = useDeletePost(post.postNumber);

  return (
    <Paper
      sx={{
        display: "flex",
        padding: "16px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography fontSize={18} bgcolor="#ccc" px={1}>
          {post.postNumber}
        </Typography>
        <Typography fontSize={18}>{post.title}</Typography>
      </Stack>
      <Stack direction="row" gap={2}>
        <Button
          variant="contained"
          color="info"
          onClick={() => {
            setPostNumber(post.postNumber);
            handleClickOpen();
          }}
        >
          수정
        </Button>
        <Button variant="contained" color="error" onClick={handleDeleteClick}>
          삭제
        </Button>
      </Stack>
    </Paper>
  );
}
