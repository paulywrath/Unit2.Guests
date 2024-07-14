// Make state object with empty array inside to store list of guests from API

// Grab element on the page where main party list will appear.

// Fetch guest list from API
  // Async function
  // Fetch data. Remember await.
  // Convert readable stream to be actually readable with JSON.
  // Store in an array in the state.

// Render guest list on page
  // Make ul inside of which guests will be listed
  // For each guest in the state array, make an LI
  // Put each guest's name in the LI

// When you click on a guest, you go to a details page about them
  // Put event listener on each guest
  // When you click on it, it uses the inner text to identify which guest you clicked on
  // Match that name with a name from the guests array and render a page with their details 
  // Insert back button on details page to re-render main page