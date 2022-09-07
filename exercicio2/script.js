let idade = +prompt("Qual a sua idade?")
let maiorIdade = prompt("Já concluiu o ensino médio? Se sim, digite S MAIUSCULO. Se não digite N MINUSCULO")
let cursandoOutraFaculdade = prompt("Esta cursando alguma faculdade? Se sim, digite S MAIUSCULO. ")

if(idade >= 18 ){
    console.log("a pessoa é maior de idade")

}else{
    console.log("a pessoa é de menor")
	
}

if(maiorIdade === "S"){
    console.log("ele conlcuiu o ensino medio")
}else if(maiorIdade === "N"){ 
    console.log("ele não concluiu")
    
}else{
    console.log("Você digitou errado, tente de novo.")

}

if(cursandoOutraFaculdade === "S"){
    console.log("Ele está na faculdade")
}else{
    console.log("Ele não está na faculdade")
}






