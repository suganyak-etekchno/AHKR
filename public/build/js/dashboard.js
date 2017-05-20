 $(".edit-row").click(function(e){
      html='';
        $.ajaxSetup({
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
        });
        $.ajax({
        type: "POST",
        url: 'edit/fetch',
        data:{id:this.id},
        dataType:'json',
        success: function(response) {        
            html+='<input id="username" type="text" value='+response.user_name+'>';
            html+='<input id="email"  type="text" value='+response.email+'>';
            html+='<input id="mobile"  type="text" value="'+response.mobile+'">';
            html+='<input id="user_level"  type="text" value='+response.user_level+'>';
            html+='<button data='+response.id+' type="button" class="edit_user" >Update</button>';
            jQuery("#examplePopoverTable").html(html);
            
            $(".edit_user").click(function(){        
                $.ajax({
                    type: "POST",
                    url: 'edit/edit',
                    data:{id:$(this).attr( "data" ),username:$('#username').val(),email:$('#email').val(),mobile:$('#mobile').val(),user_level:$('#user_level').val()},
                    dataType:'json',                    
                    success: function(data) {                        
                        if(data == '1'){
                            
                            $('#dt_username').html($('#username').val());
                            $('#dt_email').html($('#email').val());
                            $('#dt_mobile').html($('#mobile').val());
                            $('#dt_user_level').html($('#user_level').val());                             
                            $('#editticket').modal('hide');
                        }
                       
                    }

                });
        
        
           });
        }
        
        });
        
        
                    
    
 });


 $(".del-row").click(function(e){
     alert('delete'+this.id);
      html='';
      html+='Are you sure to delete the record.';            
    html+='<button data='+this.id+' type="button" class="del_user" >Yes</button>';
    html+='<button  type="button" class="del_user" >No</button>';
    jQuery("#examplePopoverTable").html(html);
            
            
       
        
        
                    
    
 });