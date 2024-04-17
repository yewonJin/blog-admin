import {
  Dialog,
  FormLabel,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";

import { useSelectImage } from "../../hooks/Aws/useSelectImage";

type Props = {
  open: boolean;
  handleClose: () => void;
  postNumber: number;
};

export default function SelectImage({ open, handleClose, postNumber }: Props) {
  const { images, handleFileChange } = useSelectImage(postNumber);

  if (!images)
    return (
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        Loading...
      </Dialog>
    );

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
      <Stack py={2}>
        <Stack direction="row" px={2} justifyContent="space-between">
          <Typography textAlign="center" fontSize={20}>
            이미지 선택
          </Typography>
          <Stack direction="row" alignItems="center">
            <FormLabel
              htmlFor="file"
              sx={{
                padding: "6px 8px",
                ":hover": {
                  cursor: "pointer",
                  color: "#1976d2",
                  backgroundColor: "#f9f9f9",
                },
              }}
            >
              파일 업로드
            </FormLabel>
            <input
              id="file"
              type="file"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            ></input>
          </Stack>
        </Stack>
        <ImageList>
          {images
            .filter((item) => item.split("/")[2] !== "")
            .map((item) => (
              <ImageListItem
                sx={{
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                key={item}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `![image](https://doromobucket.s3.ap-northeast-2.amazonaws.com/${item})`
                  );
                  handleClose();
                }}
              >
                <img
                  alt="이미지"
                  src={`https://doromo.s3.ap-northeast-2.amazonaws.com/${item}`}
                ></img>
              </ImageListItem>
            ))}
        </ImageList>
      </Stack>
    </Dialog>
  );
}
