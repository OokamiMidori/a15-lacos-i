let coxinha = prompt("Você gostaria de uma coxinha? S ou N").toUpperCase()
let conta = 0
while (coxinha !== "N") {
    if (coxinha === "S") {
        coxinha = prompt("Você gostaria de mais uma coxinha? S ou N").toUpperCase()
        conta += 2.5
    } else { coxinha = prompt("Tem que responder S ou N").toUpperCase() }


}
console.log("Sua conta deu: R$" + conta)