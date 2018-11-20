$(function(){
	$('#n1').on('click', function(){
		$('#input').children().eq(0).removeClass('bt-e')
		$('#input').children().eq(1).addClass('bt-e')
		var name = $('#name').val();
		var password1 = $('#password1').val();
		var rePassword1 = $('#rePassword1').val();
		var check = $('#check').val();
		var flag = true;
			if (name == '' || name.length < 2){
	            $('#errorName').text('Tên đăng nhập phải lớn hơn 2 ký tự');
	        }
	        else{
	            $('#errorName').text('');
	        }
			if (password1.length <= 0){
				$('#errorPassword1').html('Vui lòng nhập mật không đúng');
	        }
	        else{
	            $('#errorPassword1').text('');
	        }
	        if (password1 != rePassword1){
	            $('#errorRePassword1').text('Mật khẩu nhập lại không đúng');
	        }
	        else{
	            $('#errorRePassword1').text('');
	        }
	    if( password1 == rePassword1 && password1 != '' && rePassword1 != '' && name != ''){
	    	$(this).parent().parent().css('display', 'none')
			$(this).parent().parent().next().first().css('display', 'block');
	    }
		else{
			alert('Mời nhập đúng và đầy đủ thông tin')
		}
	})
	$('#n2').on('click', function(){
		$('#input').children().eq(1).removeClass('bt-e')
		$('#input').children().eq(2).addClass('bt-e')
		var last = $('#last').val();
		var  address = $('#address').val();
		var  age = $('#age').val();
		var email = $('#email').val();
		var errEmail = false;
		var errAge = false;
		    if (first == ''){
	            $('#errorfirst').text('vui lòng nhập thông tin');
	        }
	        else{
	            $('#errorfirst').text('');
	        }
	        if (last == ''){
	            $('#errorlast').text('vui lòng nhập thông tin');
	        }
	        else{
	            $('#errorlast').text('');
	        }
	         if (email == "") {
				$('#errorEmail').html('Vui lòng nhập email')
			} 
			else if(!IsEmail(email)) {
				$('#errorEmail').html('Vui lòng nhập đúng định dạng email')
				} 
				else {
					$('#errorEmail').html('')
					errEmail = true;
	        }
	        if (age == "") {
				$('#errorAge').html('Vui lòng nhập tuổi')
			} 
			else {
				$('#errorAge').html('')
				errAge = true;
			}
			if( first != '' && last != '' && address != '' && age != '' && email != '' && errEmail == true && errAge == true ){
		    	$(this).parent().parent().css('display', 'none')
				$(this).parent().parent().next().first().css('display', 'block')
		    }
			else{
				alert('vui lòng nhập đúng đầy đủ thông tin')
			}
	})
	$('#n3').on('click', function(){
		$('#input').children().eq(2).removeClass('bt-e')
		$('#input').children().eq(3).addClass('bt-e')
		$(this).parent().parent().css('display', 'none')
		$(this).parent().parent().next().first().css('display', 'block')
	})

	$('.previous').on('click', function(){
		$(this).parent().parent().css('display', 'none')
		$(this).parent().parent().prev().first().css('display', 'block')
	})
	$('.finish').on('click',function(){
		// var check = $('#check').val();
		if(check.checked == false){
			alert('Bạn không đồng ý điều khoản của bạn')
			$('#errorcheck').text('Ấn checkbox để đăng kí')
		}else{
			alert('Bạn đã đăng kí thành công')
			$('#errorcheck').text('')
		}
	})

})
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
