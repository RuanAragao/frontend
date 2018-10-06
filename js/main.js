// Function for copy success tooltip
function copyAlert() {
  const duration_animation = 250;
  const duration_visible = 2000;

  $( ".tooltiptext" ).css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0}, duration_animation, function() {
    $( this ).animate({marginTop: "0px"}, duration_visible, function(e) {
      $('.tooltiptext').animate({opacity: 0.0}, duration_animation, function(){
        $( this ).css("visibility","hidden");
      });
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
