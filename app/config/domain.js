// true 生产环境  false 开发环境
const ADMINPROCESSENV =  process.env.NODE_ENV
console.info('NODE_ENV', ADMINPROCESSENV);

// API Root
const YUNHUNIHOST = window.location.host
const API_ROOT = 'http://'+YUNHUNIHOST + '/api/'
const API_ROOT_AUDIO = API_ROOT+'/ossfile/img'

// 设置Cookie的域名
const COOKIE_DOMAIN =  YUNHUNIHOST

export default {
  API_ROOT,
  COOKIE_DOMAIN,
  YUNHUNIHOST,
  API_ROOT_AUDIO
}
