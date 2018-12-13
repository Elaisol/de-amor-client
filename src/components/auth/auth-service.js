import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (name, username, password) => {
    console.log(name, username, password)
    return this.service.post('/signup', {name, username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => {
      return response.data})
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
  
  logout = () => {
    return this.service.get('/logout', {})
    .then(response => response.data)
  }

}

export default AuthService;