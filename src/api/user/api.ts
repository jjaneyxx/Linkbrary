import { apiClient } from '../apiClient';

const apiRoutes = {
  checkEmail: '/users/check-email',
};

const api = {
  checkEmail: (email: string) => apiClient.post(apiRoutes.checkEmail, { email }),
};

export default api;
