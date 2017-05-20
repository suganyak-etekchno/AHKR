/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function() {

    var db1 = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.SERVICE || client.Ticket.indexOf(filter.SERVICE) > -1)
                && (!filter.REFERENCE || client.REFERENCE.indexOf(filter.REFERENCE) > -1)
                && (!filter.Date || client.Date.indexOf(filter.Date) > -1)
                && (!filter.AUTHOR || client.AUTHOR.indexOf(filter.AUTHOR) > -1)
                && (!filter.PIECES || client.PIECES.indexOf(filter.PIECES) > -1)
                && (!filter.AMOUNT || client.AMOUNT.indexOf(filter.AMOUNT) > -1)
                && (!filter.DESTINATION || client.DESTINATION.indexOf(filter.DESTINATION) > -1);
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

}());
