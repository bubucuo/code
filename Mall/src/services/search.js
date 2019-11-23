import request from '../utils/request';
import prefix from './prefix.js'

export async function getFirstCatgoriesRequest() {
  return await request(prefix + 'getFirstCatgories');
}

export async function getSecondCatgoriesRequest() {
  return await request(prefix + 'getSecondCatgories');
}
