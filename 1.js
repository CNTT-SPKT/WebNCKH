
$(window).load(function(){
$dropdown = $("#contextMenu");
$(".dsDeTai_actionButton").click(function() {
    var id = $(this).closest("tr").children().first().html();
    $(this).after($dropdown);
    $dropdown.find(".payLink").attr("href", "/transaction/pay?id="+id);
    $dropdown.find(".delLink").attr("href", "/transaction/delete?id="+id);
    $(this).dropdown();
});
});
$function getInfo()
{
	var f=document.doipass;
	if(f.pass.value="")
	{
		document.getElementById("pass-error").style.display='block';
		document.getElementById("pass-error").innnerHTML="Nhập lại mật khẩu!";
		f.pass.focus();
		return false;
	}
	else

		document.getElementById("pass-error").style.display='none';
	return true;
};
$(document).ready(function(){
		$("#btnsubmit").click(function(){
			alert('Gửi đơn đăng ký thành công!');

		});

});
$function Remove(){
	var f=document.sv_table_thongbao
	if(f.selectAll_ThongBao)
	{
		$("btn_Xoa").click(function(){
     	$("success").remove();
    });
	}
	$('input[name="all"],input[name="title"]').bind('click', function(){
		var status = $(this).is(':checked');
		$('input[type="checkbox"]', $(this).parent('div')).attr('checked', status);
		});
}