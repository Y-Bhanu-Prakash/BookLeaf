export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  
  export const calculateDeadline = (borrowDate) => {
    const deadline = new Date(borrowDate);
    deadline.setDate(deadline.getDate() + 14); // Set a 14-day deadline for book return
    return deadline.toLocaleDateString();
  };