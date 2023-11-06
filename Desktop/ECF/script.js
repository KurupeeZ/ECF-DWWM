document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', () => {
      const title = document.getElementById('titleInput').value;
      const year = document.getElementById('yearInput').value;
      const type = document.getElementById('typeSelect').value;
      
      searchMovies(title, year, type);
    });
  });
  
  function searchMovies(title, year, type) {
    const apiKey = 'c89fdd1d'; 
    let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    
    if (year) {
      url += `&y=${year}`;
    }
    
    if (type) {
      url += `&type=${type}`;
    }
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayResults(data);
      })
      .catch(error => console.error(error));
  }
  
  function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 
    
    if (data.Response === "True") {
      data.Search.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
          <img src="${movie.Poster !== "N/A" ? movie.Poster : 'default_image.png'}" alt="Poster">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        `;
        resultsDiv.appendChild(movieElement);
      });
      
    } else {
      resultsDiv.innerHTML = `<p>Aucun résultat trouvé.</p>`;
    }
  }
  
  
  