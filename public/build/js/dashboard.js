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
                            $('.error').html('<p class="alert alert-info">Edited Successfully</p>');
                            $('.error').show(1000).delay(2000).hide(100);
                        }
                       
                    }

                });
        
        
           });
        }
        
        });
        
        
                    
    
 });


 $(".del-row").click(function(e){
  
    html='';
    html+='Are you sure to delete the record.';            
    html+='<button data='+this.id+' type="button" class="del_user" >Yes</button>';
    html+='<button  type="button" class="cancel" >No</button>';
    jQuery("#examplePopoverTable").html(html);
            
            
            var rows= $(this).closest('tr');
            
    $(".del_user").click(function(){             
      $.ajaxSetup({
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
        });
        $.ajax({
                type: "POST",
                url: 'delete/delete',
                data:{id:$(this).attr('data')},
                dataType:'json',                    
                success: function(data) {                                           
                     $.each(data, function(index, element) {   
                        $('#editticket').modal('hide');
                        $('.error').html('<p class="alert alert-info">Deleted Record</p>');
                        $('.error').show(1000).delay(2000).hide(100);
                     //  console.log(rows);
                        rows.remove().draw( false );
                    });
                }

            });
    });
        
        
                    
    
 });
 
 
 //Company
 
  $(".cedit-row").click(function(e){      
      var html='';
       var product_id = $(this).attr( "data" );
       var company_id = this.id;
        var company_name = $('#dt_cname'+company_id).html();
        var branch = $('#dt_branch'+company_id).html();
        var company_status = $('#dt_cstatus'+company_id).html();        
        var prod_id = $('#dt_pid'+product_id).html();
        var prod_name = $('#dt_pname'+product_id).html();
        var prod_status = $('#dt_pstatus'+product_id).html();
        var prod_key = $('#dt_pkey'+product_id).html();
        var prod_sales = $('#dt_sdate'+product_id).html();
        var prod_doorcount = $('#dt_doorcount'+product_id).html();
        
        html+='<form id="view_form">';        
        html+='<input id="cname" type="text" value='+company_name+'>';
        html+='<input id="branch"  type="text" value='+branch+'>';
        html+='<input id="status"  type="text" value="'+company_status+'">';   
        if(product_id){            
            html+='<input id="pro_name"  type="text" value="'+prod_name+'">';
            html+='<input id="pro_status"  type="text" value="'+prod_status+'">';
            html+='<input id="door_count"  type="text" value="'+prod_doorcount+'">';
            html+='<input id="key_pos"  type="text" value="'+prod_key+'">';
            
            
            
        }
        
       // html+='<input id="sales_date"  type="text" value="'+prod_sales+'">';
        html+='<button id='+company_id+' data='+product_id+' type="button" class="edit_company" >Update</button>';
        html+='</form>';
        
        
        jQuery("#examplePopoverTable").html(html);
       
      
        
        
         $(".edit_company").click(function(){ 
             var cstatus = 'Deactive';
             var pstatus = 'Deactive';
                var id = company_id;   
               // alert('coming'+company_id);
                $.ajaxSetup({
                    headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type: "POST",
                    url: 'cedit/edit',
                    data:{
                        id:company_id,
                        cname:$('#cname').val(),
                        branch:$('#branch').val(),
                        status:$('#status').val(),
                        pro_id:product_id,
                        pro_name:$('#pro_name').val(),
                        pro_status:$('#pro_status').val(),
                        key_pos:$('#key_pos').val(),
                        door_count:$('#door_count').val()
                 },
                    dataType:'json',                    
                    success: function(data) {                        
                        if(data == '1'){                            
                            if($('#status').val() == 1){
                                cstatus = 'Active';
                            }  
                            if($('#pro_status').val() == 1){
                                pstatus = 'Active';
                            }                            
                            
                            $('#dt_cname'+id).html($('#cname').val());
                            $('#dt_branch'+id).html($('#branch').val());
                            $('#dt_cstatus'+id).html(cstatus);                            
                            $('#dt_pname'+product_id).html($('#pro_name').val());
                            $('#dt_pstatus'+product_id).html(pstatus);
                            
                             $('#dt_doorcount'+product_id).html(prod_doorcount);
                             
                             
                            $('#dt_pkey'+product_id).html($('#key_pos').val());
                            
                            $('#company_model').modal('hide');
                            $('.error').html('<p class="alert alert-info">Edited Successfully</p>');
                            $('.error').show(1000).delay(2000).hide(100);
                        }
                       
                    }

                });
        
        
           });
        
        
                    
    
 });
 
 
 $(".cdel-row").click(function(e){
     var product_id = $(this).attr( "data" );
       var id = this.id;
     
  
    html='';
    html+='Are you sure to delete the record.';            
    html+='<button id='+id+' data='+product_id+' type="button" class="del_company" >Yes</button>';
    html+='<button  type="button" class="cancel" >No</button>';
    jQuery("#examplePopoverTable").html(html);
            
            
    var rows= $(this).closest('tr');

    $(".del_company").click(function(){     
      $.ajaxSetup({
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
        });
        $.ajax({
                type: "POST",
                url: 'cedit/delete',
                data:{
                    id:id,
                    pro_id:product_id,
                
            },
                dataType:'json',                    
                success: function(data) {  
                    //alert(data);
                     $.each(data, function(index, element) {   
                        $('#company_model').modal('hide');
                        $('.error').html('<p class="alert alert-info">Deleted Record</p>');
                        $('.error').show(1000).delay(2000).hide(100);                       
                        rows.remove().draw( false );
                    });
                }

            });
    });
        
        
                    
    
 });


 
  
 
  
  //Product
 
  $(".pedit-row").click(function(e){      
        var html='';
       // var product_id = $(this).attr( "data" );
        var product_id = this.id;
        
        
           
        var prod_id = $('#dt_pid'+product_id).html();
        var prod_name = $('#dt_pname'+product_id).html();
        var prod_doorcount = $('#dt_door_count'+product_id).html();
        var row_count = $('#dt_row_count'+product_id).html();
        var prod_date = $('#dt_date'+product_id).html();
        var prod_status = $('#dt_status'+product_id).html();
        
        
        html+='<form id="product_form">';             
        html+='<input id="pro_name"  type="text" value="'+prod_name+'">';           
        html+='<input id="door_count"  type="text" value="'+prod_doorcount+'">';
        html+='<input id="row_count"  type="text" value="'+row_count+'">';            
        html+='<input id="pro_date"  type="text" value="'+prod_date+'">';
        html+='<input id="pro_status"  type="text" value="'+prod_status+'">';       
        html+='<button id='+product_id+' data='+product_id+' type="button" class="edit_product" >Update</button>';
        html+='</form>';
        jQuery("#examplePopoverTable").html(html);
       
      
        
        
         $(".edit_product").click(function(){ 
//             var cstatus = 'Deactive';
             var pstatus = 'Deactive';
                var id = product_id;
                $.ajaxSetup({
                    headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type: "POST",
                    url: 'products/edit',
                    data:{
                        id:id,                        
                        pro_id:product_id,
                        pro_name:$('#pro_name').val(),                                         
                        door_count:$('#door_count').val(),
                        row_count:$('#row_count').val(),
                        pro_date:$('#pro_date').val(),
                        pro_status:$('#pro_status').val()                          
                    },
                    dataType:'json',                    
                    success: function(data) {                        
                        if(data == '1'){
                            if($('#pro_status').val() == 1){
                                pstatus = 'Active';
                            }                           
                            
                                          
                            $('#dt_pname'+product_id).html($('#pro_name').val());
                            $('#dt_door_count'+product_id).html($('#door_count').val());
                            $('#dt_row_count'+product_id).html($('#row_count').val());
                            $('#dt_date'+product_id).html($('#pro_date').val());
                            $('#dt_status'+product_id).html(pstatus);                            
                            $('#product_model').modal('hide');
                            $('.error').html('<p class="alert alert-info">Edited Successfully</p>');
                            $('.error').show(1000).delay(2000).hide(100);
                        }
                       
                    }

                });
        
        
           });
        
        
                    
    
 });
 
 
 
 
 
 $(".pdel-row").click(function(e){
    // var product_id = $(this).attr( "data" );
       var id = this.id;
     
  
    html='';
    html+='Are you sure to delete the record.';            
    html+='<button id='+id+' data='+id+' type="button" class="del_product" >Yes</button>';
    html+='<button  type="button" class="cancel" >No</button>';
    jQuery("#examplePopoverTable").html(html);
            
            
    var rows= $(this).closest('tr');

    $(".del_product").click(function(){ 
        
      $.ajaxSetup({
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
        });
        $.ajax({
                type: "POST",
                url: 'products/delete',
                data:{
                    id:id                
                },
                dataType:'json',                    
                success: function(data) {
                     $.each(data, function(index, element) {   
                        $('#product_model').modal('hide');
                        $('.error').html('<p class="alert alert-info">Deleted Record</p>');
                        $('.error').show(1000).delay(2000).hide(100);                       
                        rows.remove().draw( false );
                    });
                }

            });
    });
        
        
                    
    
 });
 
 
 
 
  //Key Place
 
  $(".kedit-row").click(function(e){      
        var html='';
       // var product_id = $(this).attr( "data" );
        var key_id = this.id;
        
        
           
        var prod_id = $('#dt_pid'+key_id).html();       
        var prod_door = $('#dt_pdoor'+key_id).html();
        var prod_row = $('#dt_prow'+key_id).html();
        var mobile = $('#dt_mobile'+key_id).html();
        var prod_status = $('#dt_pstatus'+key_id).html();
        
        
        html+='<form id="key_form">';    
        html+='<input id="key_id"  type="text" value="'+key_id+'">'; 
        html+='<input id="prod_id"  type="text" value="'+prod_id+'">';           
        html+='<input id="prod_door"  type="text" value="'+prod_door+'">';
        html+='<input id="prod_row"  type="text" value="'+prod_row+'">';            
        html+='<input id="mobile"  type="text" value="'+mobile+'">';
        html+='<input id="prod_status"  type="text" value="'+prod_status+'">';       
        html+='<button id='+key_id+' data='+key_id+' type="button" class="edit_key" >Update</button>';
        html+='</form>';
        jQuery("#examplePopoverTable").html(html);
       
      
        
        
         $(".edit_key").click(function(){ 
//             var cstatus = 'Deactive';
             var pstatus = 'Deactive';
                var id = key_id;
                $.ajaxSetup({
                    headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type: "POST",
                    url: 'products/edit',
                    data:{
                        id:id,                        
                        pro_id:key_id,
                        pro_name:$('#pro_name').val(),                                         
                        door_count:$('#door_count').val(),
                        row_count:$('#row_count').val(),
                        pro_date:$('#pro_date').val(),
                        pro_status:$('#pro_status').val()                          
                    },
                    dataType:'json',                    
                    success: function(data) {                        
                        if(data == '1'){
                            if($('#pro_status').val() == 1){
                                pstatus = 'Active';
                            }                           
                            
                                          
                            $('#dt_pname'+key_id).html($('#pro_name').val());
                            $('#dt_door_count'+key_id).html($('#door_count').val());
                            $('#dt_row_count'+key_id).html($('#row_count').val());
                            $('#dt_date'+key_id).html($('#pro_date').val());
                            $('#dt_status'+key_id).html(pstatus);                            
                            $('#product_model').modal('hide');
                            $('.error').html('<p class="alert alert-info">Edited Successfully</p>');
                            $('.error').show(1000).delay(2000).hide(100);
                        }
                       
                    }

                });
        
        
           });
        
        
                    
    
 });