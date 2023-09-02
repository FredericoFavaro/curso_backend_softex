/*
07 - Faca um programa para ler um horario (hora:minuto:segundo) dê início e a duração, em segundos, de uma experiencia biológica. O programa deve informar o horário (hora:minuto:segundo) de término da mesma.
*/

let deltaZero = "08:59:24", duracao = 55, horas, minutos, segundos, deltaUm;

deltaZero = deltaZero.split(":");
segundos = Number(deltaZero[2]);
minutos = Number(deltaZero[1]);
horas = Number(deltaZero[0]);
segundos+=duracao;

while (segundos>=60){
    segundos-=60;
    minutos+=1;
}

while (minutos>=60){
    minutos-=60;
    horas+=1;
}

console.log(`${horas}:${minutos}:${segundos}`);