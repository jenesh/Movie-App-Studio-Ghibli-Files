let allMovieData;

document.addEventListener('DOMContentLoaded', async () => {
    await getMovieData();
    await movieOptionTags(allMovieData);

    const selectTag = document.querySelector('select');

    selectTag.onchange = () => {
        for (let i = 0; i < allMovieData.length; i++) {
            if (allMovieData[i].title === selectTag.value) {
                selectedMovieDetails(allMovieData[i]);
                return;
            }
        }
    };

    const submitButton = document.querySelector('#submit-btn')

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const text = document.querySelector('#input-text').value;
        addListItem(text);
    })
})

const getMovieData = async () => {
    let url = 'https://ghibliapi.herokuapp.com/films';
    await fetch(url)
        .then(respose => respose.json())
        .then(data => {
            allMovieData = data;
        })
}

const movieOptionTags = (movieObj) => {
    for (let i = 0; i < movieObj.length; i++) {
        const optionTag = document.createElement('option');
        optionTag.value = movieObj[i].title;
        optionTag.innerText = movieObj[i].title;
        document.querySelector('#select-movies').appendChild(optionTag);
    }
}

const selectedMovieDetails = (selectedMovie) => {
    const movieDetailTag = document.querySelector('#movie-details');

    movieDetailTag.innerHTML = '';

    const title = document.createElement('h3')
    const year = document.createElement('p')
    const description = document.createElement('p')

    title.innerText = selectedMovie.title;
    year.innerText = selectedMovie.release_date;
    description.innerText = selectedMovie.description;

    movieDetailTag.appendChild(title)
    movieDetailTag.appendChild(year)
    movieDetailTag.appendChild(description)
}

const addListItem = (text) => {
    const li = document.createElement('li');
    const movieTitle = document.querySelector('select').value;
    li.innerText = movieTitle + ": " + text;
    document.querySelector('ul').appendChild(li);
}
