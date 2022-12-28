function contar(){
    var inicio = document.querySelector("input#inicio")
    var fim = document.querySelector("input#fim")
    var passo = document.querySelector("input#passo")
    var res = document.querySelector('div#res')
    
    if(inicio.value === "" || fim.value === "") {
        res.innerHTML = "Impossível contar!"
    } else {
        var i =  Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = 'Contando: <br>'
        if(p <= 0) {
            alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f ;c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f ;c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1} `
    }
}
