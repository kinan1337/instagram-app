

// REGISTRATION

import { instance } from "../config/Config";
import { requestPath } from "./requestPath";

export const CREATE_USER = (data) => instance.post(requestPath.createUser, data)

export const LOGIN_USER = (data) => instance.post(requestPath.loginUser, data)