import { Button, Stack, TextField, Typography } from "@mui/material";

import { useLogin } from "../../hooks/Auth/useLogin";

export default function LoginForm() {
  const { input, handleInputChange, handleSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={2} width={300} mx="auto" mt={16}>
        <Typography variant="h2">로그인</Typography>
        <TextField
          placeholder="아이디"
          name="id"
          onChange={handleInputChange}
          value={input.id}
          sx={{ "> div > input": { p: 1 } }}
        />
        <TextField
          placeholder="비밀번호"
          type="password"
          onChange={handleInputChange}
          name="password"
          value={input.password}
          sx={{ "> div > input": { p: 1 } }}
        />
        <Button variant="contained" color="success" type="submit">
          로그인
        </Button>
      </Stack>
    </form>
  );
}
