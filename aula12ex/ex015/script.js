function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]: Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
       
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src','homem-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src','homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','homem-adulto.png')
            } else {
                img.setAttribute('src','homem-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src','mulher-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src','mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','mulher-adulta.png')
            } else {
                img.setAttribute('src','mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}