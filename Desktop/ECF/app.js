
var films = [
    { id: 1, title: "Deadpool", years: 2016, authors: "Tim Miller" },
    { id: 2, title: "Spiderman", years: 2002, authors: "Sam Raimi" },
    { id: 3, title: "Scream", years: 1996, authors: "Wes Craven" },
    { id: 4, title: "It: Chapter One", years: 2017, authors: "Andy Muschietti" }
];

let nextId = films.length + 1;

function updateFilmDisplay() {
    const tableBody = document.getElementById('filmsTableBody');
    tableBody.innerHTML = ''; 

    films.forEach(film => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = film.title;
        row.insertCell(1).innerText = film.years;
        row.insertCell(2).innerText = film.authors;

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Supprimer';
        deleteButton.onclick = function() {
            if (confirm('Êtes-vous sûr de vouloir supprimer ce film ?')) {
                films = films.filter(f => f.id !== film.id);
                updateFilmDisplay();
            }
        };

        row.insertCell(3).appendChild(deleteButton);
    });
}

document.getElementById('showAddFormButton').addEventListener('click', function() {
    document.getElementById('addFilmForm').style.display = 'block';
});

document.getElementById('saveFilmButton').addEventListener('click', function() {
    let title = document.getElementById('titleInput').value;
    let year = parseInt(document.getElementById('yearInput').value);
    let author = document.getElementById('authorInput').value;
    
    if (title && year && author) {
        films.push({
            id: nextId++,
            title: title,
            years: year,
            authors: author
        });
        updateFilmDisplay();
        document.getElementById('addFilmForm').style.display = 'none';
    } else {
        alert('Tous les champs doivent être remplis.');
    }
});

document.getElementById('sortByTitleButton').addEventListener('click', function() {
    films.sort((a, b) => a.title.localeCompare(b.title));
    updateFilmDisplay();
});

document.getElementById('sortByYearButton').addEventListener('click', function() {
    films.sort((a, b) => a.years - b.years);
    updateFilmDisplay();
});


updateFilmDisplay();


