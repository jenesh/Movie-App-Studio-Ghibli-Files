(() => fetch('https://ghibliapi.herokuapp.com/films').then(x => x.json()).then(y => makeOptionLists(y)))(); // IIFE

const makeOptionLists = (data) => data.forEach(ele => document.querySelector('#select-movies').innerHTML += `<option value="<h3>${ele.title}</h3> <p>${ele.release_date}</p> <p>${ele.description}</p>">${ele.title}</option>`); // innerHTML

document.querySelector('#select-movies').onchange = () => document.querySelector('#movie-details').innerHTML = document.querySelector('#select-movies').selectedOptions[0].value; // innerHTML, .selectedOptions

document.querySelector('#submit-btn').onclick = () => document.querySelector('ul').innerHTML += `<li>${document.querySelector('#select-movies').selectedOptions[0].innerText} => ${document.querySelector('#input-text').value}</li>`; // innerHTML, .selectedOptions