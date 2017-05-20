/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.TicketNo || client.TicketNo.indexOf(filter.TicketNo) > -1);
            });




        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) {},

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    db.clients = $.ajax({
            type: "POST",
            url: "/ticket/1",
            dataType: "JSON",
            contentType: "application/json",
            success: function (response) {
                JSON.stringify(response.responseText);
            }
        });



   // console.log( db.clients );




    /*db.clients = [{
        "TicketNo": "Otto Clay",
        "Consignee": '<div class="tag tag-lg tag-success">61</div>',
        "Country": 6,
        "Address": "Ap #897-1459 Quam Avenue",
        "Married": false
    }];
    */

}());
