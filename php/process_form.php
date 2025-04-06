<?php
// Database credentials (replace with your actual details)
$servername = "localhost";
$username = "root";
$password = ""; // Default XAMPP password is usually empty
$dbname = "guest_profiles"; // Use the database name you created

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $center_name = isset($_POST["center-name"]) ? $_POST["center-name"] : "";
  $full_name = $_POST["full-name"];
  $dob = $_POST["dob"];
  $gender = $_POST["gender"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $relationship_status = $_POST["relationship-status"];
  $address = $_POST["address"];
  $lga = $_POST["lga"];
  $city = isset($_POST["city"]) ? $_POST["city"] : ""; // City is optional in your HTML
  $state = $_POST["state"];
  $zip = isset($_POST["zip"]) ? $_POST["zip"] : "";   // Zip is optional in your HTML
  $country = $_POST["country"];

  // Sanitize input data (important for security)
  $center_name = mysqli_real_escape_string($conn, $center_name);
  $full_name = mysqli_real_escape_string($conn, $full_name);
  $dob = mysqli_real_escape_string($conn, $dob);
  $gender = mysqli_real_escape_string($conn, $gender);
  $email = mysqli_real_escape_string($conn, $email);
  $phone = mysqli_real_escape_string($conn, $phone);
  $relationship_status = mysqli_real_escape_string($conn, $relationship_status);
  $address = mysqli_real_escape_string($conn, $address);
  $lga = mysqli_real_escape_string($conn, $lga);
  $city = mysqli_real_escape_string($conn, $city);
  $state = mysqli_real_escape_string($conn, $state);
  $zip = mysqli_real_escape_string($conn, $zip);
  $country = mysqli_real_escape_string($conn, $country);

  // Prepare and execute the SQL query to insert data into the 'guests' table
  $sql = "INSERT INTO guests (center_name, full_name, dob, gender, email, phone, relationship_status, address, lga, city, state, zip, country)
          VALUES ('$center_name', '$full_name', '$dob', '$gender', '$email', '$phone', '$relationship_status', '$address', '$lga', '$city', '$state', '$zip', '$country')";

  if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Guest profile saved successfully!"]);
  } else {
    echo json_encode(["success" => false, "message" => "Error saving guest profile: " . $conn->error]);
  }
} else {
  echo json_encode(["success" => false, "message" => "Invalid request method."]);
}

$conn->close();
?>