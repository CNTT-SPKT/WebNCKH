
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

$(document).ready(function(){
	$("#svPage_GuiDonDK").click(function(){
		alert('Gửi đơn đăng ký thành công!');
	});

});
// $function Remove(){
// 	var f=document.sv_table_thongbao
// 	if(f.selectAll_ThongBao)
// 	{
// 		$("btn_Xoa").click(function(){
//      	$("success").remove();
//     });
// 	}
// 	$('input[name="all"],input[name="title"]').bind('click', function(){
// 		var status = $(this).is(':checked');
// 		$('input[type="checkbox"]', $(this).parent('div')).attr('checked', status);
// 		});
// }
/*back to top*/
$(function(){
	$(window).scroll(function()
		{if( $(this).scrollTop()>=200) //keo xuong qua 200 thi hien
			{
				$('#bttop').fadeIn();
			}
			else
			{
				$('#bttop').fadeOut();
			}});
	$('#bttop').click(function(){
		$('body,html').animate({scrollTop:0},600);});});

/*end back to top*/
$(document).ready(function(){
	$("input, select").mouseenter(function(){
		$(this).css("background-color","#ECECEC" );
	});
	$("input, select").mouseleave(function(){
		$(this).css("background-color", "#FFFFFF");
	});
});
// $(document).ready(function(){
// 	$("#main_dtkt1").click(function(){
//         $("#dt1").slideToggle("slow");
//     });
//     $("#main_dtkt2").click(function(){
//         $("#dt2").slideToggle("slow");
//     });
//     $("#main_dtkt3").click(function(){
//         $("#dt3").slideToggle("slow");
//     });
// });

/*animate thong bao main bounceIn*/

$(document).ready(function(){
	$('.ltbao').hover(function(){
		$(this).addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
				$(this).removeClass("animated bounceIn")
		})
	})

});
$(document).ready(function){

	$("#tbUpload").change(function() {
		$("#btnUpload").trigger('click');
	});
});
// function myFunction() {
//     var txt = "";
//     if (document.getElementById("password").validity.rangeUnderflow) {
//        txt = "Value too small";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }

/* Login Check input*/
/*End*/
