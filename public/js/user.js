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
                 $('.error').append('<p class="alert alert-info">Successfully Inserted</p>');
                  $('.error').show(1000).delay(2000).hide(100);
            }
        },
        error: function(data){
            console.log(data);
        }           
    });
}));



$("#cmp_reg").on('submit',(function(e){
    $('.alert').hide();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
        }
    });
    e.preventDefault();
    $.ajax({
        url: "companyinsert",
        type: "POST",
       data:  {name: $( "input[name*='name']" ).val(), branch: $( "input[name*='branch']" ).val(),status: $( "input[name*='status']" ).val() }, // not here diff input and select.
       //  contentType: "application/json",
      //  cache: false,
      //  processData:false,
        success: function(data){
            console.log(data);
            if(data == 1){
                 $('.error').append('<p class="alert alert-info">Successfully Inserted</p>');
                  $('.error').show(1000).delay(2000).hide(100);
            }else{
                
                alert('coming');
                
               
                
            }
        },
        error: function(xhr, ajaxOptions, thrownError){            
            $('.error').append('<p class="alert alert-danger">'+thrownError+'</p>');
            $('.error').show(1000).delay(2000).hide(100);
           
        }           
    });
}));
$("#pro_reg").on('submit',(function(e){
    $('.alert').hide();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
        }
    });
    e.preventDefault();
    $.ajax({
        url: "productinsert",
        type: "POST",
       data:  {mdate: $( "input[name*='mdate']" ).val(), name: $( "input[name*='name']" ).val(),
           door_count: $( "input[name*='door_count']" ).val(),row_count: $( "input[name*='row_count']" ).val(),
           status: $( "input[name*='status']" ).val() }, // not here diff input and select.
       //  contentType: "application/json",
      //  cache: false,
      //  processData:false,
        success: function(data){
            //console.log(data);
            if(data == 1){
                 $('.error').append('<p class="alert alert-info">Successfully Inserted</p>');
                  $('.error').show(1000).delay(2000).hide(100);
            }else{
                
                //alert('coming');
                
               
                
            }
        },
        error: function(xhr, ajaxOptions, thrownError){            
            $('.error').append('<p class="alert alert-danger">'+thrownError+'</p>');
            $('.error').show(1000).delay(2000).hide(100);
           
        }           
    });
}));


$("#sale_reg").on('submit',(function(e){
    $('.alert').hide();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
        }
    });
    e.preventDefault();
    $.ajax({
        url: "sale",
        type: "POST",
      data:  {sdate: $( "input[name*='sdate']" ).val(), pro_id: $( "input[name*='pro_id']" ).val(),
           cmp_id: $( "input[name*='cmp_id']" ).val(),branch: $( "input[name*='branch']" ).val(),
           key_position: $( "input[name*='key_position']" ).val() }, // not here diff input and select.
       //  contentType: "application/json",
      //  cache: false,
      //  processData:false,
        success: function(data){
            console.log(data);
            if(data == 1){
                 $('.error').append('<p class="alert alert-info">Successfully Inserted</p>');
                  $('.error').show(1000).delay(2000).hide(100);
            }else{
                
                alert('coming');
                
               
                
            }
        },
        error: function(xhr, ajaxOptions, thrownError){            
            $('.error').append('<p class="alert alert-danger">'+thrownError+'</p>');
            $('.error').show(1000).delay(2000).hide(100);
           
        }           
    });
}));

});


