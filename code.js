// global variables
const container = document.getElementById('container');
const currentYear = new Date().getFullYear();
const footer = document.getElementById('footer');
const body = document.body;
const html = document.documentElement;
//main method



//functions

// Dynamically Generate Container Content

// Array of person data
const persons = [
    {
        image: 'loewe.jpg',
        name: 'Konstantin',
        description: 'Beschreibung Person 1',
        facts: ['Fakt 1', 'Fakt 2', 'Fakt 3']
    },
    {
        image: 'panther.jpg',
        name: 'Enes',
        description: 'Beschreibung Person 2',
        facts: ['Fakt 1', 'Fakt 2', 'Fakt 3']
    },
    {
        image: 'tiger.jpg',
        name: 'Raphael',
        description: 'Beschreibung Person 3',
        facts: ['Fakt 1', 'Fakt 2', 'Fakt 3']
    }
];

// Loop through persons data and generate container content
persons.forEach(person => {
    const personDiv = document.createElement('div');
    personDiv.classList.add('person');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = person.image;
    imageContainer.appendChild(image);

    personDiv.appendChild(imageContainer);

    const name = document.createElement('h2');
    name.textContent = person.name;
    personDiv.appendChild(name);

    const description = document.createElement('p');
    description.textContent = person.description;
    personDiv.appendChild(description);

    const factsList = document.createElement('ul');
    person.facts.forEach(fact => {
        const factItem = document.createElement('li');
        factItem.textContent = fact;
        factsList.appendChild(factItem);
    });
    personDiv.appendChild(factsList);
    container.appendChild(personDiv);
});

// Update Current Year in Footer
document.getElementById('current-year').textContent = currentYear;


const setFooterPosition = () => {
    const bodyHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    const viewportHeight = window.innerHeight;
    if (bodyHeight < viewportHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'static';
    }
};

window.addEventListener('resize', setFooterPosition);
setFooterPosition();