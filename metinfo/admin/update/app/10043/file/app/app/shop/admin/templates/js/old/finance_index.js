define(function(require, exports, module) {

	//�������
	var $ = jQuery = require('jquery');
	var common = require('common');
	
	//��ϸ����
	$(document).on('click',".detailed",function(){
		$('#detailed_div').html($(this).attr('data-info'));
	});
	
});