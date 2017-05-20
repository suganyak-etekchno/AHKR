/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function() {



    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Ticket || client.Ticket.indexOf(filter.Ticket) > -1)
                && (!filter.Consignor || client.Consignor === filter.Consignor)
                    // && (!filter.CreateDate || client.CreateDate.indexOf(filter.CreateDate) > -1)
                && (!filter.CreateDate.from || new Date(user.CreateDate) >= filter.CreateDate.from)
                && (!filter.CreateDate.to || new Date(user.CreateDate) <= filter.CreateDate.to)
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

    window.db = db;




    db.status = [{
        Name: "All",
        Id: ""
    }, {
        Name: "Billed",
        Id: 1,
        class:'test'
    },{
        Name: "Not Billed",
        Id: 0,
        class:'test'
    }];
    db.paidstatus = [{
        Name: "All",
        Id: ''
    }, {
        Name: "Paid",
        Id: 1
    },{
        Name: "Not Paid",
        Id: 0
    }];


    var DateField = function(config) {
        jsGrid.Field.call(this, config);
    };

    DateField.prototype = new jsGrid.Field({
        sorter: function(date1, date2) {
            return new Date(date1) - new Date(date2);
        },

        itemTemplate: function(value) {
            return new Date(value).toDateString();
        },

        filterTemplate: function() {
            var now = new Date();
            this._fromPicker = $("<input>").datepicker({ defaultDate: now.setFullYear(now.getFullYear() - 1) });
            this._toPicker = $("<input>").datepicker({ defaultDate: now.setFullYear(now.getFullYear() + 1) });
            return $("<div>").append(this._fromPicker).append(this._toPicker);
        },

        insertTemplate: function(value) {
            return this._insertPicker = $("<input>").datepicker({ defaultDate: new Date() });
        },

        editTemplate: function(value) {
            return this._editPicker = $("<input>").datepicker().datepicker("setDate", new Date(value));
        },

        insertValue: function() {
            return this._insertPicker.datepicker("getDate").toISOString();
        },

        editValue: function() {
            return this._editPicker.datepicker("getDate").toISOString();
        },

        filterValue: function() {
            return {
                from: this._fromPicker.datepicker("getDate"),
                to: this._toPicker.datepicker("getDate")
            };
        }
    });

    jsGrid.fields.date = DateField;




}());
