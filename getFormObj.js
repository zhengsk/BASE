/*
 *  getFormObjStr  getFormObj
 *  获取表单值，并转为字符串
 *  param:  $form       表单的jQuery对象
 *          exception   排除不需要的项
 *  author: zsk 2014-07-31 
 */
;
(function(window) {

    window.getFormObj = function($form, exception) {
        var param = {};
        $("[name]", $form).each(function() {
            var $this = $(this);
            if ($this.attr("type") == "radio" || $this.attr("type") == "checkbox") {
                if ($this.prop("checked")) {
                    param[$this.attr("name")] = $this.val();
                }
            } else {
                param[$this.attr("name")] = $this.val();
            }
        });
        if (exception) { // delete exception
            for (var i = 0, j = exception.length; i < j; i++) {
                delete param[exception[i]];
            }
        }
        return param;
    };

    window.getFormObjStr = function($form, exception) {
        var paramObj = window.getFormObj($form, exception);
        return JSON.stringify(paramObj);
    };
}(window));


/*
    formDataToJsonString 把表单提交数据 转换成 json 格式
*/
function formDataToJsonString(str) {
    var arr = str.split("&");
    var returnStr = "";
    var obj = {};
    for (var i = 0, j = arr.length; i < j; i++) {
        arr[i] = arr[i].replace(/(\S+)=(\S+)?/, function(str, $1, $2) {
            obj[$1] = $2 == undefined ? '' : decodeURIComponent($2);
        });
    };
    return JSON.stringify(obj);
}
