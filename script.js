function createPost(imageURL, name, message) {
    return `<section class="card">
         <div class="card__post">
            <img src="${imageURL}" alt="${name}">
            <h1>${name}</h1>
            <p>${message}</p>
        </div> 
    </section>`;
}

const card = document.getElementById('card--section');


for (let index = 1; index <= 826; index++) {
    const name = `Character ${index}`;
    const message = `Esta es mi publicación número ${index}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`;
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${index}.jpeg`;

    const cardHTML = createPost(imageURL, name, message);

    card.innerHTML += cardHTML;
}