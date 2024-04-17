import { useRef, useState } from "react";
import { Button, Divider, Stack, TextField } from "@mui/material";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import ImageIcon from "@mui/icons-material/Image";
import AddLinkIcon from "@mui/icons-material/AddLink";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import SelectImage from "../../Aws/SelectImage";

type Props = {
  value: string;
  postNumber: number;
  handleContentChange: (value: string) => void;
};

export default function MDEditor(props: Props) {
  const { value, handleContentChange, postNumber } = props;

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleShortKey = (shortKey: string) => {
    handleContentChange(value + shortKey);

    const textareaElement = ref.current?.firstElementChild
      ?.firstElementChild as HTMLTextAreaElement;

    textareaElement.focus();
  };

  return (
    <Stack gap={2}>
      <Stack
        pb={0.5}
        direction="row"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="text.disabled"
        alignItems="center"
      >
        <Stack
          direction="row"
          gap={1}
          sx={{
            "> svg": {
              fontSize: "1.8rem",
              color: "text.secondary",
              ":hover": {
                transition: "0.2s",
                scale: "1.1",
                cursor: "pointer",
                color: "text.primary",
              },
            },
          }}
        >
          <StrikethroughSIcon onClick={() => handleShortKey("~~~~")} />
          <FormatItalicIcon onClick={() => handleShortKey("**")} />
          <Divider sx={{ width: "1px", backgroundColor: "text.disabled" }} />
          <ImageIcon onClick={() => handleShortKey("![image](URL Here)")} />
          <AddLinkIcon onClick={() => handleShortKey("[](URL Here)")} />
          <FormatQuoteIcon onClick={() => handleShortKey(">")} />
        </Stack>
        <Button variant="contained" onClick={() => setOpen(true)}>
          이미지 선택
        </Button>
      </Stack>
      <SelectImage
        open={open}
        handleClose={() => setOpen(false)}
        postNumber={postNumber}
      />

      <TextField
        ref={ref}
        multiline
        name="content"
        value={value}
        autoFocus
        onChange={(e) => handleContentChange(e.target.value)}
        sx={{
          width: { xs: "100%", xl: "600px" },
          height: { xs: "40vh", xl: "75vh" },
          overflowY: "scroll",
          backgroundColor: "background.paper",
          "> div": {
            "> textarea": {},
            fieldset: {
              border: "none",
            },
          },
        }}
      />
    </Stack>
  );
}
