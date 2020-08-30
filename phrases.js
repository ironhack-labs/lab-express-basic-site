const phraseArray = [
    'Is it better to out-monster the monster or to be quietly devoured?',
    'A politician divides mankind into two classes: tools and enemies.',
    'A thought, even a possibility, can shatter and transform us.',
    'There will always be rocks in the road ahead of us. They will be stumbling blocks or stepping stones; it all depends on how you use them.',
    'There is no defense against stupidity.',
    'He who cannot obey himself will be commanded. That is the nature of living creatures.',
    'I know of no better life purpose than to perish in attempting the great and the impossible.',
    'There are no beautiful surfaces without a terrible depth.',
    "So long as men praise you, you can only be sure that you are not yet on your own true path but on someone else’s.",
    'And those who were seen dancing were thought to be insane by those who could not hear the music.',
    'Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.',
];

const parent = document.getElementById('phrase');
const child = document.createElement('p');
child.setAttribute('class', 'phrase');
const min = 0;
const max = phraseArray.length;
child.innerText = phraseArray[Math.floor(Math.random() * (max - min)) + min];
parent.appendChild(child);