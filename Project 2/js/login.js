let UserService = {
    init: function () {
        let token = localStorage.getItem("user");
        if (token) {
            window.location.replace("index.html");
        }

        $("#login-form").validate({
            submitHandler: function (form) {
                let entity = Object.fromEntries(new FormData(form).entries());
                UserService.login(entity);
            }
        });
    },

    login: function (user) {
        $.ajax({
            url: 'login.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let validUser = data.find(element => element.email === user.email && element.password === user.password);
                if (validUser) {
                    delete validUser.password;
                    localStorage.setItem("user", JSON.stringify(validUser));
                    window.location.replace("index.html");
                } else {
                    toastr.error('Invalid credentials');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data from file:', error);
                toastr.error('Error fetching data from file');
            }
        });
    },

    logout: function () {
        localStorage.clear();
        window.location.replace("login.html");
    }
};

$(document).ready(function () {
    UserService.init();
});
