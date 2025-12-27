<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "form_table"; 

$conn = mysqli_connect($server, $username, $password, $dbname);

if(!$conn){
    die("Connection Failed:". mysqli_connect_error());
}
if(isset($_POST['submit']))
{
    $fname = $_POST['first_name'];
    $lname = $_POST['last_name'];
    $dob   = $_POST['dob'];
    $email = $_POST['email'];
    $phone = $_POST['mobile_number']; 
    

    $sql = "INSERT INTO database_form (first_name, last_name, dob, email, phone) 
            VALUES ('$fname', '$lname', '$dob', '$email', '$phone')";

    if(mysqli_query($conn, $sql)){
        echo "<script>alert('Data Registered Successfully!'); window.location.href='TABLE.php';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>