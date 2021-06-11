import {Http} from './util'

class Book extends Http{
    getrelrlir(){
        return  this.request({
            url:'default/getGirl'
        })
    }
}
function getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
}


export {
    Book,
    getQueryString
}