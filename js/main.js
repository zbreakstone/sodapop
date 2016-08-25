// $(document).ready(function(){
//  $('body').colorScroll({
//         colors: [{
//             color: '#E4572E',
//             position: 1000
//         }, {
//             color: '#FBFBFB',
//             position: 3000
//         }, {
//             color: '#F0F66E',
//             position: 5000
//         }, {
//             color: '#63D2FF',
//             position: 7000
//         }, {
//             color: '#FFFFFF',
//             position: 9000
//         }]
//     });
// });

$(function() {
  //var frm = $(document.offer);
  //var dat = JSON.stringify(frm.serializeArray());
  var dat = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    email: $('#email').val(),
    industry: $('#industry').val(),
    current_persona: $('#current_persona').val()
  };

  var successFunc = function() {
    console.log('Yay');
  }

  var failFunc = function() {
    console.log('Boo');
  }

  $('#offer').submit(function(e) {
    $.ajax({
      contentType: "application/x-www-form-urlencoded",
      crossDomain: true,
      data: JSON.stringify(dat),
      datatype: "jsonp",
      headers: { 'Access-Control-Allow-Origin': '*' },
      type: "POST",
      url: 'https://forms.hubspot.com/uploads/form/v2/321750/5e525fa8-5c62-4090-af25-adb04d1fb20d',
      success: successFunc(),
      error: failFunc(),
      jsonpCallback: successFunc()
    });
    // Stops browser refresh
    e.preventDefault();
  });
  // Submit on document ready
  // $('#offer').submit();
});
