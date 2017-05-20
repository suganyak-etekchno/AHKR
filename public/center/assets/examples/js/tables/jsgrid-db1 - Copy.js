/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function() {

    var db1 = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Ticket || client.Ticket.indexOf(filter.Ticket) > -1)
                && (!filter.Consignor || client.Consignor === filter.Consignor)
                && (!filter.Date || client.Date.indexOf(filter.Date) > -1)
                && (!filter.Billing || client.Billing === filter.Billing)
                && (filter.Invoice === filter.Invoice || client.Invoice === filter.Invoice);
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

    window.db = db1;


    db1.status = [{
        Name: "All",
        Id: ""
    }, {
        Name: "Billed",
        Id: 1
    },{
        Name: "Not Billed",
        Id: 0
    }];
db1.paidstatus = [{
        Name: "All",
        Id: ''
    }, {
        Name: "Paid",
        Id: 1
    },{
        Name: "Not Paid",
        Id: 0
    }];
//db1.consignee = [
//
//        {
//            Company_Name: "",
//            Account_No:0
//        },{
//            Company_Name: "Otto Clay",
//            Account_No: 1
//        },
//        {
//            Company_Name: "Otto Clay1",
//            Account_No: 2
//        },
//        {
//            Company_Name: "Otto Clay2",
//            Account_No:3
//        },
//    ];
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


    db1.consignee = $.ajax({
        type: "POST",
        url: "/price/2",
        dataType:"json",
        contentType: "application/json",
        cache:false,
        success: function (response) {
          //  console.log(response);
        }
    });

}());
