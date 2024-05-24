// Dohvati podatke iz lokalne pohrane
var reservationData = localStorage.getItem('reservationData');
if (reservationData) {
    // Ako postoje podaci, pretvori ih iz JSON-a u objekt
    reservationData = JSON.parse(reservationData);
    // Prikazi podatke na stranici
    document.getElementById('reservationDetails').innerHTML = `
        <p>First Name: ${reservationData.fname}</p>
        <p>Last Name: ${reservationData.lname}</p>
        <p>Email: ${reservationData.email}</p>
        <!-- Dodajte ovdje ostale podatke koje želite prikazati -->
    `;
} else {
    // Ako nema podataka, prikaži poruku
    document.getElementById('reservationDetails').innerHTML = '<p>No reservation details found.</p>';
}