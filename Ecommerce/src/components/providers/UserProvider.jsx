import React, { useState } from "react";
import UserContext from "../context/UserContext";

const UserProvider = ({ children }) => {
  const usuarios = [
    { username: "", email: "", password: "" },
  ];
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);
  const login = (username, email, password) => { 
    fetch("https://64769b539233e82dd53a2bb9.mockapi.io/registrer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, email: email, password: password}, null, 2),
    })
      .then((respuesta) => respuesta.json())
      .then((usuarios) => {
        let encontrado = usuarios.find((usuario) => usuario.email == email);
        if (!encontrado) {
          setUser(null);
          setUserError("usuario no encontrado");
          setUserSuccess(null);
          return false;
        }

        if (encontrado.password != password) {
          setUser(null);
          setUserError("clave no coincide");
          setUserSuccess(null);
          return false;
        }

        setUser(encontrado);
        setUserError(null);
        setUserSuccess("Bienvenido");
        return true;
      })
      .catch((error) => {
        setUser(null);
        setUserError(error.msg);
        setUserSuccess(null);
        return error;
      });
  };

  const loginAsync = async (email, password) => {
      const consulta = await fetch(
        "https://64769b539233e82dd53a2bb9.mockapi.io/registrer"
      );
      const usuarios = await consulta.json();
      let encontrado = usuarios.find((usuario) => usuario.email == email && usuario.password === password);
      if (!encontrado) {
        setUser(null);
        setUserError("Usuario no encontrado");
        setUserSuccess(null);
        return false;
      }

      setUser(encontrado);
        setUserError(null);
        setUserSuccess("Bienvenido");
        return true;

      
  };
  return (
    <UserContext.Provider
      value={{ user, userError, login, usuarios, userSuccess, loginAsync }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;


