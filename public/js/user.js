$(document).ready(function(){



$("#user_reg").on('submit',(function(e){
    $('.alert').hide();
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
    }
});
                e.preventDefault();
                $.ajax({
                    url: "query",
                    type: "POST",
                   data:  {name: $( "input[name*='name']" ).val(), email: $( "input[name*='email']" ).val(),
                       password: $( "input[name*='password']" ).val(), mobile: $( "input[name*='mobile']" ).val(),
                       user_level: $( "select[name*='user_level']" ).val(), status: $( "input[name*='status']" ).val() }, // not here diff input and select.
                   
                   
                   
                  //  contentType: "application/json",
                  //  cache: false,
                  //  processData:false,
                    success: function(data){
                        console.log(data);
                        if(data == 1){
                           //$('.error').hide();
                             $('.error').append('<p class="alert alert-info">Successfully Inserted</p>');
                              $('.error').show(1000).delay(2000).hide(100);
//                            setTimeout(function(){
//                                $('.error').fadeIn('slow');
//                            },500);
                            
                            
                        }
                    },
                    error: function(data){
                        //alert(data.error->first());
                        console.log(data);
                    }           
                });
            }));
});


