<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registered Users</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">    
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="table">
<h1>REGISTERED USERS</h1>
<table>
<thead>
    <tr>
        <th>Reg. ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Mobile No.</th>
        <th>Date of Birth</th>
    </tr>
</thead>
    <tbody>            
    <?php
    $conn = mysqli_connect("localhost", "root", "", "form_table");                            
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
     $sql = "SELECT * FROM database_form";
     $result = mysqli_query($conn, $sql);
     if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            echo "<tr>
                    <td>" . $row["person_id"] . "</td>
                    <td>" . $row["first_name"] . "</td>
                    <td>" . $row["last_name"] . "</td>
                    <td>" . $row["email"] . "</td>
                    <td>" . $row["phone"] . "</td>
                    <td>" . $row["dob"] . "</td>
                  </tr>";
        }
     } else {
        echo "<tr><td colspan='6'>NO USER DATA FOUND</td></tr>";
    }
    ?>
        </tbody>
        </table>
        <div class="button-box" style="margin-top: 20px;">
        <a href="Form.html" style="text-decoration: none; width: 100%;">
        <button type="button" class="back-btn">Go Back to The Form</button>        
        </a>   
        </div>
    </div>
</body>
</html>