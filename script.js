/*
The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned. */
const labels = document.querySelectorAll('.form-control label'); // returns a NodeList of all label elements within the document with class="form-control label"

labels.forEach(label => { // for each label element in the NodeList
  label.innerHTML = label.innerText // set the innerHTML of the label element to the innerText of the label element
    .split('') // split the innerText into an array of characters
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // for each character in the array, return a span element with the character as the innerHTML and a transition-delay style property equal to the index of the character in the array multiplied by 50 milliseconds
    .join(' ') // join the array of span elements into a string
}) 