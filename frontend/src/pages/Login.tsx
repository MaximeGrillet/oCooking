import "../assets/styles/login.scss";
import { SyntheticEvent, useContext, useState } from "react";
import { AuthContext } from "../hooks/auth-context.tsx";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("jeremy@webilo.fr");
  const [password, setPassword] = useState("password");

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await login(email, password);

      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@email.fr"
          />
        </label>
        <label>
          Mot de passe :
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
          />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </>
  );
};

export default Login;
