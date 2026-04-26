import axios from "axios";

const API_URL = `http://localhost:5500/api/auth`; // Backend API URL

export const login = async (email, password) => {
  try {
    const response = await axios.post($,{API_URL}/login, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post($,{API_URL}/signup, { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};