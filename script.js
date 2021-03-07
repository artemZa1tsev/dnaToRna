const eventForm = document.querySelector('#converter__form')
const inputValue = eventForm.querySelector('#add-text')


const dnaToRna = (dna) => {
    let rna = '';
    let newDna = dna.toUpperCase().replace(/[/.,!?@;_’%:\s/\-/\–/\—/]*/g, '');

    for (let i = 0; i < newDna.length; i++) {

        switch (newDna[i]) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default:
                return ("Ошибка. Допустимые символы - A, C, G, T");
        }
    }
    return rna;
};

eventForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputText = inputValue.value;
    dnaToRna(inputText);
    if (inputText === '') {
        document.getElementById('answer').innerHTML = "Пустое значение";
    } else {
        document.getElementById('dna').innerHTML = "DNA - " + inputText.toUpperCase().replace(/[/.,!?@;_’%:\s/\-/\–/\—/]*/g, '');
        document.getElementById('rna').innerHTML = "RNA - " + dnaToRna(inputText);
    }

});