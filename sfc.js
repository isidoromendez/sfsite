function sendMesj(){
  console.log('Enviando...');
  var dat = JSON.stringify($('#fcontact').serializeArray());

  var jqxhr = $.post( "/api", dat )
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
