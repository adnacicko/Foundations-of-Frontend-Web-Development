/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

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


function myFunction(dotsId, moreId, btnId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);
    //var btnText = document.getElementById(btnId);

    if (dots.style.display === "none" || dots.style.display === "") {
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}

function myyFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

   
    
}






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


