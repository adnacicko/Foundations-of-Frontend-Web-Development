//Data from localstorage
var reservationData = JSON.parse(localStorage.getItem('reservationData'));
console.log(reservationData.fname)
if (reservationData) {
    //If data exists, turn it into JSON object
    //Show data on page
    $(document).ready(function() {
        document.getElementById('reservationDetails').innerHTML = `
            <p>First Name: ${reservationData.fname}</p>
            <p>Last Name: ${reservationData.lname}</p>
            <p>Email: ${reservationData.email}</p>
            <p>Phone: ${reservationData.phone}</p>
            <p>Occasion: ${reservationData.occasion}</p>
            <p>Guests: ${reservationData.guests}</p>
            <p>Date: ${reservationData.date}</p>
            <p>Time: ${reservationData.time}</p>
            <p>Message: ${reservationData.message}</p>
            
        `;
    });
} else {
    //If there are no data, show the error message
    document.getElementById('reservationDetails').innerHTML = '<p>No reservation details found.</p>';
}