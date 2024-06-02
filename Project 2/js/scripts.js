window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//Read More
function myFunction(dotsId, moreId, btnId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);
    

    if (dots.style.display === "none" || dots.style.display === "") {
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}


//Theme Switcher
function myyFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");  
}


//Events
$(document).ready(function() {
    const eventsFile = './events.json';

   
    $.getJSON(eventsFile, function(data) {
       
        initializeCalendar(data);
    });
});

function initializeCalendar(events) {
    const calendarOptions = {
    };

   
    $('#calendar').fullCalendar(calendarOptions);

    
    events.forEach(function(event) {
        $('#calendar').fullCalendar('renderEvent', {
            title: event.title,
            start: event.start,
            end: event.end,
        }, true);
    });
}


//Reviews
$(document).ready(function() {
    let reviews = [];
    let editIndex = -1;

    //Loading data from JSON file
    $.getJSON('reviews.json', function(data) {
        reviews = data;
        displayReviews();
    });

    //Show reviews
    function displayReviews() {
        const reviewList = $('#reviewList');
        reviewList.empty();

        reviews.forEach((review, index) => {
            reviewList.append(`
                <div class="review" data-index="${index}">
                    <p><strong>${review.name}</strong></p>
                    <p>${review.text}</p>
                    <button class="btn btn-secondary edit-btn" data-index="${index}">Edit</button>
                    <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
                </div>
            `);
        });
    }

    //Save changes
    $('#saveChangesButton').click(function() {
        const reviewerName = $('#reviewerName').val();
        const reviewText = $('#reviewText').val();

        if (editIndex === -1) {
            const newReview = {
                id: reviews.length + 1,  //Generate new ID
                name: reviewerName,
                text: reviewText
            };
            reviews.push(newReview);
        } else {
            reviews[editIndex].name = reviewerName;
            reviews[editIndex].text = reviewText;
            editIndex = -1;
        }

        displayReviews();
        $('#writeReviewModal').modal('hide');
       
    });

    //Edit review
    $('#reviewList').on('click', '.edit-btn', function() {
        editIndex = $(this).data('index');
        const review = reviews[editIndex];

        $('#reviewerName').val(review.name);
        $('#reviewText').val(review.text);
        $('#writeReviewModal').modal('show');
    });

    //Delete review
    $('#reviewList').on('click', '.delete-btn', function() {
        const index = $(this).data('index');
        reviews.splice(index, 1);

        displayReviews();
    });

    
});


