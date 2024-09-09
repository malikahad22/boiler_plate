import axiosInstance from '../services/ApiServices';
import { errorHandler, responseHandler } from '../utils';

export const get = async (url, params = {}) => {
   try {
      const response = await axiosInstance.get(url, {
         headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
            'Access-Control-Allow-Headers': '*'
         },
         params: params
      });
      return responseHandler(response);
   } catch (error) {
      return errorHandler(error);
   }
}
