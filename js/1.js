
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
// function myFunction() {
//     var txt = "";
//     if (document.getElementById("password").validity.rangeUnderflow) {
//        txt = "Value too small";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }
$(document).ready(function() { 
10	  $("#doimk").validate({ 
11	    rules: { 

12	      password:{
		  required:true,
		  minlength:5
		  },  
13	      newpass: {         
14	      required: true, 
15	      minlength:5
16	      }, 
20	      confirmPass: { 
21	        required: true, 
			minlength:5,
			equalTo:"#password"
22	      } 
23	    }, 
24	    messages: { 
25	       password:{
		  required:"Hãy nhập vào mật khẩu của bạn",
		  minlength:"Mật khẩu phải có ít nhất 5 ký tự"
		  },  
13	      newpass: {         
14	      required: "Hãy nhập vào mật khẩu mới của bạn", 
15	      minlength:"Mật khẩu phải có ít nhất 5 ký tự"
16	      }, 
20	      confirmPass: { 
21	        required: "Hãy nhập lại mật khẩu mới của bạn", 
			minlength:"Mật khẩu phải có ít nhất 5 ký tự",
			equalTo:"Mật khẩu phải khớp với mật khẩu trên"
22	      } 
26	    } 
27	  }); 
28	}); 

/* Login Check input*/
/*End*/
