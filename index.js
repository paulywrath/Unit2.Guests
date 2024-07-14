// Make state object with empty array inside to store list of guests from API
const state = {
  guests: []
}

// Grab element on the page where main party list will appear.

// Fetch guest list from API
const getGuests = async () => {
  try { 
    const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/guests`);
    const responseJSON = await response.json();
    // Store guests in an array in the state.
    state.guests = responseJSON;
  } catch (e) {
    alert(e);
  }
}

getGuests();
  

// Render guest list on page
  // Make ul inside of which guests will be listed
  // For each guest in the state array, make an LI
  // Put each guest's name in the LI

// When you click on a guest, you go to a details page about them
  // Put event listener on each guest
  // When you click on it, it uses the inner text to identify which guest you clicked on
  // Match that name with a name from the guests array and render a page with their details 
  // Insert back button on details page to re-render main page