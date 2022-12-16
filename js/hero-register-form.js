// JavaScript Document
$(document).ready(function() {

    "use strict";

    $(".hero-register-form").submit(function(e) {
        e.preventDefault();        
        var name = $(".name");
        var email = $(".email");
        var visa = $(".visa");
        var country = $(".country");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        }  if (country.val() == "") {
            country.closest(".form-control").addClass("error");
            country.focus();
            flag = false;
            return false;
        } else {
            country.closest(".form-control").removeClass("error").addClass("success");
        }
        if (visa.val() == "") {
            visa.closest(".form-control").addClass("error");
            visa.focus();
            flag = false;
            return false;
        } else {
            visa.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = "name=" + name.val() + "&email=" + email.val() + "&visa=" + visa.val() + "&country=" + country.val();
        $(".loading").fadeIn("slow").php("Loading...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "php/heroRegisterForm.php",
            cache: false,
            success: function (d) {
                console.log(d)
                $(".form-control").removeClass("success");
                    if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
                        $('.loading').fadeIn('slow').php('<font color="#18a0ae">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
                         else
                        $('.loading').fadeIn('slow').php('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');
                                }
        });
        return false;
    });
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
    
})



