import api from "./axiosConfig";

// login
export const postLoginDetails = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/signin", { email, password });

    return response.data;
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
};

// signup
export const postSignUpDetails = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const response = await api.post("/auth/signup", {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Signup API error:", error);
    throw error;
  }
};
