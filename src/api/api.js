import axios from 'axios'

// DB setup
const baseURL = window.location.href.includes("localhost")
  ? "http://localhost:8000"
  : " ";

export default axios.create({
  baseURL,
  headers: { "Content-Type": "multipart/form-data" }
});