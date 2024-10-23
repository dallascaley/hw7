/* 
  Homework 6 Question 3
*/

// Country list
const countryList = [
   "Afghanistan",
   "Albania",
   "Algeria",
   "Andorra",
   "Angola",
   "Anguilla",
   "Antarctica",
   "Antigua-and-Barbuda",
   "Argentina",
   "Armenia",
   "Aruba",
   "Australia",
   "Autria",
   "Azerbaïjan"
 ];
 
 const countryInput = document.getElementById('country');
 const suggestions = document.getElementById('suggestions');

 countryInput.addEventListener('keyup', (e) => {
   suggestions.innerHTML = '';

   let inputValue = e.target.value;
   let matchingCountries = [];
   countryList.forEach(country => {
      if (inputValue.toLowerCase() === country.toLowerCase().substring(0, inputValue.length)) {
         matchingCountries.push(country);
      }
   });
   matchingCountries.forEach(match => {
      let thisCountry = document.createElement('div');
      thisCountry.innerHTML = match;
      thisCountry.addEventListener('click', (e) => {
         countryInput.value = match;
         suggestions.innerHTML = '';
      });
      suggestions.appendChild(thisCountry);
   });
 });

