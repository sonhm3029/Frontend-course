
/* Document
    https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
    https://codelearn.io/sharing/ajax-co-ban-cho-lap-trinh-front-end
*/
(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  //check which XMLHttp objects is available to us
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler) {
    //create XMLHttp object
    var request = getRequestObject();
    //
    request.onreadystatechange = 
      function() { 
        handleResponse(request, responseHandler); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    responseHandler(request);
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

