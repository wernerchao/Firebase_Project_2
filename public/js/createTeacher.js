//Firebase Create New User

var db = firebase.database();

function createUser(form) {
        var email = form["email_new"].value;
        var password = form["password_new"].value;
        var formChannel = form["channelSelect"].value;
        var formTextarea = form["channelTextarea"].value;
        var user = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("Error: " + errorMessage);
        });
        firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                        db.ref('Users/' + user.uid).update({ // create data to userProfile database according to the uid
                                uid: user.uid,
                                email: email,
                                passwordPhoneNumber: password,
                                channel: formChannel,
                                otherChannel: formTextarea,
                                accountType: 'teacher'
                        });
                        window.location.assign('dashboardTeacher.html');
                }
        });
        return false;
}