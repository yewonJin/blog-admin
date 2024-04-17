import { useState } from "react";
import { useMutation } from "react-query";

import { login } from "../../api/login";

export const useLogin = () => {
  const [input, setInput] = useState({ id: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mutation = useMutation(
    ["login"],
    ({ id, password }: { id: string; password: string }) =>
      login({ id, password })
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(input);
  };

  return { input, handleInputChange, handleSubmit };
};
