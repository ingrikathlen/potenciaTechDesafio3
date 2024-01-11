function calculoRanking(vitorias, derrotas)
{
    let ranking = vitorias - derrotas;

    if (ranking <= 10){
        return "Ferro";
    }

    if (ranking >= 11 && ranking <= 20){
        return "Bronze";
    }

    if (ranking >= 21 && ranking <= 50){
        return "Prata";
    }

    if (ranking >= 51 && ranking <= 80){
        return "Ouro";
    }

    if (ranking >= 81 && ranking <= 90){
        return "Diamante";
    }

    if (ranking >= 91 && ranking <= 100){
        return "Lendário";
    }

    if (ranking >= 101){
        return "Imortal";
    }
}
 
//for chamando calculo ranking 100x

for (let i = 0; i < 100; i++) {
        
    console.log("O herói tem saldo de " + i + " e está no nível " + calculoRanking(i,2))
   
}