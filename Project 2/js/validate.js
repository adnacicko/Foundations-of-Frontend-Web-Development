$(document).ready(function() {
    $('#myForm').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        },
        message: {
          required: true
        },
        radio: {
          required: true
        },
        photo: {
          required: true
        },
        date: {
          required: true,
          date: true
        },
        time: {
          required: true,
          time: true
        }
      },
      messages: {
        name: {
          required: 'Please enter your name'
        },
        email: {
          required: 'Please enter your email',
          email: 'Invalid email format'
        },
        phone: {
          required: 'Please enter your phone number'
        },
        message: {
          required: 'Please enter your message'
        },
        radio: {
          required: 'Please select an option'
        },
        photo: {
          required: 'Please upload a photo'
        },
        date: {
            required: 'Please select a date',
            date: 'Invalid date format'
          }
      },
      submitHandler: function(form) {
        // Save form data to localStorage
        saveFormDataToLocalStorage();
      }
    });
  });

  $('#contactForm input, #contactForm textarea, #contactForm select').on('keyup change', function() {
    $(this).valid();
  });

  function saveFormDataToLocalStorage() {
    var formData = $('#contactForm').serializeArray();
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Form data saved to localStorage');
  }
  
  // Save form data to localStorage at intervals (e.g., every 10 seconds)
  setInterval(saveFormDataToLocalStorage, 10000);
