
      $(document).ready(function(){
        $('.menu-hamburger').click(function(){
          $('.menu-hamburger').toggleClass('active')
          $('.menu').toggleClass('active')
        });
      });

$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });

});
/*===========================envoie de mail==========*/
function sendmail() {
    var nom = $('#name').val();
    var email = $('#mail').val();
    var number = $('#phone').val();
    var subject = $('#subject').val();
    var message = $('#text').val();
    // var body = $('#body').val();
    var Body = 'mail: ' + email + '<br> <br> nom: ' + nom + '<br> <br> number: ' + number +'<br> <br> Object: ' + subject+ '<br> <br> message: ' + message;
    Email.send({
        SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'edisontchondo@gmail.com',
        From: 'noryply@JL2E.com',
        Subject: "Nouveau message depuis le site de la JL2E ",
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Votre message a été envoyer avec succes nous vous reviendrons.');
            } else {
                console.error(message);
                alert('Erreur veillez ressayer. ')

            }

        }
    );
}
/*================================validation======================*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
