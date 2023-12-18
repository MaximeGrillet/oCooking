import { useContext } from "react";
import { AuthContext } from "../../hooks/auth-context.tsx";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Toutes les recettes</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="my-recipes">Mes recettes</Link>
            </li>
            <li>Mon compte</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
            <li>S'inscire</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
