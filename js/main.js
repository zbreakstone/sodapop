$(function() {
  // Get all cookies from current document
  var cookies = document.cookie.split('; '),
      pageURL = window.location.href,
      pageName = document.title,
      redirectURL = "http://www.thoughtfire.us/sodapop/";

  // Create function to parse out and return HubSpot User Token value
  var getUserToken = function(arr) {
    for (var i = 0, c; i < arr.length; i++) {
      c = arr[i].split('=');
      if (c[0] === 'hubspotutk') {
        return c[1];
      }
    }
  };

  // Create JavaScript object to send as payload
  var hs_context = {
    hutk: getUserToken(cookies), // Runs function and sets result as the value of the hutk property
    pageURL: pageURL,
    pageName: pageName,
    redirectURl: redirectURL;
  };

  var contextString = JSON.stringify(hs_context); // Converts payload to JSON string

  // Set the JSON string as the value for the hs_context input
  $('input[name="hs_context"]').val(contextString);
});
