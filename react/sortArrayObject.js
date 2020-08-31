
//https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/


function sortObjectArray(key, order = "asc") {
  // key by which the sort is fired, order asc or desc, both are passed as strings
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    // checking for integer or string and normalize string to neutral or same case
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
    // for descending inverting the returns
  };
}


//  users.sort(sortObjectArray('name', 'desc')
