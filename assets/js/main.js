
const form_ms = document.querySelector("#form_ms")

form_ms.addEventListener("submit", handleSubmitMS)

function handleSubmitMS(e) {
    
    e.preventDefault()
    const data = new FormData(this)
    const number_of_modules = Number(data.get('number_of_modules'))
    const number_of_modified_modules = Number(data.get('number_of_modified_modules'))
    const number_of_modules_added = Number(data.get('number_of_modules_added'))
    const number_of_modules_removed = Number(data.get('number_of_modules_removed'))

    const result = (( number_of_modified_modules+ number_of_modules_added + number_of_modules_removed) - number_of_modules) / number_of_modules;
    document.getElementById("result").innerHTML = "El resultado es: "+ round(result)

    limpiarMS()
}

function limpiarMS() {
    document.getElementById("number_of_modules")
    document.getElementById("number_of_modified_modules")
    document.getElementById("number_of_modules_added")
    document.getElementById("number_of_modules_removed")
}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
