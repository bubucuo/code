import request from '../utils/request';
import prefix from './prefix.js'

export async function getProductListRequest() {
  return await request(prefix + 'getProductList');
}