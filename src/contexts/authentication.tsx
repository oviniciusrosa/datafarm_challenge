import { ReactNode, createContext, useContext, useState } from "react";
import { getJwtToken, saveToken } from "~/services/auth";

interface AuthContextProps {
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type Props = { children: ReactNode };

export default function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!getJwtToken()
  );

  function authenticate(token: string) {
    saveToken(token);
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextProps {
  const contextProps = useContext(AuthContext);

  return contextProps;
}
