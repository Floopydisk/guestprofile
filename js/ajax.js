$(document).ready(function() {
  $("#guestProfileForm").submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "../php/process_form.php", // Adjust the URL if you saved process_form.php in a subdirectory
      data: formData,
      dataType: "json",
     // encode: true, // This is likely not needed

      success: function(data) {
        if (data.success) {
          $("#response").html("<p style='color: green;'>" + data.message + "</p>");
          $("#guestProfileForm")[0].reset(); // Clear the form
        } else {
          $("#response").html("<p style='color: red;'>" + data.message + "</p>");
        }
      },
      error: function(xhr, status, error) {
        $("#response").html("<p style='color: red;'>Error submitting form: " + error + "</p>");
        console.error(xhr, status, error);
      }
    });
  });
});
