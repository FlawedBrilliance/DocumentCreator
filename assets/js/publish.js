if (edit==1)
{
	$('.noEdit').css('display', 'none');
}
else
{
	$('.activatePublish').css('display', 'none');
}

//Revision Numbers
$revNum1 = 0 ;
$revNum2 = 0 ;

//Fetch Previous Revision Number
var url = apiUrl+'/revision/fetch.php?prs=' + prs ;
$.getJSON(url,function(response)
{
	$revNum1 = response.revNum1 ;
	$revNum2 = response.revNum2 ;
	$('#revNumShow').html($revNum1+'.'+$revNum2);
	$('#revNum1').val($revNum1);
	$('#revNum2').val($revNum2);
});

//Update Date, Month, Year
var dateInfo = new Date();
$('#day').val(dateInfo.getDate());
$('#month').val(dateInfo.getMonth());
$('#year').val(dateInfo.getFullYear());

//Increment Revision Number (Super)
$flipper = 0 ;
function incRev()
{
	if($flipper==0)
	{
		event.preventDefault();
		$newRevNum1=parseInt($revNum1)+1 ;
		$newRevNum2=1 ;
		$('#revNum1').val($newRevNum1);
		$('#revNum2').val($newRevNum2);
		$('#revNumShow').html($newRevNum1+'.'+$newRevNum2);
		$('.revButton').html('<i class="chevron left icon"></i>');
		$flipper=1 ;
	}
	else
	{
		event.preventDefault();
		$newRevNum1=$revNum1 ;
		$newRevNum2=$revNum2 ;
		$('#revNum1').val($newRevNum1);
		$('#revNum2').val($newRevNum2);
		$('#revNumShow').html($newRevNum1+'.'+$newRevNum2);
		$('.revButton').html('<i class="add icon"></i>');
		$flipper=0 ;
	}
		
}

var newToken = 0 ;
function publishRedirect()
{
	console.log(newToken);
	sessionStorage.setItem("token",newToken);
	sessionStorage.setItem("edit",0);

	//Redirect to Revision History
	window.location.href = 'section1.' + extDirect;
}

//Form Submission
function triggerPublish()
{
	//Form Validation
	$('.contentMain')
	.form({
		fields: {
			siteName: {
				author: [
				{
					type   : 'empty',
					prompt : 'Author cannot be empty'
				}]
			},
			description: {
				rules: [
				{
					type   : 'empty',
					prompt : 'Country cannot be empty'
				}]
			}
		}
	});

	//If form is valid
	if( $('.contentMain').form('is valid'))
	{
		var form = $('form[name=publishForm]');
		var formData = form.serialize() ;

		console.log(formData);
		$.ajax({
			type: 'POST',
			url: apiUrl + '/revision/post.php',
			data: formData,
			success: function (response)
			{
				$('.ui.mini.modal').modal('show').modal('setting', 'closable', false);
				if (response.status == 1)
				{
					newToken = response.newToken;
					$('#modalHeader').html('Changes Published Successfully');
					$('#actions').html('<div class="ui green basic button" onclick="publishRedirect()"> <i class="check icon"></i> Done </div>');
				}
				else
				{
					$('#modalHeader').html('Failed to Save');
					$('#actions').html('<div class="ui red basic cancel button"> <i class="close icon"></i> Close </div>');
				}
				$('#modalContent').html(response.message);
			},
			error: function (response)
			{
				$('.ui.mini.modal').modal('show').modal('setting', 'closable', false);
				$('#modalHeader').html('Failed to Save');
				$('#actions').html('<div class="ui red basic cancel button"> <i class="close icon"></i> Close </div>');
				$('#modalContent').html('Could not communicate with the server, please try again later');
			}
		});
	}
	else
	{
		$('.ui.mini.modal').modal('show').modal('setting', 'closable', false);
		$('#modalHeader').html('Incomplete Form');
		$('#actions').html('<div class="ui red basic cancel button"> <i class="close icon"></i> Close </div>');
		$('#modalContent').html('Please fill the form completely before publishing');
	}
}