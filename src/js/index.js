const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        removeCharacterSelection();

        character.classList.add('selected')

        changeSelectedCharacterImage(character);

        changeSelectedCharacterName(character);

        changeDescriptionSelectedCharacter(character);
    })
})


function changeDescriptionSelectedCharacter(character) {
    const characterDescription = document.getElementById('character-description');
    characterDescription.innerText = character.getAttribute('data-description');
}

function changeSelectedCharacterName(character) {
    const characterName = document.getElementById('characters-name');
    characterName.innerText = character.getAttribute('data-name');
}

function changeSelectedCharacterImage(character) {
    const imgBigCharacter = document.querySelector('.big-character');
    const idCharacter = character.attributes.id.value;
    imgBigCharacter.src = `src/img/card-${idCharacter}.png`;
}

function removeCharacterSelection() {
    const characterSelected = document.querySelector('.selected');
    characterSelected.classList.remove('selected');
}

