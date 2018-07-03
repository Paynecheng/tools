function customAjax(method, url, requestBody, xs) {
    var dfd = $.Deferred();

    if(!requestBody){
        requestBody = '';
    }

    $.ajax({
        type: method,
        url: url,
        data: JSON.stringify(requestBody),
        beforeSend: function (request) {
            if (xs) {
                request.setRequestHeader("token", xs);
            }
            request.setRequestHeader("Content-Type","application/json")
        },
        dataType: 'json',
        success: function (data) {
            dfd.resolve(data);
        },
        error: function (xhr) {
            dfd.reject(xhr);
        }
    });
    return dfd.promise()
}
