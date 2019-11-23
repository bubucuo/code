import request from '../utils/request';
import prefix from './prefix.js'

export async function loginRequest() {
  return await request(prefix + 'login');
}
export async function getUserInfoRequest() {
  return await request(prefix + 'getUserInfo');
}