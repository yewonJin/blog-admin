import { ChangeEvent } from "react";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";

import { usePostStore } from "../../store/post";
import MDViewer from "./Markdown/MDViewer";
import MDEditor from "./Markdown/MDEditer";
import { getCategories } from "../../api/category";
import { PostInputType } from "../../hooks/Post/usePost";

type Props = {
  post: PostInputType;
  handleContentChange: (value: string) => void;
  handleInputChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  handleSubmit: () => void;
};

export default function PostEditor({
  post,
  handleContentChange,
  handleInputChange,
  handleSubmit,
}: Props) {
  const { open, handleClickClose } = usePostStore();

  const { data: categories } = useQuery(["getCategories"], getCategories);

  if (!categories) return <div>loading...</div>;

  return (
    <Dialog fullWidth maxWidth="xl" open={open} onClose={handleClickClose}>
      <DialogContent>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <TextField
              onChange={handleInputChange}
              name="title"
              value={post.title}
              variant="standard"
            />
            <Select
              name="category"
              sx={{ "> div": { p: 1, px: 2 } }}
              autoWidth
              value={post.category}
              onChange={handleInputChange}
            >
              {categories.map((item) => (
                <MenuItem key={item.name} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Button
            variant="contained"
            onClick={() => {
              handleSubmit();
              handleClickClose();
            }}
          >
            제출
          </Button>
        </Stack>
        <Stack mt={2} sx={{ flexDirection: { xl: "row" }, gap: 3 }}>
          <Box
            sx={{
              width: { xs: "auto", xl: 820 },
              height: { xs: "40vh", xl: "80vh" },
            }}
            overflow="scroll"
            mb={2}
          >
            <MDViewer markdown={post.value} />
          </Box>
          <MDEditor
            value={post.value}
            handleContentChange={handleContentChange}
            postNumber={post.postNumber}
          />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
