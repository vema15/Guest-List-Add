
const people = ['Jean', 'Alex', 'Robert', 'Phil',
'Jamie', 'Lola', 'Jeff', 'Callum'];

let refused = document.querySelector('.refused');
let admitted = document.querySelector('.admitted');

admitted.textContent = "Admitted: ";
refused.textContent = "Refused: ";

for (let i = 0; i < people.length; i++) {
    
    if ((people[i] === 'Phil' || people[i] === 'Lola') && i !== people.length) {
        refused.textContent += `${people[i].toString()}, `;
    } else {
        admitted.textContent += `${people[i].toString()}, `;
    }
}

refused.textContent = refused.textContent.slice(0, refused.textContent.length -2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

