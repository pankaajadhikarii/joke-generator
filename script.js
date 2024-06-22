const url = "https://official-joke-api.appspot.com/random_joke";
const loading = document.querySelector('.loading');
const jokeContainer = document.querySelector('.joke');
const button = document.querySelector('#button');

async function generateJoke() {
    
    loading.style.display = 'block';
    
    jokeContainer.style.display = 'none';
    
    jokeContainer.innerText = '';
    
    const response = await fetch(url);
    
    const data = await response.json();
     
    jokeContainer.innerText = `${data.setup} 
   
    - ${data.punchline}`;
    
    jokeContainer.style.display = 'block';

    loading.style.display = "none"
}

button.addEventListener('click', () => {
    generateJoke();
});