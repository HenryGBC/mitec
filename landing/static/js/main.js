
(function($){
    "use strict"; // Start of use strict
    
    
    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */
    
    $(window).load(function(){
        // $("body").imagesLoaded(function(){
        //     $(".page-loader svg").fadeOut();
        //     $(".page-loader").delay(200).fadeOut("slow");
        //     init_reveal();
        // });

        
  
    });
    
    $(document).ready(function(){
        _initNavUrl();
        _initReveal();
        _initContact();
    });
    
    $(window).resize(function(){
        
        
        
    });
    
    
    function _initNavUrl(){
        $('.url').click(function(){
             var href = $(this).attr('data-url');
             console.log(href);
             $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 1000);
        });
    }

    function _initReveal(){
        window.sr = ScrollReveal();
        sr.reveal('.reveal-text', {
            origin: 'top',
            duration: 2000,
            distance: '100px',
        });
        sr.reveal('.reveal-left', {
            origin: 'left',
            duration: 2000,
            distance: '300px',
        });
        sr.reveal('.reveal-right', {
            origin: 'right',
            duration: 2000,
        });
         sr.reveal('.reveal-bottom', {
            origin: 'bottom',
            duration: 2000,
            distance: '100px',
        });
    }
    function _initContact(){
        $('#submit').click(function(){
            console.log('submit');
            _contact();
        });
    }
    function _contact(){
        var name = $('input[name=name]').val();
        var email = $('input[name=email]').val();
        var message = $('textarea[name=message]').val();
        console.log(name);
        var proceed = true;
        if (name == "") {
            $('input[name=name]').css('border', '1px solid #e41919');
            proceed = false;
        }
        if (email == "") {
            $('input[name=email]').css('border', '1px solid #e41919');
            proceed = false;
        }
        
        if (message == "") {
            $('textarea[name=message]').css('border', '1px solid #e41919');
            proceed = false;
        }
        if (proceed) {
            $("#form").hide();
            $('.loading').fadeIn();
            var post_data = {
                'name': name,
                'email': email,
                'message': message
            };

            $.post('contact/', JSON.stringify(post_data), function(response){
                $('.loading').fadeOut();
                $('.sucess-message').fadeIn();
            });
            
        }
    }
    

    /* ---------------------------------------------
     Nav panel classic
     --------------------------------------------- */
    
    
    
  
    
})(jQuery); // End of use strict
