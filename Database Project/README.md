# 🎓 Student Registration System - Final Project

### 🚀 Overview
This is a full-stack web application developed for the **AICT (CS1260)** course at **Mohammad Ali Jinnah University**. It features a modern, responsive "Neon" themed registration form that stores and retrieves user data from a MySQL database.

### 🛠️ Technology Stack
* **Frontend:** HTML5 & CSS3 (Custom Neon UI)
* **Backend:** PHP
* **Database:** MySQL

### 📁 Features
* **Data Entry:** Users can register using a validated form.
* **Data Retrieval:** View all registered users in a structured table.
* **Validation:** All fields must be filled before submission.
* **Responsive Design:** Optimized for various screen sizes.

---

### ⚙️ How to Setup & Run (Database Instructions)
To run this project on your local machine (XAMPP/WAMP), follow these steps:

1.  **Create Database:** Open **phpMyAdmin** and create a new database named `form_table`.

2.  **Create Table:**
    Run the following SQL query in the SQL tab of your database to create the required table:

    ```sql
    CREATE TABLE `database_form` (
      `person_id` int(11) NOT NULL AUTO_INCREMENT,
      `first_name` varchar(255) NOT NULL,
      `last_name` varchar(255) NOT NULL,
      `dob` date NOT NULL,
      `email` varchar(255) NOT NULL,
      `phone` varchar(20) NOT NULL,
      PRIMARY KEY (`person_id`)
    );
    ```

3.  **Deploy Files:**
    Place all project files in your `htdocs` (XAMPP) or `www` (WAMP) folder.

4.  **Launch:**
    Open your browser and navigate to `http://localhost/your-folder-name/Form.html`.

---
**Developed by:** Khizer Tariq  
**ID:** FA25-BSAI-0029  
