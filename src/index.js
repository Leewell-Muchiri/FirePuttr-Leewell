 
document.querySelector("#like").addEventListener('click',  () => alert('I made you laugh!'))

document.getElementById('like').addEventListener('click', updateLikeColor)
function updateLikeColor() {
    document.getElementById('like').style.backgroundColor = "red";
}

// document.getElementById('submit').addEventListener('click', () => alert('Successfully Submitted'))

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
        // const input = document.querySelector('input#joke');
        // console.log(input.value);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bd19915a35mshead8ae7b5e30360p1e137bjsned637b7bd883',
                'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
            }
        };
        
        // fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        //     .then(response => response.json()
        //         console.log(response)
        //     )
        //     .then(response => console.log(response))
        //     let punchline = response.body[0].punchline
        //     console.log(punchline)
        //     .catch(err => console.error(err));

        const url= ('https://dad-jokes.p.rapidapi.com/random/joke')  
        async function getData() {
            let response = await fetch(url, options)
            let json = await response.json()
            let joke = json.body[0].setup
            let punchline = json.body[0].punchline

            console.log(punchline)
            let newJoke = document.querySelector("#joke p")
            console.log(newJoke)
            newJoke.textContent = joke
            let newPunchline = document.querySelector(".punchline")
            newPunchline.textContent = punchline
        }
        getData()
    })
}
document.addEventListener('DOMContentLoaded', init);


	

