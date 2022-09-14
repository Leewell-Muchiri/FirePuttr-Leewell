document.querySelector("#like").addEventListener('click',  () => alert('I made you laugh!'))

document.getElementById('like').addEventListener('click', updateLikeColor)
function updateLikeColor() {
    document.getElementById('like').style.backgroundColor = "red";
}
document.getElementById('submit').addEventListener('click', () => alert('Successfully Submitted'))

document.querySelector(".btn").addEventListener('click', () =>alert('Someone clicked me'))



// const options = {
// 	method: 'GET',
// 	headers: {
//         let getJoke = document.querySelector(".btn")
//         getJoke.addEventListener('click', fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err)))
//         console.log(response)
// 		'X-RapidAPI-Key': 'bd19915a35mshead8ae7b5e30360p1e137bjsned637b7bd883',
// 		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
// 	}
// };
const init = () 