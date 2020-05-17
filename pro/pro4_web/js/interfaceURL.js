/**
 * Created by aijing on 2018/1/12.
 */
function interfaceUrl(method, params) {
    var result = $.ajax({
        crossDomain: true,
        type: "post",
        //url: 'http://123.56.232.141:8082/maystar_tj/services/servicesEnter.html',
        url: 'http://192.168.0.64:8080/maystar_tj/services/servicesEnter.html',
        async: false, // 同步
        data: JSON.stringify({
            "method": method,
            "params": params

        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).responseText;
    var json = eval("(" + result + ")");
    return json;
}