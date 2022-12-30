
const form = document.getElementById('form')
let submit = document.getElementById("submit")

submit.addEventListener('click', valorPresente);


    function valorPresente(){
    let precioContado = document.getElementById('precioContado').value
    let precioCuotas = document.getElementById("precioCuotas").value
    let inflacion = document.getElementById("inflacion").value
    let cuotas = document.getElementById("cuotas").value 

    let precioEnCuotas= precioCuotas/cuotas

    if (cuotas==3){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)
    }
    else if (cuotas==6){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)
    }
    else if (cuotas==9){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)
    }
    else if (cuotas==10){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)+ (precioEnCuotas/(1+inflacion)**10)
    }
    else if (cuotas==12){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)+ (precioEnCuotas/(1+inflacion)**10)+ (precioEnCuotas/(1+inflacion)**11)+ (precioEnCuotas/(1+inflacion)**12)
    }
    else if (cuotas==18){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)+ (precioEnCuotas/(1+inflacion)**10)+ (precioEnCuotas/(1+inflacion)**11)+ (precioEnCuotas/(1+inflacion)**12)+ (precioEnCuotas/(1+inflacion)**13)+ (precioEnCuotas/(1+inflacion)**14)+ (precioEnCuotas/(1+inflacion)**15)+ (precioEnCuotas/(1+inflacion)**16)+ (precioEnCuotas/(1+inflacion)**17)+ (precioEnCuotas/(1+inflacion)**18)
    }
    else if (cuotas==24){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)+ (precioEnCuotas/(1+inflacion)**10)+ (precioEnCuotas/(1+inflacion)**11)+ (precioEnCuotas/(1+inflacion)**12)+ (precioEnCuotas/(1+inflacion)**13)+ (precioEnCuotas/(1+inflacion)**14)+ (precioEnCuotas/(1+inflacion)**15)+ (precioEnCuotas/(1+inflacion)**16)+ (precioEnCuotas/(1+inflacion)**17)+ (precioEnCuotas/(1+inflacion)**18)+ (precioEnCuotas/(1+inflacion)**19)+ (precioEnCuotas/(1+inflacion)**20)+ (precioEnCuotas/(1+inflacion)**21)+ (precioEnCuotas/(1+inflacion)**22)+ (precioEnCuotas/(1+inflacion)**23)+ (precioEnCuotas/(1+inflacion)**24)
    }
    else if (cuotas==30){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)+ (precioEnCuotas/(1+inflacion)**10)+ (precioEnCuotas/(1+inflacion)**11)+ (precioEnCuotas/(1+inflacion)**12)+ (precioEnCuotas/(1+inflacion)**13)+ (precioEnCuotas/(1+inflacion)**14)+ (precioEnCuotas/(1+inflacion)**15)+ (precioEnCuotas/(1+inflacion)**16)+ (precioEnCuotas/(1+inflacion)**17)+ (precioEnCuotas/(1+inflacion)**18)+ (precioEnCuotas/(1+inflacion)**19)+ (precioEnCuotas/(1+inflacion)**20)+ (precioEnCuotas/(1+inflacion)**21)+ (precioEnCuotas/(1+inflacion)**22)+ (precioEnCuotas/(1+inflacion)**23)+ (precioEnCuotas/(1+inflacion)**24)+ (precioEnCuotas/(1+inflacion)**25)+ (precioEnCuotas/(1+inflacion)**26)+ (precioEnCuotas/(1+inflacion)**27)+ (precioEnCuotas/(1+inflacion)**28)+ (precioEnCuotas/(1+inflacion)**29)+ (precioEnCuotas/(1+inflacion)**30)
    }
    else if (cuotas==32){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)+ (precioEnCuotas/(1+inflacion)**10)+ (precioEnCuotas/(1+inflacion)**11)+ (precioEnCuotas/(1+inflacion)**12)+ (precioEnCuotas/(1+inflacion)**13)+ (precioEnCuotas/(1+inflacion)**14)+ (precioEnCuotas/(1+inflacion)**15)+ (precioEnCuotas/(1+inflacion)**16)+ (precioEnCuotas/(1+inflacion)**17)+ (precioEnCuotas/(1+inflacion)**18)+ (precioEnCuotas/(1+inflacion)**19)+ (precioEnCuotas/(1+inflacion)**20)+ (precioEnCuotas/(1+inflacion)**21)+ (precioEnCuotas/(1+inflacion)**22)+ (precioEnCuotas/(1+inflacion)**23)+ (precioEnCuotas/(1+inflacion)**24)+ (precioEnCuotas/(1+inflacion)**25)+ (precioEnCuotas/(1+inflacion)**26)+ (precioEnCuotas/(1+inflacion)**27)+ (precioEnCuotas/(1+inflacion)**28)+ (precioEnCuotas/(1+inflacion)**29)+ (precioEnCuotas/(1+inflacion)**30)+ (precioEnCuotas/(1+inflacion)**31)+ (precioEnCuotas/(1+inflacion)**32)
    }
    else if (cuotas==36){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)+ (precioEnCuotas/(1+inflacion)**10)+ (precioEnCuotas/(1+inflacion)**11)+ (precioEnCuotas/(1+inflacion)**12)+ (precioEnCuotas/(1+inflacion)**13)+ (precioEnCuotas/(1+inflacion)**14)+ (precioEnCuotas/(1+inflacion)**15)+ (precioEnCuotas/(1+inflacion)**16)+ (precioEnCuotas/(1+inflacion)**17)+ (precioEnCuotas/(1+inflacion)**18)+ (precioEnCuotas/(1+inflacion)**19)+ (precioEnCuotas/(1+inflacion)**20)+ (precioEnCuotas/(1+inflacion)**21)+ (precioEnCuotas/(1+inflacion)**22)+ (precioEnCuotas/(1+inflacion)**23)+ (precioEnCuotas/(1+inflacion)**24)+ (precioEnCuotas/(1+inflacion)**25)+ (precioEnCuotas/(1+inflacion)**26)+ (precioEnCuotas/(1+inflacion)**27)+ (precioEnCuotas/(1+inflacion)**28)+ (precioEnCuotas/(1+inflacion)**29)+ (precioEnCuotas/(1+inflacion)**30)+ (precioEnCuotas/(1+inflacion)**31)+ (precioEnCuotas/(1+inflacion)**32)+ (precioEnCuotas/(1+inflacion)**32)+ (precioEnCuotas/(1+inflacion)**34)+ (precioEnCuotas/(1+inflacion)**34)+ (precioEnCuotas/(1+inflacion)**36)
    }
    else if (cuotas==48){
        return (precioEnCuotas/(1+inflacion))+ (precioEnCuotas/(1+inflacion)**2)+ (precioEnCuotas/(1+inflacion)**3)+ (precioEnCuotas/(1+inflacion)**4)+ (precioEnCuotas/(1+inflacion)**5)+ (precioEnCuotas/(1+inflacion)**6)+ (precioEnCuotas/(1+inflacion)**7)+ (precioEnCuotas/(1+inflacion)**8)+ (precioEnCuotas/(1+inflacion)**9)+ (precioEnCuotas/(1+inflacion)**10)+ (precioEnCuotas/(1+inflacion)**11)+ (precioEnCuotas/(1+inflacion)**12)+ (precioEnCuotas/(1+inflacion)**13)+ (precioEnCuotas/(1+inflacion)**14)+ (precioEnCuotas/(1+inflacion)**15)+ (precioEnCuotas/(1+inflacion)**16)+ (precioEnCuotas/(1+inflacion)**17)+ (precioEnCuotas/(1+inflacion)**18)+ (precioEnCuotas/(1+inflacion)**19)+ (precioEnCuotas/(1+inflacion)**20)+ (precioEnCuotas/(1+inflacion)**21)+ (precioEnCuotas/(1+inflacion)**22)+ (precioEnCuotas/(1+inflacion)**23)+ (precioEnCuotas/(1+inflacion)**24)+ (precioEnCuotas/(1+inflacion)**25)+ (precioEnCuotas/(1+inflacion)**26)+ (precioEnCuotas/(1+inflacion)**27)+ (precioEnCuotas/(1+inflacion)**28)+ (precioEnCuotas/(1+inflacion)**29)+ (precioEnCuotas/(1+inflacion)**30)+ (precioEnCuotas/(1+inflacion)**31)+ (precioEnCuotas/(1+inflacion)**32)+ (precioEnCuotas/(1+inflacion)**32)+ (precioEnCuotas/(1+inflacion)**34)+ (precioEnCuotas/(1+inflacion)**35)+ (precioEnCuotas/(1+inflacion)**36)+ (precioEnCuotas/(1+inflacion)**37)+ (precioEnCuotas/(1+inflacion)**38)+ (precioEnCuotas/(1+inflacion)**39)+ (precioEnCuotas/(1+inflacion)**40)+ (precioEnCuotas/(1+inflacion)**41)+ (precioEnCuotas/(1+inflacion)**42)+ (precioEnCuotas/(1+inflacion)**43)+ (precioEnCuotas/(1+inflacion)**44)+ (precioEnCuotas/(1+inflacion)**45)+ (precioEnCuotas/(1+inflacion)**46)+ (precioEnCuotas/(1+inflacion)**47)+ (precioEnCuotas/(1+inflacion)**48)
    }
 } 

