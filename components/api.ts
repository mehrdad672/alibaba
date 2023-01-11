import axios from "axios";

const api =axios.create({
  baseURL:'https://alibab-c7928-default-rtdb.firebaseio.com/'
});
export default api;