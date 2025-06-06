import React, { createContext, useState, useContext, useEffect } from "react";
import { createUser, login } from "../services/services.js";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //aqui vai ficar
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); //serve pra mostrar para a aplicacao que o processo ainda esta sendo realizado, nesse tempo pode mostrar um gif de processando

  useEffect(() => {
    //useEffect que manda em tudo
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
    setLoading(false); // set this to false at the end
  }, []);

  const SignIn = async (email, password) => {
    try {
      const response = await login(email, password);

      console.log(response);

      if (response.id) {
        // aqui usamos 'name' e 'email' porque é isso que o back retorna
        const user = {
          id: response.id,
          name: response.name,
          email: response.email,
        };

        setUser(user);
        localStorage.setItem("userInfo", JSON.stringify(user));
        setIsAuthenticated(true);
        setLoading(false);
        return null;
      } else {
        return "Usuário não cadastrado";
      }
    } catch (error) {
      console.error("SignIn error:", error);
      setLoading(false);
      return "Erro ao tentar logar";
    }
  };

  const SignUp = async (userName, senha, email) => {
    try {
      const response = await createUser(userName, senha, email);

      if (response.id) {
        console.log(
          "userContext: usuário criado id: ",
          response.id,
          "userName:",
          response.userName
        );
        setLoading(false);
        return response;
      } else {
        return "Erro algum erro ao criar usuário"; // User not found or invalid credentials
      }
    } catch (error) {
      console.error("SignUp error:", error);
      setLoading(false);
      return "Exceção ao criar usuário"; // Handle login error
    }
  };

  const SignOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("userInfo");
    setLoading(false);
  };

  //Aqui nesse retorno vc ta dizendo pro react: escuta aqui vc vai passar para todos os meus filhos essas informacoes: quem e o usuario, se ele ta autenticado, loading e outras funcioes
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, SignIn, SignUp, SignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
