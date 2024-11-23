let reservations = [];

function reserveRoom() {
    const name = document.getElementById('name').value;
    const documentNumber = document.getElementById('documentNumber').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const roomType = document.getElementById('roomType').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;

    // Add validation to ensure all fields are filled in
    if (!name || !documentNumber || !phoneNumber || !roomType || !checkInDate || !checkOutDate) {
        alert('porfavor llene los espacios solictados');
        return;
    }

    const pricePerNight = getDailyRate(roomType);
    const totalDays = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);
    let totalPrice = pricePerNight * totalDays;

    const reservation = [name, documentNumber, phoneNumber, roomType, checkInDate, checkOutDate, totalDays, pricePerNight, totalPrice];
    reservations.push(reservation);
    
    displayReservations();
}

function getDailyRate(roomType) {
    if (roomType === 'individual') {
        return 100.000;
    } else if (roomType === 'doble') {
        return 150.000;
    } else {
        return 250.000;
    }
}

function displayRoomTypeOptions() {
    const roomTypeSelect = document.getElementById('roomType');
    const roomTypeOptions = `
        <option value="individual">Individual ($100.000 por noche)</option>
        <option value="doble">Doble ($150.000 por noche)</option>
        <option value="suite">Suite ($250.000 por noche)</option>
    `;
    roomTypeSelect.innerHTML = roomTypeOptions;
}

displayRoomTypeOptions();

function displayReservations() {
    const reservationsContainer = document.getElementById('reservations');
    reservationsContainer.innerHTML = ''; 

    reservations.forEach(reservation => {
        const reservationHTML = `
            <div class="row">
                <div class="cell">Nombre: ${reservation[0]}</div>
                <div class="cell">Número de Documento: ${reservation[1]}</div>
                <div class="cell">Teléfono: ${reservation[2]}</div>
                <div class="cell">Tipo de Habitación: ${reservation[3]}</div>
                <div class="cell">Fecha de Llegada: ${reservation[4]}</div>
                <div class="cell">Fecha de Salida: ${reservation[5]}</div>
                <div class="cell">Días de Ocupación: ${reservation[6]} días</div>
                <div class="cell">Tarifa Diaria: $${reservation[7]} por noche</div>
                <div class="cell">Precio Total: $${reservation[8]}</div>
            </div>
        `;
        reservationsContainer.innerHTML += reservationHTML;
    });
}