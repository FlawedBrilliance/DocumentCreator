//Data Fetch
var url = apiUrl+"/section1/fetch.php?prs=" + prs ;
$.getJSON(url,function(response)
{
	//Revision History
	$.each(response.revision,function(key,reval)
	{
		rowString = '<tr><td name="sec2_rev">'+reval.revisionNumber+'</td><td name="sec2_desc">'+reval.revisionDescription+'</td><td name="sec2_author">'+reval.revisionAuthor+'</td><td name="sec2_date">'+reval.revisionDate+'</td></tr>' ;
		$('#revisionTable tr:last').after(rowString) ;
	});
});