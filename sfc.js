function sendMesj(){
  console.log('Enviando...');
  var dat = JSON.stringify($('#fcontact').serializeArray());

  var jqxhr = $.ajax( "/api" )
    .done(function() {
      console.log( "success" );
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    })
    .data(dat)
    .type("post");

  // Perform other work here ...

  // Set another completion function for the request above
  jqxhr.always(function() {
    console.log( "second complete" );
  });

}
