


function notas(){
    
    let nome = window.prompt('Digite seu nome:')

    

    let n1 = Number(window.prompt('digite sua primeira nota:'))
    let n2 = Number(window.prompt('digite sua segunda nota:'))
    let n3 = Number(window.prompt('digite sua terceira nota:'))

    media = (n1+n2+n3)/3;
    if(media >= 6)
    if (media == 10)
    alert("Parabens culumim voce foi aprovado")
    else

    document.getElementById('valor').innerHTML = `${nome}, sua media foi ${+ media}, voce foi aprovado`;
    else
    document.getElementById('valor').innerHTML = `${nome} sua media foi ${+ media}, voce foi reprovado`;
    





}
 
