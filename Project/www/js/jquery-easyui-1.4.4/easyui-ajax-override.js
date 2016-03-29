
// 重写 加载 tree 方法
$.fn.tree.defaults.loader = function(param, success, error) {
    var opts = $(this).tree('options');
    if (!opts.url) return false;

    Utils.doAjax({
		type: opts.method,
        url: opts.url,
        data: param,
        dataType: 'json',
		messager: function(data) {
			success(data);
		},
		error: function() {
			error.apply(this, arguments);
		}
	});
}


// 重写 加载 panel 方法  
/* *****没有必要重写 *****

$.fn.panel.defaults.loader = function(param, success, error) {
	var opts = $(this).panel('options');
	if (!opts.href) {
		return false
	}
	Utils.doAjax({
		type: opts.method,
		url: opts.href,
		cache: false,
		data: param,
		dataType: 'html',
		messager: false,
		success: function(data) {
			success(data);
		},
		error: function() {
			error.apply(this, arguments);
		}
	});
};

*/


// 重写 表单远程验证
/* *****没有必要重写 *****

$.fn.validatebox.defaults.rules.remote.validator = function(value, param){
	var data = {};
	data[param[1]] = value;
	var response = $.ajax({
		url:param[0],
		dataType:'json',
		data:data,
		async:false,
		cache:false,
		type:'post'
	}).responseText;
	return response == 'true';
};

*/



// 重写 表单 $.form('load') 加载ajax
/* *****有没有必要重写？  在不修改源代码的情况，如何修改？？ *****

*/


// 重写 加载 datagrid 方法
$.fn.datagrid.defaults.loader = function(param, success, error) {
	var opts = $(this).datagrid('options');
	if (!opts.url) return false;

	Utils.doAjax({
		type: opts.method,
		url: opts.url,
		data: param,
		dataType: 'json',
		messager: function(data) {
			success(data);
		},
		error: function() {
			error.apply(this, arguments);
		}
	});
}



// 重写 加载 datagrid 方法
$.fn.treegrid.defaults.loader = function(param, success, error) {
    var opts = $(this).treegrid('options');
    if (!opts.url) return false;
    
    Utils.doAjax({
        type: opts.method,
        url: opts.url,
        data: param,
        dataType: 'json',
        messager: function(data) {
            success(data);
        },
        error: function() {
            error.apply(this, arguments);
        }
    });
}



// 重写 加载 combobox 方法
$.fn.combobox.defaults.loader = function(param, success, error) {
	var opts = $(this).combobox('options');
	if (!opts.url) return false;

	Utils.doAjax({
		type: opts.method,
		url: opts.url,
		data: param,
		dataType: 'json',
		messager: function(data) {
			success(data);
		},
		error: function() {
			error.apply(this, arguments);
		}
	});
};