# Sigma
Team Sigma: ladet hier euren Code hoch
Code = Registieren
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        body {font-family: Comic sans MS, sans-serif;}

        /* Full-width input fields */
        input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
            text-align: center;
        }

        /* Set a style for all buttons */
        button {
            margin: 0 15px;
            display: flex;
            background-color: #FFF299;
            color: black;
            padding: 17px 45px;
            border: none;
            cursor: pointer
        }

        button:hover {
            opacity: 0.8;
            color:red
        }
        img{
            width: 50px;
        }


        h1,h2{
            text-align: center;
            border-bottom: 1px solid #000;
            padding-bottom: 15px ;
        }

        /* Extra styles for the cancel button */
        .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #FFF299;
        }

        /* Center the image and position the close button */
        .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
            position: relative;
        }

        img.avatar {
            width: 40%;
            border-radius: 50%;
        }

        .container {
            padding: 16px;
        }

        span.psw {
            float: right;
            padding-top: 16px;
            padding-top: 30px
        }

        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: center; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            padding-top: 60px;
        }

        /* Modal Content/Box */
        .modal-content {
            background-color: #fefefe;
            margin: 2% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
        }

        /* The Close Button (x) */
        .close {
            position: absolute;
            right: 25px;
            top: 0;
            color: #000;
            font-size: 35px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: red;
            cursor: pointer;
        }

        /* Add Zoom Animation */
        .animate {
            -webkit-animation: animatezoom 0.6s;
            animation: animatezoom 0.6s
        }

        @-webkit-keyframes animatezoom {
            from {-webkit-transform: scale(0)}
            to {-webkit-transform: scale(1)}
        }

        @keyframes animatezoom {
            from {transform: scale(0)}
            to {transform: scale(1)}
        }

        /* Change styles for span and cancel button on extra small screens */
        @media screen and (max-width: 300px) {
            span.psw {
                display: block;
                float: none;
            }
            .cancelbtn {
                width: 100%;
            }
        }
        .facebook {
            color:#000;
            text-decoration: none;
        }
        b {
            color:blue;
        }
        b1 {
            color:black;
        }

        .contact-form {
            padding:0px 50px;
        }
        .logo{
            width: 175px;
        }
        .Button-Container{
            display: flex;
            justify-content: center;
            align-items:center;
            border-top:1px solid #000;
            margin-top:25px;
            padding-top:25px;
        }

        .member-area{
            display:none;
        }
        .Chat-area{
        }
        .chat-popup{
            padding-bottom: 30px;
            display:none;

        }
        .open-button {

        }
        .form-container .btn {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            margin:0 auto;
            display:flex;
            width: auto;
            padding: 15px 60px;
            font-size: 20px;
            margin-bottom: 13px;
            opacity: 0.8;
        }
        .form-container .cancel {
            background-color: red;
            margin:0 auto;
            padding: 15px 60px;
            font-size: 20px;
            display:flex;
        }
        .alt-button {
            margin: 0 335px;
            display: flex;
            margin:0 auto;
            background-color: #FFF299;
            color: black;
            padding: 16px 75px;
            border: none;
            cursor: pointer;
            font:400 13.3333px Arial;
        }
        .form-container .btn:hover, .open-button:hover {
            opacity: 1;
        }

            textarea {
                padding-bottom: 30px;
                display: flex;
                justify-content: center;
                margin: 0 auto;
                margin-bottom: 15px;}


    </style>
</head>
<body>
<img class="logo" src="FayndLogo.jpg" height="auto" width="100%">
<h2>Welcome on Faynd</h2>

    <div class="contact-form">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Surname">
        <input type="text" placeholder="E-Mail">
        <input type="text" placeholder="Phone">
        <a class="facebook" href="/"> Connect me with <b> FACEBOOK </b></a>
    </div>
<div class="Button-Container">
    <button  style="width:auto;">Register</button>
    <span> or </span>
    <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
</div>
<div id="id01" class="modal">

    <form class="modal-content animate" action="/action_page.php" method="post">
        <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="Schloss.jpg">
        </div>

        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <button type="submit" onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>

        <div class="container" style="background-color:#f1f1f1">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
        </div>

    </form>
</div>

<div id="id02" class="member-area">
    <h1> Welcome to the Member Area</h1>
    <div class="Chat-area">
        <input type="text" placeholder="User">

    </div>
    <button class="open-button alt-button" onclick="openForm()">Chat</button>

    <div class="chat-popup" id="myForm">
        <form action="/action_page.php" class="form-container">
            <h1>Chat</h1>


            <textarea placeholder="Type message.." name="msg" required></textarea>

            <button type="submit" class="btn">Send</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
        </form>
    </div>
</div>

<script>
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
</script>

</body>
</html>
