// Function for copy success alert
function copyAlert() {
  $( ".copy-success" ).animate({ borderWidth: "4px" }, 500 );
  $( ".copy-success-label" ).animate({ marginTop: "0px" }, 500, function() {
    $( this ).animate({marginTop: "0px"}, 2000, function(e) {
      $( ".copy-success-label" ).animate({ marginTop: "-27px" }, 500 );
      $( ".copy-success" ).animate({ borderWidth: "0px" }, 500 );
    });
  });
}

// One-click copy endpoint
$('input.endpoint').click(function(e) {
  e.preventDefault();
  this.select()
  document.execCommand("copy");
  copyAlert();
})

// Contributors section effects
$('#contributors figure').hover(function() {
  this.firstElementChild.classList.toggle('blur')
  this.lastElementChild.classList.toggle('visible')
})

// Section title effects
$('#section-left, #section-right').hover(function() {
  this.firstElementChild.classList.toggle('hover')
})

// Demonstration/test section handler
$('#form-cep').submit(function(e)  {
  e.preventDefault()
  const responseBox = $('#response code')
  const formattedInput = $(this).serialize().replace(/\D/g, '')
  responseBox.text('Buscando...')

  $.ajax({
    url: `http://fastcep.appspot.com/v1/${formattedInput}`,
    method: 'GET'
  }).done(data => {
    responseBox.text(JSON.stringify(data, null, 2))
  }).fail(data => {
    responseBox.text(`Ocorreu um erro ao buscar o CEP - ${data.status}`)
  })
})
