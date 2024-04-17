import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

import Post from "./Post";

export default function Main() {
  const [page, setPage] = useState("");

  if (page === "category") {
    return <div>카테고리</div>;
  }

  if (page === "post") {
    return <Post />;
  }

  return (
    <Container>
      <Typography textAlign="start" fontWeight="500" variant="h1">
        어드민 페이지
      </Typography>
      <Stack mt={3} direction="row" gap={2}>
        <Button onClick={() => setPage("category")} variant="contained">
          카테고리
        </Button>
        <Button onClick={() => setPage("post")} variant="contained">
          포스트
        </Button>
      </Stack>
    </Container>
  );
}
