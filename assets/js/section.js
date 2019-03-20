if(!token)
{
	//Redirect to Landing Page
	window.location.href = '../index.' + extDirect;
}

//Toggle Sidebar
var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width ;
var mobileWidth = 767 ;
var sidebarOpen = 0 ;
function setSidebar()
{
	deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width ;
	if (deviceWidth > mobileWidth)
	{
		sidebarOpen = 1 ;
		$('#sidebar').css('display', 'block');
		$('.contentContainer').css('width', deviceWidth-250);
	}
	else
	{
		sidebarOpen = 0 ;
		$('#sidebar').css('display', 'none');
		$('.contentContainer').css('width', deviceWidth);
	}
}

//Toggle Sidebar Open/Close
function toggleSidebar()
{
	if (sidebarOpen == 0)
	{
		sidebarOpen = 1 ;
		$('#sidebar').css('display', 'block');
		if (deviceWidth > mobileWidth)
		{
			$('.contentContainer').css('width', deviceWidth-250);
		}
	}
	else
	{
		sidebarOpen = 0 ;
		$('#sidebar').css('display', 'none');
		if (deviceWidth > mobileWidth)
		{
			$('.contentContainer').css('width', deviceWidth);
		}
	}
}

//Set Initial Sidebar Position
setSidebar();

//Adapt Sidebar on Window Resize
$( window ).resize(function() {
	setSidebar();
});

//Generate Sidebar Navigation
$('#navMenu').append('<a href="section1.'+extDirect+'" class="item">Revision History</a>');
$('#navMenu').append('<a href="section2.'+extDirect+'" class="item">Contact Details</a>');
$('#navMenu').append('<a href="section3.'+extDirect+'" class="item">Technical Details</a>');
$('#navMenu').append('<a href="section4.'+extDirect+'" class="item">Connectivity</a>');
$('#navMenu').append('<a href="section5.'+extDirect+'" class="item">Translation Tables</a>');
$('#navMenu').append('<a href="section6.'+extDirect+'" class="item">Sample Messages</a>');
$('#navMenu').append('<a href="section7.'+extDirect+'?app=ibe" class="item">Mappings</a>');
$('#navMenu').append('<a href="section8.'+extDirect+'" class="item">Customizations</a>');
$('#navMenu').append('<a href="section9.'+extDirect+'" class="item">Configurations</a>');
$('#navMenu').append('<a href="section10.'+extDirect+'" class="item">Test Plan</a>');
$('#navMenu').append('<a href="section11.'+extDirect+'" class="item">Issue List</a>');
$('#navMenu').append('<a href="section12.'+extDirect+'" class="item">Network Diagram</a>');
$('#sidebar').append('<a href="publish.'+extDirect+'" class="item"><h4 class="ui header">Publish</h4><p>Publish your changes to create a new revision</p></a>');
$('#sidebar').append('<a href="download.'+extDirect+'" class="item"><h4 class="ui header">Download</h4><p>Download a printer friendly version of the latest revision</p></a>');
$('#sidebar').append('<a class="item" id="quitSession"><h4 class="ui header">Search</h4><p>Go back and search another site</p></a>');
$('#sidebar').append('<a class="item" href="support.pdf"><h4 class="ui header">Support</h4><p>Download User Manual and Documentation</p></a>');

//Populate Site Name
$('#siteName').html(siteName);

//Update Token
$('#token').val(token);

//Generate Top Message
if (edit==1)
{
	$('#topMessage').html('<div class="ui inverted message floating center"><i class="close icon"></i><div class="header">Edit Mode Activated</div><ul class="list"><li>You are now editing this document</li><li>Remember to save changes on each section after your edits</li><li>Your changes will be saved globally only after you publish a new revision</li><li>To publish a new revision, save changes in the sections where you made modification and navigate to the "Submit Changes" section in the navbar</li></ul></div>');
}
else
{
	$('#topMessage').html('<div class="ui message floating center"><i class="close icon"></i><div class="header">Please note the following before using this asset</div><ul class="list"><li>Remember to save changes on each section after your edits</li><li>Your changes will be saved globally only after you publish a new revision</li><li>To publish a new revision, save changes in the sections where you made modification and navigate to the "Submit Changes" section in the navbar</li></ul></div>');
}

//Generate Result Modal
$('#resultModal').html('<div class="ui mini modal"><div class="header" id="modalHeader">Test</div><div class="content" id="modalContent">Test</div><div class="actions" id="actions"></div></div>') ;

//Quit
function confirmQuit()
{
	//Unset Session Variables
	sessionStorage.clear();
	window.location.href = '../index.'+extDirect;
}
$('#quitSession').click(function() {
	if(sessionStorage.getItem("edit")==1)
	{
		$('.ui.mini.modal').modal('show').modal('setting', 'closable', false);
		$('#modalHeader').html('Are you sure?');
	    $('#actions').html('<div class="ui green basic cancel button"> <i class="redo icon"></i> Go Back </div>');
	    $('#actions').append('<div class="ui red basic button" onclick="confirmQuit()"> <i class="close icon"></i> Discard & Quit </div>');
	    $('#modalContent').html('Your changes here will be lost permanently');
	}
	else
	{
		confirmQuit();
	}
});


//Close Message
$('.message .close').on('click', function()
{
	$(this).closest('.message').transition('fade');
});

//Dropdown
$('.ui.dropdown').dropdown();

//Edit Trigger
function triggerEdit()
{
	//API Call
	$.ajax
	({
		type: "GET",
		url: apiUrl + '/revision/create.php?prs=' + prs + '&token=' + token,
		dataType: 'json',
		data: '{}',
		complete: function (response)
		{
			console.log(response);
			//Success
			if (response.responseJSON.status == 1)
			{
				//Display Message
				$('#topMessage').html('<div class="ui inverted message floating center"><i class="close icon"></i><div class="header">Edit Mode Activated</div><ul class="list"><li>You are now editing this document</li><li>Remember to save changes on each section after your edits</li><li>Your changes will be saved globally only after you publish a new revision</li><li>To publish a new revision, save changes in the sections where you made modification and navigate to the "Submit Changes" section in the navbar</li></ul></div>');
				//Set Session Variable
				sessionStorage.setItem("edit",1);
				//Unlock Edit Options
				$('.editField').prop('readOnly', false);
			    $('.addRowButton').attr("disabled", false);
			    $('.deleteRow').attr("disabled", false);
			    $('.ui.dropdown').dropdown();
			}
			else
			{
				//Display Message
				$('#topMessage').html('<div class="ui negative message floating center"><i class="close icon"></i><div class="header">Edit Mode Failed</div><div class="content">'+response.responseJSON.message+'</div></div>');
			}
			//Close Message
			$('.message .close').on('click', function()
			{
				$(this).closest('.message').transition('fade');
			});
		},
		error: function()
		{
			//Display Message
			$('#topMessage').html('<div class="ui negative message floating center"><i class="close icon"></i><div class="header">Edit Mode Failed</div><div class="content">Connection to the server failed. There might be an issue with your network, or our server might be under maintenance. Please try again later.</div></div>');
			//Close Message
			$('.message .close').on('click', function()
			{
				$(this).closest('.message').transition('fade');
			});
		}
	});
}

//Save Trigger (Form Submission)
function triggerSave()
{
	var form = $('form[name=sectionForm]');
	var formData = form.serialize() ;

	$.ajax({
		type: 'POST',
		url: apiUrl + '/section' + section + '/post.php',
		data: formData,
		success: function (response)
		{
			console.log(response.status);
			$('.ui.mini.modal').modal('show').modal('setting', 'closable', false);
			if (response.status == 1)
			{
				$('#modalHeader').html('Saved Changes');
				$('#actions').html('<div class="ui green basic cancel button"> <i class="check icon"></i> Done </div>');
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

//Delete Row
function deleteRow()
{
	var td = event.target.parentNode; 
	var tr = td.parentNode;
	tr.parentNode.removeChild(tr);
}

//Search
var categoryContent = [
	{ category: 'Revision History', title: 'Revision History', url: 'section1.'+extDirect },
	{ category: 'Contact Details', title: 'Contact Details', url: 'section2.'+extDirect },
	{ category: 'Technical Details', title: 'Technical Details', url: 'section3.'+extDirect },
	{ category: 'Connectivity', title: 'Connectivity Details', url: 'section4.'+extDirect },
	{ category: 'Connectivity', title: 'Imaging Modality Details', url: 'section4.'+extDirect },
    { category: 'Transition Tables', title: 'Race Table', url: 'section5.'+extDirect },
    { category: 'Transition Tables', title: 'Patient Class', url: 'section5.'+extDirect },
    { category: 'Transition Tables', title: 'Order Control Code', url: 'section5.'+extDirect },
    { category: 'Transition Tables', title: 'Order Status', url: 'section5.'+extDirect },
    { category: 'Transition Tables', title: 'Order Control Status', url: 'section5.'+extDirect },
    { category: 'Transition Tables', title: 'Exam Modality Type', url: 'section5.'+extDirect },
	{ category: 'Sample Messages', title: 'Sample Messages', url: 'section6.'+extDirect },
    { category: 'Customizations', title: 'Customization Details', url: 'section8.'+extDirect },
    { category: 'Issue List', title: 'Issue List Details', url: 'section11.'+extDirect },
    { category: 'Mappings', title: 'MSH', url: 'section7.'+extDirect },
    { category: 'Mappings', title: 'PID', url: 'section7.pid.'+extDirect },
    { category: 'Mappings', title: 'PV1', url: 'section7.pv1.'+extDirect },
    { category: 'Mappings', title: 'ORC', url: 'section7.orc.'+extDirect },
    { category: 'Mappings', title: 'OBR', url: 'section7.obr.'+extDirect },
    { category: 'Mappings', title: 'OBX', url: 'section7.obx.'+extDirect },
    { category: 'Mappings', title: 'ZDS', url: 'section7.zds.'+extDirect },
    { category: 'Configurations', title: 'Purge Configurations - IBE Order', url: 'section9.'+extDirect },
    { category: 'Configurations', title: 'Purge Configurations - Demographics', url: 'section9.demographics.'+extDirect },
    { category: 'Configurations', title: 'Study Configurations', url: 'section9.study.'+extDirect },
    { category: 'Configurations', title: 'Xcelera Worklist Common V3 DICOM Configuration', url: 'section9.xcommon.'+extDirect },
    { category: 'Configurations', title: 'Xcelera Worklist V3 AE Title Scheduled Resource ID Mapping', url: 'section9.xae.'+extDirect },
    { category: 'Configurations', title: 'IBE ADT Orders Worklist Query V2 Entity Map', url: 'section9.ibeadt.'+extDirect },
    { category: 'Configurations', title: 'IBE Common V3 HL7 Fields Map', url: 'section9.ibecommon.'+extDirect },
    { category: 'Configurations', title: 'Xcelera Reporter V3 General Settings', url: 'section9.xreporter.'+extDirect },
    { category: 'Configurations', title: 'Patient Index Demographics V1 Assigning Authority Selection', url: 'section9.patientindex.'+extDirect }
];
$('.ui.search')
.search({
	type: 'category',
	source: categoryContent
});

//Tablesort
(function($) {
	$.tablesort = function ($table, settings) {
		var self = this;
		this.$table = $table;
		this.$thead = this.$table.find('thead');
		this.settings = $.extend({}, $.tablesort.defaults, settings);
		this.$sortCells = this.$thead.length > 0 ? this.$thead.find('th:not(.no-sort)') : this.$table.find('th:not(.no-sort)');
		this.$sortCells.on('click.tablesort', function() {
			self.sort($(this));
		});
		this.index = null;
		this.$th = null;
		this.direction = null;
	};
	$.tablesort.prototype = {
		sort: function(th, direction) {
			var start = new Date(),
				self = this,
				table = this.$table,
				rowsContainer = table.find('tbody').length > 0 ? table.find('tbody') : table,
				rows = rowsContainer.find('tr').has('td, th'),
				cells = rows.find(':nth-child(' + (th.index() + 1) + ')').filter('td, th'),
				sortBy = th.data().sortBy,
				sortedMap = [];
			var unsortedValues = cells.map(function(idx, cell) {
				if (sortBy)
					return (typeof sortBy === 'function') ? sortBy($(th), $(cell), self) : sortBy;
				return ($(this).data().sortValue != null ? $(this).data().sortValue : $(this).text());
			});
			if (unsortedValues.length === 0) return;
			//click on a different column
			if (this.index !== th.index()) {
				this.direction = 'asc';
				this.index = th.index();
			}
			else if (direction !== 'asc' && direction !== 'desc')
				this.direction = this.direction === 'asc' ? 'desc' : 'asc';
			else
				this.direction = direction;
			direction = this.direction == 'asc' ? 1 : -1;
			self.$table.trigger('tablesort:start', [self]);
			self.log("Sorting by " + this.index + ' ' + this.direction);
			// Try to force a browser redraw
			self.$table.css("display");
			// Run sorting asynchronously on a timeout to force browser redraw after
			// `tablesort:start` callback. Also avoids locking up the browser too much.
			setTimeout(function() {
				self.$sortCells.removeClass(self.settings.asc + ' ' + self.settings.desc);
				for (var i = 0, length = unsortedValues.length; i < length; i++)
				{
					sortedMap.push({
						index: i,
						cell: cells[i],
						row: rows[i],
						value: unsortedValues[i]
					});
				}
				sortedMap.sort(function(a, b) {
					return self.settings.compare(a.value, b.value) * direction;
				});
				$.each(sortedMap, function(i, entry) {
					rowsContainer.append(entry.row);
				});
				th.addClass(self.settings[self.direction]);
				self.log('Sort finished in ' + ((new Date()).getTime() - start.getTime()) + 'ms');
				self.$table.trigger('tablesort:complete', [self]);
				//Try to force a browser redraw
				self.$table.css("display");
			}, unsortedValues.length > 2000 ? 200 : 10);
		},
		log: function(msg) {
			if(($.tablesort.DEBUG || this.settings.debug) && console && console.log) {
				console.log('[tablesort] ' + msg);
			}
		},
		destroy: function() {
			this.$sortCells.off('click.tablesort');
			this.$table.data('tablesort', null);
			return null;
		}
	};
	$.tablesort.DEBUG = false;
	$.tablesort.defaults = {
		debug: $.tablesort.DEBUG,
		asc: 'sorted ascending',
		desc: 'sorted descending',
		compare: function(a, b) {
			if (a > b) {
				return 1;
			} else if (a < b) {
				return -1;
			} else {
				return 0;
			}
		}
	};
	$.fn.tablesort = function(settings) {
		var table, sortable, previous;
		return this.each(function() {
			table = $(this);
			previous = table.data('tablesort');
			if(previous) {
				previous.destroy();
			}
			table.data('tablesort', new $.tablesort(table, settings));
		});
	};
})(window.Zepto || window.jQuery);
$('table').tablesort()

//Canvas Variables
dataArray = [12,8] ;
backgroundArray = ["#46BFBD","#F7464A"] ;
labelsArray = ['Completed','Remaining'] ;
optionsArray = {
	responsive: true,
	hover: {
		mode: 'nearest',
		intersect: true
	},
	legend: {
		display: false,
		position: "bottom"
	}
}

//Generate Doughnut Chart
var statusChart = document.getElementById('statusChart').getContext('2d') ;
var statusChart = new Chart(statusChart,{
	type: 'doughnut',
	data: {
		datasets: [{
			data: dataArray,
			backgroundColor: backgroundArray
		}],
		labels: labelsArray
	},
	options: optionsArray
});