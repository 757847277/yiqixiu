define(function(require, exports, module) {
	//�Ż�ȯ
	var $ = jQuery = require('jquery');
	var common = require('common');	
	//�����Ʒ
	$(document).on('click',".add-goods",function(){
		$("input[name='select_goods']").val($("input[name='goods_list']").val());
		$("input[name='select_goods']").keyup();
	});
	
	//������Ʒ
	$(document).on('click',".save-goods",function(){
		$("input[name='goods_list']").val($("input[name='select_goods']").val());
		do_json_discount_goods();
	});
	
	//ɾ����Ʒ
	$(document).on('click',".del-goods",function(){
		var id = $(this).attr('data-id');
		var selected = $("input[name='goods_list']").val();
		$("input[name='goods_list']").val(selected.replace(id+',', ''));
		$('#goods-div-'+id).remove();	
	});
	
	//ѡ����Ʒ
	$(document).on('click',".select_p",function(){
		var id = $(this).attr('data-id');
		var select = "select-"+id;
		$('#'+select).html("<a class=\"noselect_p\" data-id=\""+id+"\" href=\"javascript:void(0)\">��ѡ��</a>");
		var selected = $("input[name='select_goods']").val();
		$("input[name='select_goods']").val(selected+id+',');
	});
	
	//ȡ����Ʒ
	$(document).on('click',".noselect_p",function(){
		var id = $(this).attr('data-id');
		var select = "select-"+id;
		$('#'+select).html("<a class=\"select_p\" data-id=\""+id+"\" href=\"javascript:void(0)\">ѡ��</a>");
		var selected = $("input[name='select_goods']").val();
		$("input[name='select_goods']").val(selected.replace(id+',', ''));

		
	});
	
	//��ȡ��Ʒ�б���Ʒ
	function do_json_discount_goods(){
		var url = own_form+'a=do_json_discount_goods&idlist='+$("input[name='goods_list']").val();
		$.ajax({
			url: url,
			type: 'GET',
			cache: false,
			success: function(data) {
				$('#dl_goods_list').html(data);
			}
		});
	}
	
	do_json_discount_goods();
});