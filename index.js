// Make state object with empty array inside to store list of guests from API
const state = {
  guests: []
}

// Grab element on the page where main party list will appear.
const main = document.querySelector(`main`);

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
  // Put ul inside main
  main.append(ul);

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
      console.log(clickedGuest);
      // Match that name with a name from the guests array and render a page with their details 

    })

})
}


  // Insert back button on details page to re-render main page