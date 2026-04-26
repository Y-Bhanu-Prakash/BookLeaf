export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6; // Ensure password is at least 6 characters
  };
  
  export const validateName = (name) => {
    return name.length > 2; // Ensure name is at least 2 characters long
  };