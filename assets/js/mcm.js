const form = document.querySelector("#form_mcm")
form.addEventListener("submit", mcm)

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

function mcm(e) {
    e.preventDefault()

    const data = new FormData(this)
    const n1 = Number(data.get('n1'))
    const n2 = Number(data.get('n2'))
    
    let tem1, tem2, aux

    tem1 = n1
    tem2 = n2

    while (tem2 !== 0) {
        aux = tem2
        tem2 = tem1 % tem2
        tem1 = aux
    }

    const restult = (n1 * n2) / tem1;
    document.getElementById("result").innerHTML = "MCM: "+ round(restult); 
}