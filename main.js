const generator = document.getElementById('btn-generator');
const container = document.querySelector('.container');
const qoute = document.querySelector('.qoute');
const author = document.querySelector('.author');



generator.addEventListener('click', qouteGenerator);

async function qouteGenerator(){
    const theApi = await fetch("https://api.quotable.io/random");
    const resp = await theApi.json();
    qoute.innerHTML = resp.content;
    author.innerHTML = resp.author;
}
qouteGenerator();