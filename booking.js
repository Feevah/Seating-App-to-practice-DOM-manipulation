const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total =document.getElementById('total');
const movieSelect = document.getElementById('movie');

// populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price 

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
};

//Update Total and Count
function updateSelectedCount () {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat);
    });

   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}




// Get data from local storage and populate UI 

// function populteUI() {
//     const selectedSeats

// }

//Movie Select Event

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
 setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//Seat Click event

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
})