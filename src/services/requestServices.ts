import axios from 'axios';
import { toast } from 'react-toastify';

export const getRequests = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/request');
    return response.data;
  } catch (error: any) {
    toast.error(`Error: ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    throw error;
  }
};
