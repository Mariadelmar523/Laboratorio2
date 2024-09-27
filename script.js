const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

let events = JSON.parse(localStorage.getItem('events')) || [];

function renderEvents() {
    eventList.innerHTML = '';
    events.forEach((event, index) => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <div class="event-details">
                <strong>${event.title}</strong><br>
                <small>${event.date}</small><br>
                <p>${event.description}</p>
            </div>
            <button class="btn btn-danger" onclick="deleteEvent(${index})">Eliminar</button>
        `;
        eventList.appendChild(eventItem);
    });
}

function addEvent(event) {
    event.preventDefault();
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const description = document.getElementById('eventDescription').value;

    if (title && date && description) {
        events.push({ title, date, description });
        localStorage.setItem('events', JSON.stringify(events));
        renderEvents();
        eventForm.reset();
    }
}

function deleteEvent(index) {
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    renderEvents();
}

renderEvents();
eventForm.addEventListener('submit', addEvent);


    
