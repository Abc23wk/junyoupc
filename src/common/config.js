let config = {
    // 设置域名
    apiSite: 'jy.baifanapi.com' 
   }
//  const http = process.env.NODE_ENV === 'development' ? 'http' : 'https'
 // const http = 'http'/ 'https' 确定是http 或者 https
 export const apiRoot = `https://${config.apiSite}`  
//  export const zanTokenHeaderName = 'X-Ca-ZanToken'
 // 以上配置可以继续增加