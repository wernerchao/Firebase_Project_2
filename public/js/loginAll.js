//Firebase Login Exisiting User. Re-usable.
var db = firebase.database();

        function loginUser(form) {
            var email = form["email"].value;
            var password = form["password"].value;
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
                db.ref('Users/'+user.uid).on("value", function(snapshot) {
                        var accountType = snapshot.val().accountType;
                        if (accountType === 'teacher') document.location.href = 'dashboardTeacher.html';
                        else if (accountType === 'student') document.location.href = 'dashboard.html';
                        else alert("Error, your account doesn't exist!");
                });  
            }, function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("Error: " + errorMessage);
            });
            event.preventDefault();
            return false;
        }

        //Firebaes Logout User
        function logoutUser() {
            firebase.auth().signOut().then(function() {
                alert("Sign-out successful.");
            }, function(error) {
                alert("An error happened.");
            });
        }
        
        //Login Status Check, if logged in, then show email on top left
        firebase.auth().onAuthStateChanged(function (user) {
            var statusDiv = document.getElementById("loginStatus");
            if (user) {
                statusDiv.innerHTML = user.email + "<input type='button' value='Log out' onclick='logoutUser()'></input>";
            } else {
                // show login page
                statusDiv.innerHTML = "Not logged in";
            }
        })

        //Clear input field when form is submitted
        $('form').on('submit', function() {
            $('#email_new').val('');
            $('#password_new').val('');
            $('#channelTextarea').val('');
            $('#email').val('');
            $('#password').val('');
        });