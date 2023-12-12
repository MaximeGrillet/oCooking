import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../@types/user";
import { authCurrentUser, authLogin, authRegister } from "../api/user";
import { Navigate } from "react-router-dom";

interface AuthContextInterface {
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    firstname: string,
    lastname: string,
    email: string,
    password: string,
  ) => Promise<boolean>;
  user: User | null;
}

export const AuthContext = createContext<AuthContextInterface>({
  isAuthenticated: false,
  token: null,
  login: async () => false,
  register: async () => false,
  user: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");

    if (currentToken) {
      (async () => {
        const connectedUser = await authCurrentUser(currentToken);
        if (connectedUser) {
          setIsAuthenticated(true);
          setUser(connectedUser);
        } else {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          setUser(null);
        }
      })();
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await authLogin(email, password);

      if (data) {
        setToken(data.accessToken);
        localStorage.setItem("token", data.accessToken);
        setUser(data.user);
        setIsAuthenticated(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const register = async (
    firstname: string,
    lastname: string,
    email: string,
    password: string,
  ) => {
    try {
      const data = await authRegister(firstname, lastname, email, password);

      setToken(data.accessToken);
      setUser(data.user);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, login, register, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const RequiredAuth = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};
