const form_halstead = document.querySelector("#form_halstead")
form_halstead.addEventListener("submit", esfuerzoHalstead)

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

/*Esfurzo de halstead */
function esfuerzoHalstead(e){
    e.preventDefault()
    let  n, N, Nn, V, D, E, T, B;

    const data = new FormData(this)
    const n1 = Number(data.get('n1'))
    const n2 = Number(data.get('n2'))
    const N1 = Number(data.get('N1'))
    const N2 = Number(data.get('N2'))
    
    n = Number(n1) + Number(n2);
    N = Number(N1) + Number(N2);
    Nn = (n1 * Math.log2(n1)) + (n2 * Math.log2(n2));

    V = Nn * Math.log2(n);

    D = (n1 / 2) * (N2 / n2)
    E = D * V;
    T = E / 18;
    B = V / 3000;

    document.getElementById("result").innerHTML = "Esfuerzo: "+ round(E);  
};