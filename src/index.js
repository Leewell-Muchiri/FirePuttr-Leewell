document.querySelector("#like").addEventListener('click',  () => alert('I made you laugh!'))

document.getElementById('like').addEventListener('click', updateLikeColor)
function updateLikeColor() {
    document.getElementById('like').style.backgroundColor = "red";
}

document.getElementById('submit').addEventListener('click', () => alert('Successfully Submitted'))

document.querySelector(".btn").addEventListener('click', () =>alert('Someone clicked me'))

// const getJoke = document.querySelector(".btn").addEventListener('click', e => {
//     e.preventDefault();
//     const input = document.querySelector('input#joke');
//     console.log(input.value);
//     fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
//     .then(response => response.json())
//      .then(response => console.log(response))
// .catch(err => console.error(err)))


const init = () => {
    const getJoke = document.querySelector(".btn");
    getJoke.addEventListener('click', e => {
        e.preventDefault();
        const input = document.querySelector('input#joke');
        console.log(input.value);
        fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
}
document.addEventListener('DOMContentLoaded' init);
	
}


