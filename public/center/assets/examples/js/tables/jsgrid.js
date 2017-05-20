/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(document, window, $) {
    'use strict';

    var Site = window.Site;

    $(document).ready(function($) {
        Site.run();
    });


    jsGrid.setDefaults({
        tableClass: "jsgrid-table table table-striped table-hover"
    });

    jsGrid.setDefaults("text", {
        _createTextBox: function() {
            return $("<input>").attr("type", "text").attr("class", "form-control input-sm");
        }
    });

    jsGrid.setDefaults("number", {
        _createTextBox: function() {
            return $("<input>").attr("type", "number").attr("class", "form-control input-sm");
        }
    });

    jsGrid.setDefaults("textarea", {
        _createTextBox: function() {
            return $("<input>").attr("type", "textarea").attr("class", "form-control");
        }
    });

    jsGrid.setDefaults("control", {
        _createGridButton: function(cls, tooltip, clickHandler) {
            var grid = this._grid;

            return $("<button>").addClass(this.buttonClass)
                .addClass(cls)
                .attr({
                    type: "button",
                    title: tooltip
                })
                .on("click", function(e) {
                    clickHandler(grid, e);
                });
        }
    });

    jsGrid.setDefaults("select", {
        _createSelect: function() {
            var $result = $("<select>").attr("class", "form-control input-sm"),
                valueField = this.valueField,
                textField = this.textField,
                selectedIndex = this.selectedIndex;

            $.each(this.items, function(index, item) {
                var value = valueField ? item[valueField] : index,
                    text = textField ? item[textField] : item;

                var $option = $("<option>")
                    .attr("value", value)
                    .text(text)
                    .appendTo($result);

                $option.prop("selected", (selectedIndex === index));
            });

            return $result;
        }
    });

    // Example Basic
    // -------------------
    (function() {
        $('#exampleBasic').jsGrid({
            height: "500px",
            width: "100%",

            filtering: true,
            editing: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 15,
            pageButtonCount: 5,

            deleteConfirm: "Do you really want to delete the client?",

            controller: db,

            fields: [{
                name: "Name",
                type: "text",
                width: 150
            }, {
                name: "Age",
                type: "number",
                width: 70
            }, {
                name: "Address",
                type: "text",
                width: 200
            }, {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            }, {
                name: "Married",
                type: "checkbox",
                title: "Is Married",
                sorting: false
            }, {
                type: "control"
            }]
        });
    })();


    // Example Static Data
    // ----------------------------
    (function() {
        $('#exampleStaticData').jsGrid({
            height: "500px",
            width: "100%",

            sorting: true,
            paging: true,

            data: db.clients,

            fields: [{
                name: "Name",
                type: "text",
                width: 150
            }, {
                name: "Age",
                type: "number",
                width: 50
            }, {
                name: "Address",
                type: "text",
                width: 200
            }, {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            }, {
                name: "Married",
                type: "checkbox",
                title: "Is Married"
            }]
        });
    })();

    // Example OData Service
    // -------------------
    (function() {
        $('#exampleOData').jsGrid({
            height: "500px",
            width: "100%",

            sorting: true,
            paging: false,
            autoload: true,

            controller: {
                loadData: function() {
                    var d = $.Deferred();

                    $.ajax({
                        url: "http://services.odata.org/V3/(S(3mnweai3qldmghnzfshavfok))/OData/OData.svc/Products",
                        dataType: "json"
                    }).done(function(response) {
                        d.resolve(response.value);
                    });

                    return d.promise();
                }
            },

            fields: [{
                name: "Name",
                type: "text"
            }, {
                name: "Description",
                type: "textarea",
                width: 150
            }, {
                name: "Rating",
                type: "number",
                width: 50,
                align: "center",
                itemTemplate: function(value) {
                    return $("<div>").addClass("rating text-nowrap").append(Array(value + 1).join('<i class="icon md-star orange-600 m-r-3"></i>'));
                }
            }, {
                name: "Price",
                type: "number",
                width: 50,
                itemTemplate: function(value) {
                    return value.toFixed(2) + "$";
                }
            }]
        });
    })();

    // Example Sorting
    // ---------------
    (function() {
        $('#exampleSorting').jsGrid({
            height: "500px",
            width: "100%",

            autoload: true,
            selecting: false,

            controller: db,

            fields: [{
                name: "Name",
                type: "text",
                width: 150
            }, {
                name: "Age",
                type: "number",
                width: 50
            }, {
                name: "Address",
                type: "text",
                width: 200
            }, {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            }, {
                name: "Married",
                type: "checkbox",
                title: "Is Married"
            }]
        });

        $("#sortingField").on('change', function() {
            var field = $(this).val();
            $("#exampleSorting").jsGrid("sort", field);
        });
    })();

    // Example Loading Data by Page
    // ----------------------------
    (function() {
        $('#exampleLoadingByPage').jsGrid({
            height: "500px",
            width: "100%",

            autoload: true,
            paging: true,
            pageLoading: true,
            pageSize: 15,
            pageIndex: 2,

            controller: {
                loadData: function(filter) {
                    var startIndex = (filter.pageIndex - 1) * filter.pageSize;
                    return {
                        data: db.clients.slice(startIndex, startIndex + filter.pageSize),
                        itemsCount: db.clients.length
                    };
                }
            },

            fields: [{
                name: "Name",
                type: "text",
                width: 150
            }, {
                name: "Age",
                type: "number",
                width: 50
            }, {
                name: "Address",
                type: "text",
                width: 200
            }, {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            }, {
                name: "Married",
                type: "checkbox",
                title: "Is Married"
            }]
        });


        $("#pager").on("change", function() {
            var page = parseInt($(this).val(), 10);
            $("#exampleLoadingByPage").jsGrid("openPage", page);
        });
    })();

    // Example Custom View
    // -------------------
    (function() {
        $('#exampleCustomView').jsGrid({
            height: "500px",
            width: "100%",

            filtering: true,
            editing: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 15,
            pageButtonCount: 5,

            controller: db,

            fields: [{
                name: "Name",
                type: "text",
                width: 150
            }, {
                name: "Age",
                type: "number",
                width: 70
            }, {
                name: "Address",
                type: "text",
                width: 200
            }, {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            }, {
                name: "Married",
                type: "checkbox",
                title: "Is Married",
                sorting: false
            }, {
                type: "control",
                modeSwitchButton: false,
                editButton: false
            }]
        });

        $(".views").on("change", function() {
            var $cb = $(this);
            $("#exampleCustomView").jsGrid("option", $cb.attr("value"), $cb.is(":checked"));
        });
    })();


    // Example Custom Row Renderer
    // ---------------------------
    (function() {
        $('#exampleCustomRowRenderer').jsGrid({
            height: "500px",
            width: "100%",

            autoload: true,
            paging: true,

            controller: {
                loadData: function() {
                    var deferred = $.Deferred();

                    $.ajax({
                        url: 'http://api.randomuser.me/?results=40',
                        dataType: 'json',
                        success: function(data) {
                            deferred.resolve(data.results);
                        }
                    });

                    return deferred.promise();
                }
            },

            rowRenderer: function(item) {
                //var user = item.user;
                var $photo = $("<div>").addClass("media-left").append(
                    $('<a>').addClass('avatar avatar-lg').attr('href', 'javascript:void(0)').append(
                        $("<img>").attr("src", item.picture.medium)
                    )
                );
                var $info = $("<div>").addClass("media-body")
                    .append($("<p>").append($("<strong>").text(item.name.first.capitalize() + " " + item.name.last.capitalize())))
                    .append($("<p>").text("Location: " + item.location.city.capitalize() + ", " + item.location.street))
                    .append($("<p>").text("Email: " + item.email))
                    .append($("<p>").text("Phone: " + item.phone))
                    .append($("<p>").text("Cell: " + item.cell));

                return $("<tr>").append(
                    $('<td>').append(
                        $('<div class="media">').append($photo).append($info)
                    )
                );
            },

            fields: [{
                title: "Clients"
            }]
        });

        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        };
    })();
    $(function() {
        grid_load();
    })



        function grid_load(){
            $('#button_editticket').attr('disabled', 'disabled');
            $('#viewtickets').attr('disabled', 'disabled');
            var consignee =[];
            var DateField = function(config) {
                jsGrid.Field.call(this, config);
            };

            DateField.prototype = new jsGrid.Field({
                css: "tdate-field",
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
            $('#exampleBatchDelete').jsGrid({
                height: "auto",
                width: "100%",
                autoload: true,
                filtering: true,
                sorting: true,
                confirmDeleting: false,
                paging: true,
                pageSize:25,
                deleteButton:false,
                rowDoubleClick: function(args) {


                    var html='';

                    $.ajax({
                            type: "POST",
                            url: '/ticket/multipleview',
                            dataType:'json',
                            data: {
                                Ticketsview:args.item.Ticket_No}
                            ,
                            success: function(response) {
                                //alert($('#comp0407').text());
                                jQuery.each(response, function(index, itemData) {
                                        console.log(itemData.ticket_no);

                                    html+='<input type="hidden" id="hid_tic" value="'+itemData.Ticket_No+'"/>';
                                        html+='<div class="example table-responsive">';
                                        html+='<table class="table table-bordered">';
                                        html+='<thead>';
                                        html+='<tr>';
                                        html+='<th colspan="2">';
                                        html+='<div class="bg-blue-600 text-xs-center white ticket-header">';
                                        html+='Airway Bill No: '+itemData.Ticket_No;
                                        html+='</div>';
                                        html+='</th>';
                                        html+='</tr>';
                                        html+='</thead>';
                                        html+='<tbody>';
										html+='<tr>';
										html+='<td class="no-border fromdiv">';
										html+='<div class="col-md-12 col-lg-12 p-l-0 p-r-0">';
										html+='<strong>FROM</strong>';
										html+='</div>';
										html+='</td>';
										html+='<td class="no-border todiv">';
										html+='<div class="col-md-12 col-lg-12 p-l-0 p-r-0">';
										html+='<strong>TO</strong>';
										html+='</div>';
										html+='</td>';
										html+='</tr>';
                                        html+='<tr>';
                                        html+='<td class="no-border">';
                                        html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                        html+='<strong>Shipper</strong>';
                                        html+='</div>';
                                        html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">';
                                        html+=itemData.Company_Name;
                                        html+='</div>';
                                        html+='</td>';
                                        html+='<td class="no-border">';
                                        html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                        html+='<strong>Consignee</strong>';
                                        html+='</div>';
                                        html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.consignee+'/'+itemData.cons_contact_name;
                                        html+='</div>';
                                        html+='</td>';
                                        html+='</tr>';
                                        html+='<tr>';
                                        html+='<td class="no-border">';
                                        html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                        html+='<strong>Address</strong>';
                                        html+='</div>';
                                        html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">';
                                        html+=itemData.Company_Address+', '+itemData.Company_Location+', '+itemData.Company_State+', '+itemData.Company_Pincode+', '+itemData.Company_Country;

                                        html+='</div>';
                                        html+='</td>';
                                        html+='<td class="no-border">';
                                        html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                        html+='<strong>Address</strong>';
                                        html+='</div>';
                                        html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.caddress+', '+itemData.clocation+', '+itemData.cstate+', '+itemData.cpincode+', '+itemData.ccountry;

                                        html+='</div>';
                                        html+='</td>';
                                        html+='</tr>';
                                        html+='<tr>';
                                        html+='<td class="no-border">';
                                        html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                        html+='<strong>Phone</strong>';
                                        html+='</div>';
                                        html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.Company_Phone_No;
                                        html+='</div>';
                                        html+='</td>';


                                        html+='<td class="no-border">';
                                        if(itemData.cphone){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>Phone</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.cphone;
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='</tr>';
                                        html+='<tr>';



                                        html+='<td class="no-border">';
                                        if(itemData.Consigner_Account_No){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>Account</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.Consigner_Account_No;
                                            html+='</div>';
                                        }
                                        html+='</td>';



                                        html+='<td class="no-border">';
                                        if(itemData.Created_Date){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>Ticket Created Date</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.Created_Date;
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='</tr>';


                                        html+='<tr>';



                                        html+='<td class="no-border">';
                                        if(itemData.no_of_pieces){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>No. of Pieces</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.no_of_pieces;
                                            html+='</div>';
                                        }
                                        html+='</td>';




                                        html+='<td class="no-border">';
                                        if(itemData.weight){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>Weight</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0"> '+itemData.weight;
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='</tr>';
                                        html+='<tr>';


                                        html+='<td class="no-border">';
                                        if(itemData.picked_by){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>Received by PPI</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.picked_by;
                                            html+='</div>';
                                        }
                                        html+='</td>';




                                        html+='<td class="no-border">';
                                        if(itemData.Received_By){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>Received by Consignee</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.Received_By;
                                            html+='</div>';
                                        }
                                        html+='</td>';




                                        html+='</tr>';
                                        html+='<tr>';


                                        html+='<td class="no-border">';
                                        if(itemData.act_pick_date_time){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>Actual Pickup Date</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.act_pick_date_time;
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='<td class="no-border">';
                                        if(itemData.Received_Date_Time){
                                            html+='<div class="col-md-4 col-lg-4 p-l-0 p-r-0">';
                                            html+='<strong>Received Date & Time</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-8 col-lg-8 p-l-0 p-r-0">'+itemData.Received_Date_Time;
                                            html+='</div>';
                                        }
                                        html+='</td>';



                                        html+='</tr>';
										html+='<tr>';
										html+='<td colspan="2" class="fulldescription">';
										html+='<div class="col-md-12 col-lg-12 col-xs-12 p-l-0 p-r-0">';
										html+='<strong>FULL DESCRIPTION OF CONTENTS</strong>';
										html+='</div>';
										html+='</td>';
										html+='</tr>';
                                        html+='<tr>';



                                        html+='<td colspan="2">';
                                        if(itemData.Third_Party_Billing){
                                            html+='<div class="col-md-3 col-lg-3 col-xs-3 p-l-0 p-r-0">';
                                            html+='<strong>Third Party Billing :</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-9 col-lg-9 col-xs-9 p-l-0 p-r-0">'+itemData.Third_Party_Billing;
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='</tr>';
                                        html+='<tr>';


                                        html+='<td colspan="2">';
                                        if(itemData.Description_of_Content){


                                            var pos = itemData.Description_of_Content.includes('*pc*');
                                            if(pos == true){
                                                var str = itemData.Description_of_Content.split('*pc*');
                                                var desc1 = str[1];
                                            }else{
                                                var desc1 = itemData.Description_of_Content;

                                            }
                                            html+='<div class="col-md-2 col-lg-2 col-xs-2 p-l-0 p-r-0">';
                                            html+='<strong>Full Description :</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-10 col-lg-10 col-xs-10 p-l-0 p-r-0">'+desc1;
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='</tr>';
                                        html+='<tr>';


                                        html+='<td colspan="2">';
                                        if(itemData.Special_Instruction){
                                            html+='<div class="col-md-3 col-lg-3 col-xs-3 p-l-0 p-r-0">';
                                            html+='<strong>Special Instructions :</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-9 col-lg-9 col-xs-9 p-l-0 p-r-0">'+itemData.Special_Instruction;
                                            html+='</div>';
                                        }
                                        html+='</td>';




                                        html+='</tr>';
                                        html+='<tr>';


                                        html+='<td>';
                                        if(itemData.dv_for_customs){
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">';
                                            html+='<strong>Declared Value for Customs</strong>';
                                            html+='</div>';
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">'+parseFloat(itemData.dv_for_customs).toFixed(2);
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='<td>';
                                        if(itemData.Base_Rate){
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">';
                                            html+='<strong>Base Rate</strong>';
                                            html+='</div>';
                                           // html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">'+parseFloat(itemData.Base_Rate).toFixed(2);
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">0.00';
                                            html+='</div>';
                                        }
                                        html+='</td>';

                                        html+='</tr>';
                                        html+='<tr>';


                                        html+='<td class="no-border">';
                                        if(itemData.Excess_Rate){
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">';
                                            html+='<strong>Excess rate</strong>';
                                            html+='</div>';
                                            //html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">'+parseFloat(itemData.Excess_Rate).toFixed(2);
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">0.00';
                                            html+='</div>';
                                        }
                                        html+='</td>';





                                        html+='<td class="no-border">';
                                        if(itemData.Other1){
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">';
                                            html+='<strong>Other 1</strong>';
                                            html+='</div>';
                                            //html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">'+parseFloat(itemData.Other1).toFixed(2);
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">0.00';
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='</tr>';
                                        html+='<tr>';


                                        html+='<td class="no-border">';
                                        if(itemData.Other2){
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">';
                                            html+='<strong>Other 2</strong>';
                                            html+='</div>';
                                           // html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">'+parseFloat(itemData.Other2).toFixed(2);
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">0.00';
                                            html+='</div>';
                                        }
                                        html+='</td>';




                                        html+='<td class="no-border">';
                                        if(itemData.Other3){
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">';
                                            html+='<strong>Other 3</strong>';
                                            html+='</div>';
                                            //html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">'+parseFloat(itemData.Other3).toFixed(2);
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">0.00';
                                            html+='</div>';
                                        }
                                        html+='</td>';



                                        html+='</tr>';
                                        html+='<tr>';


                                        html+='<td class="no-border">';
                                        if(itemData.Other4){
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">';
                                            html+='<strong>Other 4</strong>';
                                            html+='</div>';
                                           // html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">'+parseFloat(itemData.Other4).toFixed(2);
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">0.00';
                                            html+='</div>';
                                        }
                                        html+='</td>';




                                        html+='<td class="no-border">';
                                        if(itemData.Total){
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">';
                                            //html+='<strong>INVOICE TOTAL (Includes a discount of $'+itemData.discount+') </strong>';
                                            html+='<strong>INVOICE TOTAL (Includes a discount of $0.00) </strong>';
                                            html+='</div>';
                                            //html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">'+parseFloat(itemData.Total).toFixed(2);
                                            html+='<div class="col-md-6 col-lg-6 p-l-0 p-r-0">0.00';
                                            html+='</div>';
                                        }
                                        html+='</td>';


                                        html+='</tr>';
                                        html+='</tbody>';
                                        html+='</table>';
                                        html+='</div>';
                                    }
                                );

                                $("#multiviewticket").html(html);



                            }
                        }
                    );
                    $('.example-modal-lg1').modal('show');



                },
                rowClass: function(item, itemIndex) {

                    //console.log(item.Status);


                        if(item.Status == 'Paid'){
                         return 'tag-dark';
                        }



                        if(item.Status == 'Not Paid'){
                         return 'tag-success';
                        }

                    if(item.Status == 'Not Picked'){
                        return 'tag-info';
                    }

                        if(item.Status == "Not Delivered"){
                            return 'tag-danger';
                        }

                        if(item.Status == "Delivered and Not Billed"){
                            return 'tag-warning';
                        }






                },
                fields: [{
                    headerTemplate: function() {
                        return $("<button>").attr("type", "button").attr("class", "btn btn-primary btn-xs deleteticket").text("Delete")
                            .on("click", function() {
                                deleteSelectedItems();
                            });
                    },
                    itemTemplate: function(_, item) {

                        return $("<input>").attr({"type": "checkbox","id":item.Ticket_No,"class":"Ticketcheck","name":"tic[]", "data":item.Consigner_Account_No })
                            .on("change", function() {
                                $(this).is(":checked") ? selectItem(item) : unselectItem(item);
                                var OneChecked = $('input[name="tic[]"]:checked').length;
                                if($.inArray($(this).attr('data'), consignee)<0) {
                                    consignee.push($(this).attr('data'));
                                }
                                if(OneChecked == 0){
                                    $('#viewtickets').attr('disabled', 'disabled');
                                }else{
                                    $('#viewtickets').removeAttr('disabled');
                                }
                                //alert($('input[name="tic[]"]:checked').attr('id'));
                                if(OneChecked == 1){
                                   $('#button_editticket').prop("disabled", false);
                                    $.ajax({
                                        type: "POST",
                                        dataType:'json',
                                        url: '/ticket/edit',
                                        data: {ticno:$('input[name="tic[]"]:checked').attr('id')},
                                        success: function(response) {
                                         
											if(response[0].is_picked == '1'){
											 //  $('#table_ids :input[type=text]').addClass('textbox');

                                                $('#table_ids :input[type=text],input[type=number],select').addClass('viewticcss');
                                            }else{
											   $('#table_ids :input[type=text],input[type=number],select').removeClass('viewticcss');
                                            }
											
											
                                            $.each(response[0], function(key, value) {
                                                    if((key == 'Ticket_No')){
                                                        $(".ticket_no").html(value);
                                                        $("#Ticket_No").val(response[0].Ticket_No);
                                                    }else if(key == 'Consigner_Account_No'){
                                                        $("."+key).html(value);
                                                    }else{
                                                        $("."+key).val(value);
                                                    }

                                                if(key == 'Description_of_Content'){
                                                    var pos = value.includes('*pc*');
                                                   if(pos == true){
                                                       var str = value.split('*pc*');
                                                       $('#inputRadios1').removeAttr('checked');
                                                       $('#inputRadios2').attr('checked','checked');
                                                       $('#inputRadios_1').val('');
                                                       $('#inputRadios_2').val(str[1]);
                                                   }else{
                                                       $('#inputRadios2').removeAttr('checked');
                                                       $('#inputRadios1').attr('checked','checked');
                                                       $('#inputRadios_2').val('');
                                                       $('#inputRadios_1').val(value);
                                                   }
                                                }


                                            });
                                        }
                                    });
                                }else{
                                    $('#button_editticket').attr('disabled', 'disabled');

                                    $('#editform')[0].reset();

                                }

                                var cus='';
                                $.ajax({
                                    type: "POST",
                                    dataType:'json',
                                    url: '/ticket/cusotmers',
                                    data: {consignee:consignee},
                                    success: function(response) {
                                       // console.log(response);

                                        $.each( response, function( key, value ) {

                                            cus+='<input type="hidden" id="addr'+value.Account_No+'" value="'+value.Address+'">';
                                            cus+='<input type="hidden" id="loc'+value.Account_No+'" value="'+value.Location+'">';
                                            cus+='<input type="hidden" id="sta'+value.Account_No+'" value="'+value.State+'">';
                                            cus+='<input type="hidden" id="pin'+value.Account_No+'" value="'+value.Pincode+'">';
                                            cus+='<input type="hidden" id="coun'+value.Account_No+'" value="'+value.Country+'">';
                                            cus+='<input type="hidden" id="phone'+value.Account_No+'" value="'+value.Phone_No+'">';


                                            cus+='<input type="hidden" id="comp'+value.Account_No+'" value="'+value.Company_Name+'">';
                                            cus+='<input type="hidden" id="cont'+value.Account_No+'" value="'+value.Contact_Person+'">';
                                            cus+='<input type="hidden" id="contt'+value.Account_No+'" value="'+value.Contact_Title+'">';
                                            cus+='<input type="hidden" id="coun'+value.Account_No+'" value="'+value.Country+'">';
                                            cus+='<input type="hidden" id="email'+value.Account_No+'" value="'+value.Email_Id+'">';


                                        });
                                        $("#customer_list").html(cus);
                                    }



                                });




                            });
                    },
                    align: "center",
                    width: 50,
                    type: "checkbox",
                    id:"test",
                    sorting: false
                },{
                    name: "Ticket_No",
                    type: "text",
                    width: 150
                },{
                    name: "Consignee",
                    type: "text",
                    width: 150
                },{
                    name: "Ticket_Date",
                    type: "date",
                    width: 150
                },{
                    name: "Pickup_Date",
                    // type: "date",
                    width: 150,
                },{
                    name: "Status",
                    type: "label",
                    width: 150
                },
                    { type: "control", editButton: false,class:"price",deleteButton:false }
                    /*  ,{
                     name: "Pickup Status",
                     type: "text",
                     width: 150
                     },{
                     name: "Del Status",
                     type: "text",
                     width: 150
                     },{
                     name: "Bill Status",
                     type: "text",
                     width: 150
                     },{
                     name: "Inv Status",
                     type: "text",
                     width: 150
                     }, {
                     type: "control",
                     editButton:false
                     }*/
                ],
                controller: {
                    loadData: function(filter) {
                        console.log(filter);
                        $.ajaxSetup({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            }
                        });
                        return $.ajax({
                            type: "POST",
                            url: "/ticket/display",
                            dataType: "JSON",
                            data: {fticketno:filter.Ticket_No,fconsignee:filter.Consignee,fTicket_Date:filter.Ticket_Date}

                        })


                    }
                }
            });

            var selectedItems = [];

            var selectItem = function(item) {
                selectedItems.push(item);
            };

            var unselectItem = function(item) {
                selectedItems = $.grep(selectedItems, function(i) {
                    return i !== item;
                });
            };
            var items=[];
            var deleteSelectedItems = function() {
                if (!selectedItems.length || !confirm("Are you sure?"))
                    return;

                var $grid = $("#exampleBatchDelete");

                $.each(selectedItems, function(_, item) {
                    items.push(item.Ticket_No);
                    $grid.jsGrid("deleteItem", item);
                });

                $.ajax({
                    type: "POST",
                    dataType:'json',
                    url: '/ticket/delete',
                    data: {Ticket_No:items},
                    success: function(response) {
                        //console.log(response);

                        $("#ticketstatus").html('<div class="alert alert-info col-ssm-12" >Deleted Successfully</div>');
                    }
                });

                selectedItems = [];

            };
        }

    (function() {
        //var consignee =[];
        //$('#exampleBatchDelete').jsGrid({
        //    height: "500px",
        //    width: "100%",
        //    autoload: true,
        //    filtering: true,
        //    sorting: true,
        //    confirmDeleting: false,
        //    paging: true,
        //    fields: [{
        //        headerTemplate: function() {
        //            return $("<button>").attr("type", "button").attr("class", "btn btn-primary btn-xs deleteticket").text("Delete")
        //                .on("click", function() {
        //                    deleteSelectedItems();
        //                });
        //        },
        //        itemTemplate: function(_, item) {
        //
        //            return $("<input>").attr({"type": "checkbox","id":item.Ticket_No,"class":"Ticketcheck","name":"tic[]", "data":item.Consigner_Account_No })
        //                .on("change", function() {
        //                    $(this).is(":checked") ? selectItem(item) : unselectItem(item);
        //                    var OneChecked = $('input[name="tic[]"]:checked').length;
        //                    if($.inArray($(this).attr('data'), consignee)<0) {
        //                        consignee.push($(this).attr('data'));
        //                    }
        //                    if(OneChecked == 0){
        //                        $('#button_editticket').removeAttr('disabled');
        //                    }
        //
        //                    if(OneChecked == 1){
        //                        $.ajax({
        //                            type: "POST",
        //                            dataType:'json',
        //                            url: '/ticket/edit',
        //                            data: {ticno:$(this).attr("id")},
        //                            success: function(response) {
        //                                console.log(response);
        //                                $.each(response[0], function(key, value) {
        //                                    if(response[0].is_picked == '0'){
        //                                        $('#button_editticket').removeAttr('disabled');
        //                                        //console.log(key+"------"+value);
        //                                        if((key == 'ticket_no')||(key == 'Consigner_Account_No')){
        //                                            $("."+key).html(value);
        //                                            $("#Ticket_No").val(response[0].ticket_no);
        //                                        }else{
        //                                            $("."+key).val(value);
        //                                        }
        //                                    }else{
        //                                        $('#button_editticket').attr('disabled','disabled');
        //                                    }
        //
        //
        //                                });
        //                            }
        //                        });
        //                    }
        //
        //                    var cus='';
        //                    $.ajax({
        //                        type: "POST",
        //                        dataType:'json',
        //                        url: '/ticket/cusotmers',
        //                        data: {consignee:consignee},
        //                        success: function(response) {
        //                            console.log(response);
        //
        //                                $.each( response, function( key, value ) {
        //
        //                                cus+='<input type="text" id="addr'+value.Account_No+'" value="'+value.Address+'">';
        //                                cus+='<input type="text" id="loc'+value.Account_No+'" value="'+value.Location+'">';
        //                                cus+='<input type="text" id="sta'+value.Account_No+'" value="'+value.State+'">';
        //                                cus+='<input type="text" id="pin'+value.Account_No+'" value="'+value.Pincode+'">';
        //                                cus+='<input type="text" id="coun'+value.Account_No+'" value="'+value.Country+'">';
        //                                cus+='<input type="text" id="phone'+value.Account_No+'" value="'+value.Phone_No+'">';
        //
        //
        //                                cus+='<input type="text" id="comp'+value.Account_No+'" value="'+value.Company_Name+'">';
        //                                cus+='<input type="text" id="cont'+value.Account_No+'" value="'+value.Contact_Person+'">';
        //                                cus+='<input type="text" id="contt'+value.Account_No+'" value="'+value.Contact_Title+'">';
        //                                cus+='<input type="text" id="coun'+value.Account_No+'" value="'+value.Country+'">';
        //                                cus+='<input type="text" id="email'+value.Account_No+'" value="'+value.Email_Id+'">';
        //
        //
        //                            });
        //                            $("#customer_list").html(cus);
        //                        }
        //
        //
        //
        //                    });
        //
        //
        //
        //
        //                });
        //        },
        //        align: "center",
        //        width: 50
        //    },{
        //        name: "Ticket_No",
        //        type: "text",
        //        width: 150
        //    },{
        //        name: "Consignee",
        //        type: "text",
        //        width: 150
        //    },{
        //        name: "Ticket_Date",
        //        type: "date",
        //        width: 150
        //    },{
        //        name: "Pickup_Date",
        //        type: "date",
        //        width: 150
        //    },{
        //        name: "Status",
        //        type: "label",
        //        width: 150
        //    }
        //      /*  ,{
        //        name: "Pickup Status",
        //        type: "text",
        //        width: 150
        //    },{
        //        name: "Del Status",
        //        type: "text",
        //        width: 150
        //    },{
        //        name: "Bill Status",
        //        type: "text",
        //        width: 150
        //    },{
        //        name: "Inv Status",
        //        type: "text",
        //        width: 150
        //    }, {
        //        type: "control",
        //        editButton:false
        //    }*/
        //    ],
        //    controller: {
        //        loadData: function(filter) {
        //           console.log(filter);
        //            $.ajaxSetup({
        //                headers: {
        //                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //                }
        //            });
        //            return $.ajax({
        //                type: "POST",
        //                url: "/ticket/display",
        //                dataType: "JSON",
        //                data: {fticketno:filter.Ticket_No,fconsignee:filter.Consignee}
        //
        //            })
        //
        //
        //        }
        //    },
        //});
        //
        //var selectedItems = [];
        //
        //var selectItem = function(item) {
        //    selectedItems.push(item);
        //};
        //
        //var unselectItem = function(item) {
        //    selectedItems = $.grep(selectedItems, function(i) {
        //        return i !== item;
        //    });
        //};
        //var items=[];
        //var deleteSelectedItems = function() {
        //    if (!selectedItems.length || !confirm("Are you sure?"))
        //        return;
        //
        //    var $grid = $("#exampleBatchDelete");
        //
        //    $.each(selectedItems, function(_, item) {
        //        items.push(item.Ticket_No);
        //        $grid.jsGrid("deleteItem", item);
        //    });
        //
        //    $.ajax({
        //        type: "POST",
        //        dataType:'json',
        //        url: '/ticket/delete',
        //        data: {Ticket_No:items},
        //        success: function(response) {
        //            //console.log(response);
        //
        //            $("#ticketstatus").html('<div class="alert alert-info col-ssm-12" >Deleted Successfully</div>');
        //        }
        //    });
        //
        //    selectedItems = [];
        //
        //};
    })();

    // Example Rows Reordering
    // -----------------------
    (function() {
        $('#exampleRowsReordering').jsGrid({
            height: "500px",
            width: "100%",

            autoload: true,

            rowClass: function(item, itemIndex) {
                return "client-" + itemIndex;
            },

            controller: {
                loadData: function() {
                    return db.clients.slice(0, 15);
                }
            },

            fields: [{
                name: "Name",
                type: "text",
                width: 150
            }, {
                name: "Age",
                type: "number",
                width: 50
            }, {
                name: "Address",
                type: "text",
                width: 200
            }, {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            }, {
                name: "Married",
                type: "checkbox",
                title: "Is Married",
                sorting: false
            }]
        });

        var $gridData = $("#exampleRowsReordering .jsgrid-grid-body tbody");

        $gridData.sortable({
            update: function(e, ui) {
                // array of indexes
                var clientIndexRegExp = /\s+client-(\d+)\s+/;
                var indexes = $.map($gridData.sortable("toArray", {
                    attribute: "class"
                }), function(classes) {
                    return clientIndexRegExp.exec(classes)[1];
                });
                //alert("Reordered indexes: " + indexes.join(", "));

                // arrays of items
                var items = $.map($gridData.find("tr"), function(row) {
                    return $(row).data("JSGridItem");
                });
                console && console.log("Reordered items", items);
            }
        });
    })();


    // Example Custom Grid Field
    // -------------------------
    (function() {
        var MyDateField = function(config) {
            jsGrid.Field.call(this, config);
        };

        MyDateField.prototype = new jsGrid.Field({
            sorter: function(date1, date2) {
                return new Date(date1) - new Date(date2);
            },

            itemTemplate: function(value) {
                return new Date(value).toDateString();
            },

            insertTemplate: function() {
                if (!this.inserting)
                    return "";

                var $result = this.insertControl = this._createTextBox();
                return $result;
            },

            editTemplate: function(value) {
                if (!this.editing)
                    return this.itemTemplate(value);

                var $result = this.editControl = this._createTextBox();
                $result.val(value);
                return $result;
            },


            insertValue: function() {
                return this.insertControl.datepicker("getDate");
            },

            editValue: function() {
                return this.editControl.datepicker("getDate");
            },

            _createTextBox: function() {
                return $("<input>").attr("type", "text").addClass('form-control input-sm').datepicker({
                    autoclose: true
                });
            }
        });

        jsGrid.fields.myDateField = MyDateField;

        $("#exampleCustomGridField").jsGrid({
            height: "500px",
            width: "100%",

            inserting: true,
            editing: true,
            sorting: true,
            paging: true,

            data: db.users,

            fields: [{
                name: "Account",
                width: 150,
                align: "center"
            }, {
                name: "Name",
                type: "text"
            }, {
                name: "RegisterDate",
                type: "myDateField",
                width: 100,
                align: "center"
            }, {
                type: "control",
                editButton: false,
                modeSwitchButton: false
            }]
        });

    })();


})(document, window, jQuery);
