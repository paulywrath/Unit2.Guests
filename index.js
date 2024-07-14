// Make state object with empty array inside to store list of guests from API
const state = {
  guests: []
}

// Grab elements in html where content will appear.
const body = document.querySelector(`body`);

// Fetch guest list from API
const getGuests = async () => {
  try { 
    const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/guests`);
    const responseJSON = await response.json();
    // Store guests in an array in the state.
    state.guests = responseJSON.data;
    renderGuests();
  } catch (e) {
    alert(e);
  }
}

getGuests();
  

// Render guest list on page
const renderGuests = () => {
  // Make ul inside of which guests will be listed
  const ul = document.createElement(`ul`);
  // Put ul at bottom of body
  body.append(ul);

  // For each guest in the state array, make an LI
  state.guests.forEach(guest => {
    const li = document.createElement(`li`);
    ul.append(li);
    // Put each guest's name in the LI
    li.innerText = guest.name;
  });

  // When you click on a guest, you go to a details page about them
  //Grab list items
  const guestListItems = document.querySelectorAll(`li`);

  // Put event listener on list items that acts on click.
  guestListItems.forEach((guestLI) => {
    
    //When you click on it, it uses the inner text to identify which guest you clicked on.  
    guestLI.addEventListener(`click`, (event) => {
      const clickedGuest = state.guests.find((guest) => {
        return guest.name === event.target.innerText;  
      })

      // Render a page with their details
      body.innerHTML = `
      <h1>Guest Info</h1>
      <ul>
        <li>Guest ID: ${clickedGuest.id}</li>
        <br>
        <li>Name: ${clickedGuest.name}</li>
        <br>
        <li>Email: ${clickedGuest.email}</li>
        <br>
        <li>Phone: ${clickedGuest.phone}</li>
        <br>
        <button>Back to Guest List</button>
      </ul>
      ` 

      // Back button re-renders main page
      const button = document.querySelector(`button`);

      button.addEventListener(`click`, () => {
        body.innerHTML = `
        <h1>My Guests</h1>
        `
        renderGuests();
      })

    })

})
}