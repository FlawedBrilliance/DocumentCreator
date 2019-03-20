//Generate Segment Menu
$('#segmentMenu').append('<a href="section7.'+extDirect+'?app=ibe" class="item">MSH</a>');
$('#segmentMenu').append('<a href="section7.pid.'+extDirect+'?app=ibe" class="item">PID</a>');
$('#segmentMenu').append('<a href="section7.pv1.'+extDirect+'?app=ibe" class="item">PV1</a>');
$('#segmentMenu').append('<a href="section7.orc.'+extDirect+'?app=ibe" class="item">ORC</a>');
$('#segmentMenu').append('<a href="section7.obr.'+extDirect+'?app=ibe" class="item">OBR</a>');
$('#segmentMenu').append('<a href="section7.obx.'+extDirect+'?app=ibe" class="item">OBX</a>');
$('#segmentMenu').append('<a href="section7.zds.'+extDirect+'?app=ibe" class="item">ZDS</a>');

//Generate Application List
$('#applicationMenu').append('<a href="?app=ibe" class="item">IBE</a>');
$('#applicationMenu').append('<a href="?app=iscv" class="item">ISCV</a>');
$('#applicationMenu').append('<a href="?app=ispacs" class="item">IS PACS</a>');
$('#applicationMenu').append('<a href="?app=xper" class="item">XPER</a>');

//Retrieve Application Name
var searchParams = new URLSearchParams(document.location.search.substring(1));
var application = searchParams.get("app");
$('#application').val(application);