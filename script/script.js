document.getElementById("btn").onclick = function advice() {
    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json()
    } ).then(data => {
        var obj = data.slip
        p.innerHTML = obj.advice
    })
}
