import axios from "axios";

const API_URL = "http://localhost:5000/api/profile";

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get($,{API_URL}/$,{userId});
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (userId, updatedData) => {
  try {
    const response = await axios.put($,{API_URL}/update/$,{userId}, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};