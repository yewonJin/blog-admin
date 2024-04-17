import { useCookies } from "react-cookie";

import Main from "./components/Main";
import LoginForm from "./components/Login/LoginForm";

function App() {
  const [cookies] = useCookies(["jwt"]);

  if (!cookies.jwt) return <LoginForm />;

  return <Main />;
}

export default App;
