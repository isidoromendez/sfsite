function sendMesj(){
  console.log('Enviando...');

  // Assign handlers immediately after making the request,
  // and remember the jqXHR object for this request
  var jqxhr = $.ajax( "/api" )
    .done(function() {
      console.log( "success" );
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });

  // Perform other work here ...

  // Set another completion function for the request above
  jqxhr.always(function() {
    console.log( "second complete" );
  });
}
