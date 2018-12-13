import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
})

// const errHandler = err => {
//   if (err.response && err.response.data) {
//     // console.error("API response", err.response.data);
//     throw err.response.data.message
//   }
//   throw err;
// }

export default {
  addPicture(file, body) {
    const formData = new FormData();
    formData.append("picture", file);
    const bodyKeys = Object.keys(body);
    bodyKeys.forEach(key => {
      formData.append(`${key}`, body[key]);
    });
    console.log(body);
    return service
      .post('/cadastro', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
  }
}