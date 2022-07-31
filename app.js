let Saludos = Number(prompt("Ingresá la cantidad de saludos que deseas"));

for(let i = 1; i <= Saludos+1; i++){
    if(i == Saludos+1){
        break;

    }
    let str = "Hola";str.repeat(i)
    console.log(str)
}





