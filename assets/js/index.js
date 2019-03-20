//Modal Popout for New Document
$('#createNewDocument').click(function()
{
	$('.ui.form.tiny.modal').modal('show').modal('setting', 'closable', false);
});

//Dropdown Trigger
$('.ui.search.selection.dropdown').dropdown();

//Search Query
$('.ui.search')
.search({
    error : {
        source      : 'Cannot search. No source used, and Semantic API module was not included',
        noResults   : 'Your search returned no results, please consider creating a new document for this hospital',
        logging     : 'Error in debug logging',
        noTemplate  : 'A valid template name was not specified',
        serverError : 'There was an issue with querying the server',
        maxResults  : 'Results must be an array to use maxResults setting',
        method      : 'The method you called is not defined'
    },
    minCharacters : 3,
    apiSettings: {
    	url: apiUrl+'/index/query.php?q={query}'
    },
    onSelect: function(response) {
    	//Set Session Variables
    	sessionStorage.setItem("token",response.token);
    	sessionStorage.setItem("prs",response.prs);
    	sessionStorage.setItem("siteName",response.siteName);
    	sessionStorage.setItem("edit",0);

    	//Redirect to Dashboard
    	window.location.href = 'components/section1.' + extDirect;
    }
});

//Form Validation
$('.ui.form.tiny.modal')
.form({
	fields: {
		siteName: {
			rules: [
			{
				type   : 'empty',
				prompt : 'Site Name cannot be empty'
			}]
		},
		country: {
			rules: [
			{
				type   : 'empty',
				prompt : 'Country cannot be empty'
			}]
		},
		state: {
			rules: [
			{
				type   : 'empty',
				prompt : 'State/Region cannot be empty'
			}]
		},
		city: {
			rules: [
			{
				type   : 'empty',
				prompt : 'City cannot be empty'
			}]
		},
		prs: {
			rules: [
			{
				type   : 'empty',
				prompt : 'PRS cannot be empty'
			},
			{
				type   : 'integer',
				prompt : 'PRS can only be integers'
			},
			{
				type   : 'maxLength[6]',
				prompt : 'PRS can only be integers of maximum 6 digits'
			}]
		}
	}
});

//Error Message Counter
var errorMessageCount = 0;

//Form Submission
$('#newDocumentForm').on('submit', function(e)
{
	//Prevent Default Action 
	e.preventDefault();

	//If form is valid
	if( $('.ui.form').form('is valid'))
	{
		//Send POST to Signup API
		var form = $(this);
		var formData = form.serialize() ;
		
		$.ajax({
			type: 'POST',
			url: apiUrl + '/index/newSite.php',
			data: formData,
			success: function (response)
			{
				if (response.success == 1)
				{
					//Set Session Variables
					sessionStorage.setItem("token",response.token);
					sessionStorage.setItem("prs",response.prs);
					sessionStorage.setItem("siteName",response.siteName);

					//Redirect to Dashboard
					window.location.href = 'components/section1.' + extDirect;
				}
				else
				{
					//Check if Error Message is Previously Displayed
					if(errorMessageCount == 0)
					{
						//Display Error Message
						$('#errorMessage').transition({
							animation: 'swing down',
							duration   : '1s'
						});
						errorMessageCount++ ;
					}
					$('#errorDescription').html(response.message);
				}
			},
			error: function (response)
			{
				console.log('Fail');
			},
		});
	}
})



// ---------------------------------------------------------------------------
//                      API Fetch for Country-Region-City
// ---------------------------------------------------------------------------
var currentCities=[];
var BATTUTA_KEY="00000000000000000000000000000000";

// Populate Country
url="https://battuta.medunes.net/api/country/all/?key="+BATTUTA_KEY+"&callback=?";
$.getJSON(url,function(countries)
{
	$.each(countries,function(key,country)
	{
		$("<option></option>").attr("value",country.code).append(country.name).appendTo($("#country"));
		$('.countryMenu').append('<div class="item" data-value="'+country.code+'">'+country.name+'</div>');
	}); 
	$("#country").trigger("change");
});

// Populate Region
$("#country").on("change",function()
{
	countryCode=$("#country").val();
	url="https://battuta.medunes.net/api/region/" + countryCode + "/all/?key=" + BATTUTA_KEY + "&callback=?";
	$.getJSON(url,function(regions)
	{
		$('.regionMenu').html('');
		$.each(regions,function(key,region)
		{
			$('.regionMenu').append('<div class="item" data-value="'+region.region+'">'+region.region+'</div>');
		});
		$("#region").trigger("change");
	}); 
});

// Populate City
$("#region").on("change",function()
{
	countryCode=$("#country").val();
	region=$("#region").val();
	url="https://battuta.medunes.net/api/city/" + countryCode + "/search/?region=" + region + "&key=" +BATTUTA_KEY + "&callback=?";
	$.getJSON(url,function(cities)
	{
		currentCities=cities;
		var i=0;
		$('.cityMenu').html('');
		$.each(cities,function(key,city)
		{
			$('.cityMenu').append('<div class="item" data-value="'+city.city+'">'+city.city+'</div>');
		});
		$("#city").trigger("change");
	}); 
});