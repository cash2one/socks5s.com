
$(function(){

    //购物 cart
	 $(".btnOrderMonth").click(function(){
	 	$("input[name$='times']").val(1);
		$('#buyform').submit();
	 });



	 $(".btnOrder").click(function(){
		$("input[name$='times']").val(12);
		$('#buyform').submit();
	 });
	// $(document).ajaxStart( $.blockUI ).ajaxStop( $.unblockUI );


	// function order(serviceId,term) {
	// 	//todo 检查状态，是否适合，如果不适合，则报错
	// 	$.ajax({ 
	// 		type: "post",
	// 		url:orderUrl,
	// 		cache: false,
	// 		dataType: "json",
	// 		data: {"hostid":serviceId, "times":term}
	// 	}).done( function(response) { 
	// 		if (response['status'] == 1){
	// 			window.location.href = orderUrl; 
	// 		}else if(response['status'] == 0){
	// 			$("#message").html(palert(response['message'], "error")).show();
	// 			setTimeout(function () { 
	// 				window.location.href = loginUrl;    
 //    			}, 1000);
	// 		}
	// 	}).fail( function(jqXHR, textStatus, errorThrown) {
	// 		alert(errorThrown);
	// 	}).always( function(d) {
	// 	});
	// }




    //修改密码
     $('#btnChpw').click(function () {
        if ($('#oldPassword').val() == ""){
            alert("原密码不能为空!");
            return false;
        }

        if($('#newPassword').val().length < 6){
            alert("对不起,密码不能少于6位!");
            return false;
        }

        if ($('#newPassword').val() != $('#newPassword2').val()){
            alert("对不起,两次密码不一致!");
            return false;
        }
        var request = {"oldPassword":$('#oldPassword').val(), "newPassword":$('#newPassword')};

        var successCallback = function(response){
            if (response['status'] == 1){
                $("#message").html(palert(response['message'], "success")).show();
            }else if(response['status'] == 0){
                $("#message").html(palert(response['message'], "error")).show();
            }
            setTimeout(function () { 
                    window.location.href = response['url'];    
            }, 1000);
        }

        $.ajax({ 
            type: "post",
            url:changepwdUrl,
            cache: false,
            dataType: "json",
            data: request
             }).done(
                function(response){
                    successCallback(response);
                }
             ).fail( function(jqXHR, textStatus, errorThrown) {
                 alert(errorThrown);
             }).always( function(d) {
            }
         );

        // AjaxReturn(changepwdUrl, request, 'post', successCallback);
     });

     
});

