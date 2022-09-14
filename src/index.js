document.querySelector("#like").addEventListener('click',  () => alert('I made you laugh!'))

document.getElementById('like').addEventListener('click', updateLikeColor)
function updateLikeColor() {
    document.getElementById('like').style.backgroundColor = "red";
}
document.getElementById('submit').addEventListener('click', () => alert('Successfully Submitted'))

document.querySelector(".btn").addEventListener('click', () =>alert('Someone clicked me'))
