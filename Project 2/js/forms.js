$(document).ready(function() {
    $('#myForm').validate({
        rules: {
            fname: 'required',
            lname: 'required',
            email: {
                required: true,
                email: true
            },
            phone: 'required',
            date: 'required',
            time: 'required',
            occasion: 'required',
            guests: 'required',
            message: 'required'
                
            
        },
        messages: {
            fname: 'Please enter your name',
            lname: 'Please enter your surname',
            email: {
                required: 'Please enter your email',
                email: 'Please enter a valid email address'
            },
            phone: 'Please enter your phone number',
            date: 'Please select date',
            time: 'Please select time',
            occasion: 'Please choose one occasion',
            guests: 'Please choose one option',
            message: 'A message is required'
                
            
        },

        
        submitHandler: function (form) {
            try {
                console.log("data:", form)
                console.log($(form).find('input[name="fname"]').val())
                // Block UI on form submission
                $.blockUI({ message: '<div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div>' });
                
                const reservData = {
                    fname: $(form).find('input[name="fname"]').val(),
                    lname: $(form).find('input[name="lname"]').val(),
                    email: $(form).find('input[name="email"]').val(),
                    phone: $(form).find('input[name="phone"]').val(),
                    occasion: $('#occasion').find(":selected").text(),
                    guests:  $('#guests').find(":selected").text(),
                    date: $(form).find('input[name="date"]').val(),
                    time: $(form).find('input[name="time"]').val(),
                    message: $("#message").val(),
                }
                
                localStorage.setItem('reservationData', JSON.stringify(reservData));
                $(form)[0].reset();

                setTimeout(function(){
                    console.log('time out');
                    $.unblockUI();
                    toastr.success('Your reservation has been submitted successfully!');
                    
                }, 3000);

                
                
            } catch (error) {
                console.error('Error in submitHandler:', error);
                alert('An error occurred. Please try again later.');
                // Unblock UI after request is complete
                $.unblockUI();
            }

            
        }



        
    });


        //Function is called when we click submit
        function submitForm() {
            //Save data from form in localstorage
            localStorage.setItem('reservationData', JSON.stringify({
                fname: document.getElementById('fname').value,
                lname: document.getElementById('lname').value,
                email: document.getElementById('email').value,
                
            }));

            //Go on page "details.html"
            window.location.href = 'details.html';
        }

       
});