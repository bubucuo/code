import request from '../utils/request';
import prefix from './prefix.js'

export async function getHomeCarouselRequest() {
  return await request(prefix + 'getHomeCarousel');
}

export async function getMallNavRequest() {
  return await request(prefix + 'getMallNav');
}
