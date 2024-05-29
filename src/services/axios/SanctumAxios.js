import axios from "axios";
const SanctumAxios = axios.create({
  baseURL: import.meta.env.VITE_API_SANCTUM_URL,

  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

SanctumAxios.defaults.withCredentials = true;
SanctumAxios.defaults.withXSRFToken = true;

export default SanctumAxios;
