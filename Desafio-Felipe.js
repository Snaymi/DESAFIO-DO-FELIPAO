//Criar uma variável parar armmazenar o nome do jogador:
console.clear();
process.stdout.setEncoding('utf-8');
const readlineSync = require ('readline-sync');
let repet;
string: repet = readlineSync.question("Vamos começar? \n S/N?" )
if (repet == "s"||repet == "S"){
while (repet == "S" ||repet == "s" ) {
console.log ("Olá seja bem vindo ao nosso mundo!!!")
    let nomePlayer;
        console.log ("Qual seu nome?")
            const readlineSync = require ('readline-sync');
           
                nomePlayer = readlineSync.question('Digite seu nome: ');
                        let resposta;
                            resposta = readlineSync.question("Então você seria o: " + nomePlayer +"? ")
                                if (resposta=="sim")
                                    //Criar uma variável para armazenar o XP do jogador:
                                    console.log (nomePlayer+  ", você possui quanto de XP? ");
                                    let respostaxp = parseInt(readlineSync.question ("Meu xp: "))
                                                let confirmaxp = readlineSync.question("Confirma que seu XP é: " + respostaxp + "\n S/N?\n")
                                                if (confirmaxp == "S" || confirmaxp =="s")
                                                        if (respostaxp < 999){
                                                        console.log ("Você ainda não possui uma classificação " + nomePlayer)
                                                        }else if (respostaxp>=1000 && respostaxp<=2000 ){
                                                            string: nivel = "BRZONZE"
                                                        console.log("Sua classificação no momento é "+nivel+ " " + nomePlayer+"\n")
                                                        }else if (respostaxp>=2001 && respostaxp<=5000){
                                                            string: nivel="PRATA"
                                                        console.log("Sua classificação no momento é "+nivel+" " + nomePlayer+"\n")
                                                        }else if (respostaxp>=5001 && respostaxp<=7000){
                                                            string: nivel = "OURO"
                                                        console.log("Sua classificação no momento é "+nivel+" " + nomePlayer+"\n")
                                                        }else if (respostaxp>=7001 && respostaxp<=8000){
                                                            string: nivel = "PLATINA"
                                                        console.log("Sua classificação no momento é "+nivel+  " "+nomePlayer+"\n")
                                                        }else if (respostaxp>=8001 && respostaxp<=9000){
                                                            string: nivel = "ASCENDENTE"
                                                        console.log("Sua classificação no momento é "+nivel+" " + nomePlayer+"\n")
                                                        }else if (respostaxp>=9001 && respostaxp<=10000){
                                                            string: nivel = "IMORTAL"
                                                        console.log("Sua classificação no momento é " +nivel +" "+nomePlayer+"\n")
                                                        }else if (respostaxp>=10001){
                                                            string: nivel = "RADIANTE"
                                                        console.log("Sua classificação no momento é "+ nivel +" "+ nomePlayer+"\n")
                                                        }console.log("Informações do jogador:\n")
                                                            console.log("O herói de nome:\n " + nomePlayer +"\n")
                                                            console.log("Está no nível: \n"+ nivel+ "\n")
                                                        repet = readlineSync.question ("Gostaria de adicionar outro Herói? ")
}   }