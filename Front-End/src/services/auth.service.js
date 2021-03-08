import axios from 'axios';
import config from '@/resources/config.js';

class AuthService {
  login(user) {
    return axios
      .post(config.JWT_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(config.JWT_URL + 'register', {
      name: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();