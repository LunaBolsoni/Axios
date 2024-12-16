import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGZiMDE3NTc1NzAyMDFkNDljMjdjZmVmODU1OTEzZCIsIm5iZiI6MTczMjY0Mjc4MC43MzcsInN1YiI6IjY3NDYwN2RjMDY0MjRiZGUyNzA0ZjIxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uyp5_uLWE-NL8DC6NZpxUcacieSA0gq0baDK_Z2eeeM`,
  },
});

export default api;
