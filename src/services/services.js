// src/services/apiService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8081";

// Usuários (User)
export const getUsers = (userId) => axios.get(`${API_BASE_URL}/users`);
export const createUser = (userDto) =>
  axios.post(`${API_BASE_URL}/user/`, userDto);
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, // <- agora é o nome certo!
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return { error: data };
    }
  } catch (error) {
    return { error: "Erro inesperado no login", details: error.message };
  }
};

// Carteiras (Wallet)
export const getWalletsByUser = (userId) =>
  axios.get(`${API_BASE_URL}/users/${userId}/wallets`);
export const createWallet = (userId, walletData) =>
  axios.post(`${API_BASE_URL}/users/${userId}/wallets`, walletData);
export const updateWallet = (userId, walletId, walletData) =>
  axios.put(`${API_BASE_URL}/users/${userId}/wallets/${walletId}`, walletData);
export const deleteWallet = (userId, walletId) =>
  axios.delete(`${API_BASE_URL}/users/${userId}/wallets/${walletId}`);

// Ativos (Assets)
export const getAssetsByWallet = (userId, walletId) =>
  axios.get(`${API_BASE_URL}/users/${userId}/wallets/${walletId}/assets`);
export const createAsset = (userId, walletId, assetData) =>
  axios.post(
    `${API_BASE_URL}/users/${userId}/wallets/${walletId}/assets`,
    assetData
  );
export const updateAsset = (userId, walletId, assetId, assetData) =>
  axios.put(
    `${API_BASE_URL}/users/${userId}/wallets/${walletId}/assets/${assetId}`,
    assetData
  );
export const deleteAsset = (assetId) =>
  axios.delete(`${API_BASE_URL}/assets/${assetId}`);

// Exporte tudo junto se quiser
const api = {
  getUsers,
  createUser,
  login,
  getWalletsByUser,
  createWallet,
  updateWallet,
  deleteWallet,
  getAssetsByWallet,
  createAsset,
  updateAsset,
  deleteAsset,
};

export default api;
