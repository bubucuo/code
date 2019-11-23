import request from '../utils/request';
import prefix from './prefix.js'

export async function logoutRequest() {
  return await request(prefix + 'logout');
}
