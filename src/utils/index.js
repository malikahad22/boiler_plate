import { toast } from 'react-toastify';

export const responseHandler = (resp) => {

   return { statusCode: resp?.status, data: resp?.data, message: resp.statusText };
}

export const errorHandler = (err) => {
   return err;
}

export const toastHandler = (message, type) => {
   switch (type) {
      case 'error':
         toast.error(message);
         break;
      case 'success':
         toast.success(message);
         break
      case 'warning':
         toast.warning(message)
   }
}