function sendMesj(){
  console.log('Enviando...');

  // Assign handlers immediately after making the request,
  // and remember the jqXHR object for this request
  var jqxhr = $.ajax( "/api" )
    .done(function() {
      alert( "success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "complete" );
    });

  // Perform other work here ...

  // Set another completion function for the request above
  jqxhr.always(function() {
    alert( "second complete" );
  });
}
