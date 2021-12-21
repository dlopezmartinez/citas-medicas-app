const ID_TOKEN_KEY = "token";
import jwt_decode from "jwt-decode";

export const getToken = () => {
  return localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = token => {
  localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  localStorage.removeItem(ID_TOKEN_KEY);
};

export const transcribeToken = token => {
  return jwt_decode(token);
}

export default { getToken, saveToken, destroyToken , transcribeToken  };
