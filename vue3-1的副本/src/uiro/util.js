import { config } from './config.js'
import axios from 'axios'


class Http {
    request({url,data={},method='GET'}){
        return  new Promise((resolve,reject)=>{
          this._request(url,resolve, reject,data,method)
        })
    }
    _request(url,resolve, reject,data={},method='GET'){
        axios({
            url:config.baseurl+url,
            method:method,
            data:data,
        }).then(res=>{
            resolve(res.data)
        })
    }
}
export {Http}