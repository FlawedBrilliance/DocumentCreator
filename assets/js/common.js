//API URL Selection
var localUrl = 'http://localhost/dcvbe';
var testUrl = 'https://bilonz.com/dcvbe';
var productionUrl = 'https://pww.atna03.eistraininglabs.philips.com/';
var apiUrl = localUrl ;

//File Extension
var extHtml = 'html' ;
var extAspx = 'aspx' ;
var extDirect = extHtml;

//Get Token from Session Storage
var token = sessionStorage.getItem("token");
var prs = sessionStorage.getItem("prs");
var siteName = sessionStorage.getItem("siteName");
var edit = sessionStorage.getItem("edit");