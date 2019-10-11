            // Variable to hold request
var request;

var url      = window.location.href;
$( document ).ready(function() {
$('#url').val(url);
});

console.log(url);
// Bind to the submit event of our form
$("#request-form").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.googleusercontent.com/macros/echo?user_content_key=kDa8B8apW2b55s2UBZCut_s0ZZz5uqhvPxyK8NCcZlDRqkFfOQxAAh0jaaBhuBEjJuFiztZ5lABzR07oVSRbdhNEsFhUIvTIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGu3lXGPzd2RTnHqc2q9OXYx1FO_Jk5N0BhwDlfV48awJXU09cj4qr2e8ff3vORDXOiZc0bVyYEe&lib=MBQrLFUJw_pqHNTvck0yMTj8HCSztJr45",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
        console.log("It's running");
        window.location.href = 'success.html';
    });

    // Prevent default posting of form
    event.preventDefault();
});

