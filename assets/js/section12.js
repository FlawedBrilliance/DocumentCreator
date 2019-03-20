var renderBtn = document.getElementById("render");
var output = document.getElementById("output");

mermaid.initialize({startOnLoad: false});

render.onclick = function() {
	var input = '';
	var input = document.getElementById("diagram_code");
	output.innerHTML = '';
    mermaid.render('theGraph', input.value, function(svgCode) {
        output.innerHTML = svgCode;
    });
}

function loadExample()
{
	document.getElementById("diagram_code").value = "graph LR\n	A[Square Rect] -- Link text --> B((Circle))\n	A --> C(Round Rect)\n	B --> D{Rhombus}\n	C --> D";
}

//https://pww.atna03.eistraininglabs.philips.com/
//https://pww.atna03.eistraininglabs.philips.com/phpmyadmin/


//Section Number
var section = 12 ;

var url = apiUrl+'/section12/fetch.php?prs=' + prs + '&token=' + token ;
$.getJSON(url,function(response)
{
	$('#diagram_code').val(response.diagramCode);

	//Editable Options
	$('.addRowButton').attr("disabled", true);
	$('.deleteRow').attr("disabled", true);
	$('.dropdown').unbind("click");
	if(edit==1)
	{
		$('.editField').prop('readOnly', false);
		$('.addRowButton').attr("disabled", false);
		$('.deleteRow').attr("disabled", false);
		$('.ui.dropdown').dropdown();
	}
});