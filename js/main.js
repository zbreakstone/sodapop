$(function() {
  // Get all cookies from current document
  var cookies = document.cookie.split('; ');

  // Create function to parse out and return HubSpot User Token value
  var getUserToken = function(arr) {
    for (var i = 0, c = arr[i].split('='); i < arr.length; i++) {
      return c[0] === 'hubspotutk' ? c[1] : '';
    }
  };

  // Create JavaScript object to send as payload
  var hs_context = {
    hutk: getUserToken(cookies) // Runs function and sets result as the value of the hutk property
  };

  var contextString = JSON.stringify(hs_context); // Converts payload to JSON string

  // Set the JSON string as the value for the hs_context input
  $('input[name="hs_context"]').val(contextString);
});
