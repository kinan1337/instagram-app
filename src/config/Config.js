import axios from "axios";

const baseURL = "https://cryxxxen.pythonanywhere.com/api";

export const instance = axios.create({baseURL})