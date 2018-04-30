var tools = {
    /**
     * 获取url参数
     * 
     * @param {string} url 
     * @returns {Object}
     */
    curParam: function (url) {
        url = decodeURIComponent(url);
        var paramsStr = url.slice(url.indexOf('?') + 1);
        var objArr = {};
        paramsStr.split('&').forEach(function (item) {
            objArr[item.split('=')[0]] = item.split('=')[1]
        });
        return objArr;
    },
    /**
     * 
     * 
     * @param {srting} url 
     * @returns promise
     */
    get: function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4) {
                    if(( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                }
            }
            xhr.open('get', url, true);                        
            xhr.send(null);
        })
    },
    post: function (url, reviceName, req, token) {
        return new Promise(function (resolve, reject) {
            if(!token){
                token = '';
            }
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4){
                    if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                        resolve(JSON.parse(res.responseText))
                    }
                }
            }
            xhr.open('post', url, true);
            xhr.setRequestHeader('token', token)
            xhr.send(JSON.stringify({reviceName: req}))
        })
    },
    trim: function () {

    },

}

// export default tool;