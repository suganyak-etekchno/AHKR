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
  
  
  (function() {
        $('#loginform').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#reg-btn',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                Account_No: {
                    validators: {
                        notEmpty: {
                            message: 'Account Number is required'
                        }
                    }
                },
				
                 password: {
                    validators: {
                        notEmpty: {
                            message: 'Password field is required'
                        }
                    }
                }




            }
        });
    })();

    (function() { //added here
        $('#paymentform').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#makepayment',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                paid_on: {
                    validators: {
                        notEmpty: {
                            message: 'Paid on is required'
                        }
                    }
                },

                total_agent: {
                    validators: {
                        notEmpty: {
                            message: 'Total field is required'
                        }
                    }
                },

                payment_mtd: {
                    validators: {
                        notEmpty: {
                            message: 'Payment field is required'
                        }
                    }
                }




            }
        });
    })();



    (function() {
        $('#invoiceform').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#save_changes',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                Invoice_Date: {
                    validators: {
                        notEmpty: {
                            message: 'Invoice Date is required'
                        }
                    }
                }




            }
        });
    })();



    (function() {
        $('#editform').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#save_changes',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help red'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                weight: {
                    validators: {
                        notEmpty: {
                            message: 'Weight is required'
                        }
                    }
                },

                no_of_pieces: {
                    validators: {
                        notEmpty: {
                            message: 'Pieces count is required'
                        }
                    }
                },

                Consignee: {
                    validators: {
                        notEmpty: {
                            message: 'Consignee field is required'
                        }
                    }
                },

                dv_for_customs: {
                    validators: {
                        notEmpty: {
                            message: 'Declared  field is required'
                        }
                    }
                },

                shipmenttype: {
                    validators: {
                        notEmpty: {
                            message: 'Shipmenttype  field is required'
                        }
                    }
                }




            }
        });
    })();



    (function() {
        $('#dis_edit_form').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#tic_update',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                Pickup_date: {
                    validators: {
                        notEmpty: {
                            message: 'Require Pickup Date Field'
                        }
                    }
                },

                Pickup_time: {
                    validators: {
                        notEmpty: {
                            message: 'Require Pickup Time Field'
                        }
                    }
                },

                act_pick_date: {
                    validators: {
                        notEmpty: {
                            message: 'Require Actual Pick Date Field'
                        }
                    }
                },

                act_pick_time: {
                    validators: {
                        notEmpty: {
                            message: 'Require Actual Pick Time Field'
                        }
                    }
                },

                picked_by: {
                    validators: {
                        notEmpty: {
                            message: 'Require Picked By Field'
                        }
                    }
                },

                No_Of_Pieces: {
                    validators: {
                        notEmpty: {
                            message: 'Require No Of Pieces Field'
                        }
                    }
                },

            /*    Status1: {
                    validators: {
                        notEmpty: {
                            message: 'Require Status1 Field'
                        }
                    }
                },

                Status3: {
                    validators: {
                        notEmpty: {
                            message: 'Require Status3 Field'
                        }
                    }
                },

                Status2: {
                    validators: {
                        notEmpty: {
                            message: 'Require Status2 Field'
                        }
                    }
                },

                Status4: {
                    validators: {
                        notEmpty: {
                            message: 'Require Status4 Field'
                        }
                    }
                },

                remarks: {
                    validators: {
                        notEmpty: {
                            message: 'Require Remarks Field'
                        }
                    }
                },

                */

                Received_By: {
                    validators: {
                        notEmpty: {
                            message: 'Require Received By Field'
                        }
                    }
                },

                Received_Date: {
                    validators: {
                        notEmpty: {
                            message: 'Require Received Date Field'
                        }
                    }
                },

                Received_Time: {
                    validators: {
                        notEmpty: {
                            message: 'Require Received Time Field'
                        }
                    }
                }




            }
        });
    })();


    (function() {
        $('#manifest_form').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#tic_update',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                Flight_No: {
                    validators: {
                        notEmpty: {
                            message: 'Require Flight No Field'
                        }
                    }
                },

                allflightname: {
                    validators: {
                        notEmpty: {
                            message: 'Require Flight Name Field'
                        }
                    }
                },


                mPickup_date: {
                    validators: {
                        notEmpty: {
                            message: 'Require Pickup Date Field'
                        }
                    }
                },



                mPickup_time: {
                    validators: {
                        notEmpty: {
                            message: 'Require Pickup Time Field'
                        }
                    }
                },



                marrive_date: {
                    validators: {
                        notEmpty: {
                            message: 'Require Arrive Date Field'
                        }
                    }
                },



                marrive_time: {
                    validators: {
                        notEmpty: {
                            message: 'Require Arrive Time Field'
                        }
                    }
                },



                mact_pick_date: {
                    validators: {
                        notEmpty: {
                            message: 'Require Actual Pick Date Field'
                        }
                    }
                },



                mact_pick_time: {
                    validators: {
                        notEmpty: {
                            message: 'Require Actual Pick Time Field'
                        }
                    }
                },



                DeliveryDate: {
                    validators: {
                        notEmpty: {
                            message: 'Require Delivery Date Field'
                        }
                    }
                },

                Deliverytime: {
                    validators: {
                        notEmpty: {
                            message: 'Require Delivery Time Field'
                        }
                    }
                },

                AWB: {
                    validators: {
                        notEmpty: {
                            message: 'Require AWB Field'
                        }
                    }
                },

                AWBDate: {
                    validators: {
                        notEmpty: {
                            message: 'Require AWB Date Field'
                        }
                    }
                },

                allagentname: {
                    validators: {
                        notEmpty: {
                            message: 'Require Actual pick date'
                        }
                    }
                },

                alldestination: {
                    validators: {
                        notEmpty: {
                            message: 'Require Destination Field'
                        }
                    }
                },

                mphone: {
                    validators: {
                        notEmpty: {
                            message: 'Require Phone Field'
                        }
                    }
                },

                fax: {
                    validators: {
                        notEmpty: {
                            message: 'Require Fax Field'
                        }
                    }
                },

                mNo_Of_Pieces: {
                    validators: {
                        notEmpty: {
                            message: 'Require No Of Pieces Field'
                        }
                    }
                },

                mWeight: {
                    validators: {
                        notEmpty: {
                            message: 'Require Weight Field'
                        }
                    }
                },

                FlightCharge: {
                    validators: {
                        notEmpty: {
                            message: 'Require Flight Charge Field'
                        }
                    }
                },
                AgentCharge: {
                    validators: {
                        notEmpty: {
                            message: 'Agent Charge Field'
                        }
                    }
                },

                TotalExpense: {
                    validators: {
                        notEmpty: {
                            message: 'Require Total Expense Field'
                        }
                    }
                }






            }
        });
    })();


  // Example Validataion Full
  // ------------------------
  (function() {
    $('#exampleFullForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton1',
        disabled: 'disabled'
      },
      icon: null,
      err: {
        clazz: 'text-help'
      },
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: 'The username is required'
            },
            stringLength: {
              min: 6,
              max: 30
            },
            regexp: {
              regexp: /^[a-zA-Z0-9]+$/
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: 'The username is required'
            },
            emailAddress: {
              message: 'The email address is not valid'
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: 'The password is required'
            },
            stringLength: {
              min: 8
            }
          }
        },
        birthday: {
          validators: {
            notEmpty: {
              message: 'The birthday is required'
            },
            date: {
              format: 'YYYY/MM/DD'
            }
          }
        },
        github: {
          validators: {
            url: {
              message: 'The url is not valid'
            }
          }
        },
        skills: {
          validators: {
            notEmpty: {
              message: 'The skills is required'
            },
            stringLength: {
              max: 300
            }
          }
        },
        porto_is: {
          validators: {
            notEmpty: {
              message: 'Please specify at least one'
            }
          }
        },
        'for[]': {
          validators: {
            notEmpty: {
              message: 'Please specify at least one'
            }
          }
        },
        company: {
          validators: {
            notEmpty: {
              message: 'Please company'
            }
          }
        },
        browsers: {
          validators: {
            notEmpty: {
              message: 'Please specify at least one browser you use daily for development'
            }
          }
        }
      },
      row: {
        invalid: 'has-danger'
      }
    });
  })();

  // Example Validataion Constraints
  // -------------------------------
  (function() {
    $('#exampleConstraintsForm, #exampleConstraintsFormTypes').formValidation({
      framework: "bootstrap4",
      icon: null,
      err: {
        clazz: 'text-help'
      },
      fields: {
        type_email: {
          validators: {
            emailAddress: {
              message: 'The email address is not valid'
            }
          }
        },
        type_url: {
          validators: {
            url: {
              message: 'The url is not valid'
            }
          }
        },
        type_digits: {
          validators: {
            digits: {
              message: 'The value is not digits'
            }
          }
        },
        type_numberic: {
          validators: {
            integer: {
              message: 'The value is not an number'
            }
          }
        },
        type_phone: {
          validators: {
            phone: {
              message: 'The value is not an phone(US)'
            }
          }
        },
        type_credit_card: {
          validators: {
            creditCard: {
              message: 'The credit card number is not valid'
            }
          }
        },
        type_date: {
          validators: {
            date: {
              format: 'YYYY/MM/DD'
            }
          }
        },
        type_color: {
          validators: {
            color: {
              type: ['hex', 'hsl', 'hsla', 'keyword', 'rgb', 'rgba'], // The default value for type
              message: 'The value is not valid color'
            }
          }
        },
        type_ip: {
          validators: {
            ip: {
              ipv4: true,
              ipv6: true,
              message: 'The value is not valid ip(v4 or v6)'
            }
          }
        }
      }
    });
  })();

   
  // Example Registeration Form
  // -------------------------------
  (function() {
    $('#signupform').formValidation({
      framework: "bootstrap4",
	  button: {
        selector: '#reg-btn',
        disabled: 'disabled'
      },
      icon: null,
      err: {
        clazz: 'text-help'
      },
	  row: {
        invalid: 'has-danger'
      },
      fields: {
          Account_No: {
          validators: {
            notEmpty: {
              message: 'Account Number is required'
            }
          }
        },
        Company_Name: {
          validators: {
            notEmpty: {
              message: 'Company Name is required'
            }
          }
        },
        Contact_Person: {
          validators: {
            notEmpty: {
              message: 'Contact Persson Name is required'
            }
          }
        },
		Contact_Title: {
          validators: {
            notEmpty: {
              message: 'Person Title field is required'
            }
          }
        },
        Email_Id: {
          validators: {
            notEmpty: {
              message: 'Email field is required'
            },
            emailAddress: {
              message: 'Email address is not valid'
            }
          }
        },
		Address: {
          validators: {
            notEmpty: {
              message: 'Address Field is required'
            }
          }
        },
          Location: {
          validators: {
            notEmpty: {
              message: 'City Field is required'
            }
          }
        },
		State: {
          validators: {
            notEmpty: {
              message: 'State Field is required'
            }
          }
        },
          Country: {
          validators: {
            notEmpty: {
              message: 'Country Field is required'
            }
          }
        },
          Pincode: {
          validators: {
            notEmpty: {
              message: 'Zipcode is required'
            }
          }
        },
          Url: {
          validators: {
            notEmpty: {
              message: 'Website URL is required'
            }
          }
        },
          Phone_No: {
          validators: {
            notEmpty: {
              message: 'Phone Number is required'
            }
          }
        },
          Mobile_No: {
          validators: {
            notEmpty: {
              message: 'Mobile Number is required'
            }
          }
        },
          Fax: {
          validators: {
            notEmpty: {
              message: 'Fax Number is required'
            }
          }
        },
          password: {
          validators: {
            notEmpty: {
              message: 'Password is required'
            }
          }
        },
          password_confirmation: {
          validators: {
            notEmpty: {
              message: 'Confirm Password is required'
            }
          }
        },

          a: {
              validators: {
                  notEmpty: {
                      message: 'Confirm Password is required'
                  }
              }
          }
      }
    });
  })();
  
  
  (function() {
    $('#userform').formValidation({
      framework: "bootstrap4",
	  button: {
        selector: '#reg-btn',
        disabled: 'disabled'
      },
      icon: null,
      err: {
        clazz: 'text-help'
      },
	  row: {
        invalid: 'has-danger'
      },
      fields: {
          
        Contact_Person: {
          validators: {
            notEmpty: {
              message: 'Contact Persson Name is required'
            }
          }
        },
		Contact_Title: {
          validators: {
            notEmpty: {
              message: 'Person Title field is required'
            }
          }
        },
		Users_Type: {
          validators: {
            notEmpty: {
              message: 'User Type field is required'
            }
          }
        },
        Email_Id: {
          validators: {
            notEmpty: {
              message: 'Email field is required'
            },
            emailAddress: {
              message: 'Email address is not valid'
            }
          }
        },     
          password: {
          validators: {
            notEmpty: {
              message: 'Password is required'
            }
          }
        },
          password_confirmation: {
          validators: {
            notEmpty: {
              message: 'Confirm Password is required'
            }
          }
        },

          a: {
              validators: {
                  notEmpty: {
                      message: 'Confirm Password is required'
                  }
              }
          }
      }
    });
  })();



    (function() {
        $('#createticketform').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#create-btn',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                new_shipmenttype: {
                    validators: {
                        notEmpty: {
                            message: 'Shipment type is required'
                        }
                    }
                },
                tCreated_Date: {
                    validators: {
                        notEmpty: {
                            message: 'Created Date is required'
                        }
                    }
                },
                tPickup_Date: {
                    validators: {
                        notEmpty: {
                            message: 'Pickup Date is required'
                        }
                    }
                },
                tPickup_Time: {
                    validators: {
                        notEmpty: {
                            message: 'Pickup Time is required'
                        }
                    }
                },
                tNo_Of_Pieces: {
                    validators: {
                        notEmpty: {
                            message: 'No of pieces is required'
                        }
                    }
                },

                tWeight: {
                    validators: {
                        notEmpty: {
                            message: 'Weight is required'
                        }
                    }
                },
                tDV_For_Customs: {
                    validators: {
                        notEmpty: {
                            message: 'Declared Value Customs  is required'
                        }
                    }
                },
                tAuthorized_By: {
                    validators: {
                        notEmpty: {
                            message: 'Authorized by is required'
                        }
                    }
                },
                new_consignee_list: {
                    validators: {
                        notEmpty: {
                            message: 'Consignee  is required'
                        }
                    }
                },
                consignor_list: {
                    validators: {
                        notEmpty: {
                            message: 'Consignor  is required'
                        }
                    }
                }

            }
        });
    })();


    (function() {
        $('#empform').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#reg-btn',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                Account_No: {
                    validators: {
                        notEmpty: {
                            message: 'Account Number is required'
                        }
                    }
                },
				
                Contact_Person: {
                    validators: {
                        notEmpty: {
                            message: 'Contact Persson Name is required'
                        }
                    }
                },

                Email_Id: {
                    validators: {
                        notEmpty: {
                            message: 'Email field is required'
                        },
                        emailAddress: {
                            message: 'Email address is not valid'
                        }
                    }
                }




            }
        });
    })();
	
	
	
	 (function() {
        $('#createemp').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#reg-btn',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                Account_No: {
                    validators: {
                        notEmpty: {
                            message: 'Account Number is required'
                        }
                    }
                },
				
		Contact_Title: {
          validators: {
            notEmpty: {
              message: 'Person Title field is required'
            }
          }
        },
                Contact_Person: {
                    validators: {
                        notEmpty: {
                            message: 'Contact Persson Name is required'
                        }
                    }
                },

                Email_Id: {
                    validators: {
                        notEmpty: {
                            message: 'Email field is required'
                        },
                        emailAddress: {
                            message: 'Email address is not valid'
                        }
                    }
                },
				   password: {
          validators: {
            notEmpty: {
              message: 'Password is required'
            }
          }
        },
          password_confirmation: {
          validators: {
            notEmpty: {
              message: 'Confirm Password is required'
            }
          }
        }




            }
        });
    })();



    (function() {
        $('#agentform').formValidation({
            framework: "bootstrap4",
            button: {
                selector: '#reg-btn',
                disabled: 'disabled'
            },
            icon: null,
            err: {
                clazz: 'text-help'
            },
            row: {
                invalid: 'has-danger'
            },
            fields: {
                AgentName: {
                    validators: {
                        notEmpty: {
                            message: 'Agent Name is required'
                        }
                    }
                },
				 Email_Id: {
                    validators: {
                        notEmpty: {
                            message: 'Email field is required'
                        },
                        emailAddress: {
                            message: 'Email address is not valid'
                        }
                    }
                }
           /*     ,
                Address_1: {
                    validators: {
                        notEmpty: {
                            message: 'Contact Persson Name is required'
                        }
                    }
                },
                Address_2: {
                    validators: {
                        notEmpty: {
                            message: 'Contact Persson Name is required'
                        }
                    }
                },

                Email_Id: {
                    validators: {
                        notEmpty: {
                            message: 'Email field is required'
                        },
                        emailAddress: {
                            message: 'Email address is not valid'
                        }
                    }
                }
*/



            }
        });
    })();

  
  // Example Validataion Standard Mode
  // ---------------------------------
  (function() {
    $('#exampleStandardForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton2',
        disabled: 'disabled'
      },
      icon: null,
      err: {
        clazz: 'text-help'
      },
      row: {
        invalid: 'has-danger'
      },
      fields: {
        standard_fullName: {
          validators: {
            notEmpty: {
              message: 'The full name is required and cannot be empty'
            }
          }
        },
        standard_email: {
          validators: {
            notEmpty: {
              message: 'The email address is required and cannot be empty'
            },
            emailAddress: {
              message: 'The email address is not valid'
            }
          }
        },
        standard_content: {
          validators: {
            notEmpty: {
              message: 'The content is required and cannot be empty'
            },
            stringLength: {
              max: 500,
              message: 'The content must be less than 500 characters long'
            }
          }
        }
      }
    });
  })();

  // Example Validataion Summary Mode
  // -------------------------------
  (function() {
    $('.summary-errors').hide();

    $('#exampleSummaryForm').formValidation({
      framework: "bootstrap4",
      button: {
        selector: '#validateButton3',
        disabled: 'disabled'
      },
      icon: null,
      err: {
        clazz: 'text-help'
      },
      row: {
        invalid: 'has-danger'
      },
      fields: {
        summary_fullName: {
          validators: {
            notEmpty: {
              message: 'The full name is required and cannot be empty'
            }
          }
        },
        summary_email: {
          validators: {
            notEmpty: {
              message: 'The email address is required and cannot be empty'
            },
            emailAddress: {
              message: 'The email address is not valid'
            }
          }
        },
        summary_content: {
          validators: {
            notEmpty: {
              message: 'The content is required and cannot be empty'
            },
            stringLength: {
              max: 500,
              message: 'The content must be less than 500 characters long'
            }
          }
        }
      }
    })

    .on('success.form.fv', function(e) {
      // Reset the message element when the form is valid
      $('.summary-errors').html('');
    })

    .on('err.field.fv', function(e, data) {
      // data.fv     --> The FormValidation instance
      // data.field  --> The field name
      // data.element --> The field element
      $('.summary-errors').show();

      // Get the messages of field
      var messages = data.fv.getMessages(data.element);

      // Remove the field messages if they're already available
      $('.summary-errors').find('li[data-field="' + data.field + '"]').remove();

      // Loop over the messages
      for (var i in messages) {
        // Create new 'li' element to show the message
        $('<li/>')
          .attr('data-field', data.field)
          .wrapInner(
            $('<a/>')
            .attr('href', 'javascript: void(0);')
            // .addClass('alert alert-danger alert-dismissible')
            .html(messages[i])
            .on('click', function(e) {
              // Focus on the invalid field
              data.element.focus();
            })
          ).appendTo('.summary-errors > ul');
      }

      // Hide the default message
      // $field.data('fv.messages') returns the default element containing the messages
      data.element
        .data('fv.messages')
        .find('.text-help[data-fv-for="' + data.field + '"]')
        .hide();
    })

    .on('success.field.fv', function(e, data) {
      // Remove the field messages
      $('.summary-errors > ul').find('li[data-field="' + data.field + '"]').remove();
      if ($('#exampleSummaryForm').data('formValidation').isValid()) {
        $('.summary-errors').hide();
      }
    });
  })();
})(document, window, jQuery);
