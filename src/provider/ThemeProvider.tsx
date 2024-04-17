import { ThemeProvider as Provider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Pretendard-Regular",
    h1: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "32px",
      lineHeight: "40px",
    },
    h2: {
      fontFamily: "Pretendard-SemiBold",
      fontSize: "28px",
    },
  },
});

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return <Provider theme={theme}>{children}</Provider>;
}
