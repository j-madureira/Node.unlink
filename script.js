let fs = require('fs');

fs.writeFile('app-q.js','console.log("Criado pelo Node")',function(erro){
                                                          if(erro){ throw "Erro!"}

                                                          console.log("Tudo certo na criação!")
});

fs.unlink('app-q.js',function(errado){
                     if(errado){ throw errado}

                     console.log("Arquivo deletado!");
});


