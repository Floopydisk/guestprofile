$(document).ready(function() {
  $("#guestProfileForm").submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "/process_form.php", // Adjust the URL if you saved process_form.php in a subdirectory
      data: formData,
      dataType: "json",
      //encode: true, // This is likely not needed

     success: function(data) {
      if (data.success) {
        $("#response").html("<p style='color: green;'>" + data.message + "</p>");
        // Optionally clear the form
        $("#guestProfileForm")[0].reset();

        // Redirect to the welcome page after a short delay (optional)
        setTimeout(function() {
          window.location.href = "mainpage.html";
        }, 2000); // 2000 milliseconds (2 second) - adjust as needed

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