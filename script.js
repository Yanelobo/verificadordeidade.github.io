function verificar() {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.querySelector('div#res')
     if(fano.value.length == 0 || fano.value > ano) {
         window.alert('[ERRO] Verifique os dados e tente novamente!')
             } else {
                 var fsex = document.getElementsByName('radsex')
                 var idade = ano - Number(fano.value)
                 var genero = ''
                 var img = document.createElement('img')
                 img.setAttribute('id', 'foto')
                 if (fsex[0].checked) {
                     genero = 'homem'
                     if (idade >= 0 && idade < 12) {
                         // Criança
                         img.setAttribute('src', 'criança.png')
                         genero = 'criança'
                     } else if (idade < 21) {
                         // Jovem
                         img.setAttribute('src', 'adolescente.png')
                         genero = 'jovem'
                     } else if (idade < 55) {
                         // Adulto
                         img.setAttribute('src', 'homem.png')
                     } else {
                         // Idoso
                         img.setAttribute('src', 'idoso.png')
                         genero = 'idoso'
                     }
                 } else {
                     genero = 'mulher'
                     if (idade >= 0 && idade < 12) {
                        // Criança
                        img.setAttribute('src', 'criança.png')
                        genero = 'criança'
                    } else if (idade < 21) {
                        // Jovem
                        img.setAttribute('src', 'adolescente.png')
                        genero = 'jovem'
                    } else if (idade < 55) {
                        // Adulto
                        img.setAttribute('src', 'mulher.png')
                    } else {
                        // Idoso
                        img.setAttribute('src', 'idoso.png')
                        genero ='idoso'
                    }
                 }
                 res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                 res.appendChild(img)
     }
}