$(function() {
  //var frm = $(document.offer);
  //var dat = JSON.stringify(frm.serializeArray());
  //

  var cookies = document.cookie.split('; ');

  // for (var i = 0; i < cookies.length; i++) {
  //   var c = cookies[i].split('=');
  //   c[0] === 'hubspotutk' ? hutk.push(c[1]) : '';
  // }

  var getUserToken = function(arr) {
    for (var i = 0, c = arr[i].split('='); i < arr.length; i++) {
      return c[0] === 'hubspotutk' ? c[1] : '';
    }
  };

  var hs_context = {
    hutk: getUserToken(cookies)
  };

  var contextString = JSON.stringify(hs_context);

  $('input[name="hs_context"]').val(contextString);
});

// $('#myform').submit(function(e) {
//   $.ajax({
//     datatype: "json",
//     contentType: "application/x-www-form-urlencoded",
//     type: "POST",
//     url: 'https://forms.hubspot.com/uploads/form/v2/321750/5e525fa8-5c62-4090-af25-adb04d1fb20d',
//     data: JSON.stringify(dat),
//     success: function() {},
//     error: function() {},
//   });
//   // Stops browser refresh
//   e.preventDefault();
// });
// // Submit on document ready
// $('#offer').submit();
