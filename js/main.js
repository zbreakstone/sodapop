$(function() {
  //var frm = $(document.offer);
  //var dat = JSON.stringify(frm.serializeArray());
  //

  var cookies = document.cookie.split('; ');
  var hutk = [];

  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i].split('=');
    c[0] === 'hubspotutk' ? hutk.push(c[1]) : '';
  }

  var data = {
    // firstName: $('#firstName').val(),
    // lastName: $('#lastName').val(),
    // email: $('#email').val(),
    // industry: $('#industry').val(),
    // current_persona: $('#current_persona').val(),
    hs_context: {
      hutk: hutk[0]
    }
  }

  var dataString = JSON.stringify(data.hs_context);

  $('input[name="hs_context"]').val(dataString);
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
