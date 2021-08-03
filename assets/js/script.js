
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
    var Body = 'mail: ' + email + '<br> nom: ' + nom + '<br> number: ' + number +'<br> Object: ' + subject+ '<br>message: ' + message;
    Email.send({
        SecureToken: "00520c40-6c0d-4e55-a8f9-6d8a0a92f490",
        To: 'edisontchondo@gmail.com',
        From: 'edisontchondo@gmail.com',
        Subject: "Nouveau message de test ",
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Votre message a été envoyer avec succes.');
            } else {
                console.error(message);
                alert('Erreur veillez ressayer. ')

            }

        }
    );
}
