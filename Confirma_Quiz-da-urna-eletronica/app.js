
        var somNumero = document.querySelector('.som-numero')
            //Cria a variável "somNumero". Ela seleciona elemento do HTML que possui a classe "som-numero" 
        var somConfirma = document.querySelector('.som-confirma')
            //Cria a variável "somConfirma". Ela seleciona o elemento HTML que possui a classe "som-confirma"



//Cria uma array (uma lista) de objetos. Objetos são variáveis que contêm vários valores. Os valores são escritos como pares "nome:valor" (nome e valor separados por dois pontos). Neste caso, temos uma lista com 3 objetos. Cada objeto corresponde a uma pergunta do QUIZ. Os objetos possuem propriedades/valor ou chave/valor.   

        var lista = [
            {
                contexto: "🗳️ A urna eletrônica é um computador, que funciona a partir de programas e dados. Programas são as instruções que dizem o que o aparelho deve fazer. Todos os programas usados nas eleições são desenvolvidos por técnicos da Justiça Eleitoral. Meses antes do pleito, é realizado o Teste Público de Segurança, o mais recente ocorreu de 22 a 27 de novembro de 2021. <b>O que acontece nessa etapa?</b>",
                explicacao: "🤔 No Teste Público de Segurança os programas da urna são violados de propósito. Participam dessa etapa técnicos de computação, hackers, policiais federais, representantes de partidos políticos e quem mais quiser se habilitar.",
                comoVotar:"Se você acha que a explicação (🤔) é<b>verdadeira vote 1</b>. Se, pelo contrário, considera que ela é<b>falsa vote 2.</b> Em seguida, aperte<b class='confirmaVerde'>CONFIRMA</b>para checar o resultado. ⬇️",
                correta: true,
                resposta: "<p><b>SAIBA MAIS</b></p><p>Essa etapa colaborativa permite o aprimoramento das camadas de proteção do sistema informatizado das eleições e a elaboração de novos mecanismos de segurança.</p><p>De acordo com o calendário eleitoral, de 11 a 13 de maio de 2022 ocorrerá o<b>Teste de Confirmação.</b> Nele serão checadas as correções aplicadas decorrentes dos resultados obtidos no Teste Público de Segurança de novembro passado."

            },
            
            {
                contexto: "🗳️ O Brasil possui cerca de 150 milhões de pessoas eleitoras. No dia em que elas vão às urnas, o resultado da eleição é divulgado horas depois de encerradas as votações.<b>Como isso é possível?</b>",
                explicacao: "🤔 O resultado sai na noite do mesmo dia das eleições, porque as urnas eletrônicas são conectadas à internet. Assim os dados sobre cada voto conseguem ser, quase que, instantaneamente enviados para a sede do Tribunal Superior Eleitoral (TSE), em Brasília, onde é feita a apuração final.",
                comoVotar:"Se você acha que a explicação (🤔) é<b>verdadeira vote 1</b>. Se, pelo contrário, considera que ela é<b>falsa vote 2.</b> Em seguida, aperte<b class='confirmaVerde'>CONFIRMA</b>para checar o resultado. ⬇️",
                correta: false,
                resposta:"<p><b>SAIBA MAIS</b></p><p>A urna não é conectada à internet, por isso, ela<b>não pode ser atacada remotamente.</b>A única ligação externa que ela tem é com a tomada de eletricidade da sala de votação. 🔦 Detalhe, a urna possui uma bateria com capacidade de 10 horas de duração, em caso de falta de luz.</p><p>Encerrada a votação, desconecta-se da urna um dispositivo, semelhante a um<i>pen drive</i>, que contém os votos registrados pelo aparelho. O “<i>pen drive</i>” é levado para o Tribunal Regional Eleitoral (TRE) de referência.</p><p>De lá os dados são<b>enviados digitalmente para o Tribunal Superior Eleitoral (TSE) via fibras óticas, contratadas especialmente para essa finalidade.</b>Além do mais, a transmissão das informações eleitorais é feita de forma criptografada e com barreiras de segurança, para evitar qualquer tipo de interceptação e adulteração dos dados."

            },

            {
                contexto: "🗳️ Em outubro de 2022, quando se encerrar a votação, a pessoa presidente da seção eleitoral irá imprimir e disponibilizar para acesso da população local o boletim de urna. Um extrato dos votos recebidos por cada candidato e dos votos nulos e em brancos. Quem não receber voto naquela seção não terá o nome registrado no papel. O boletim de urna será impresso antes mesmo do envio dos resultados ao Tribunal Superior Eleitoral.<b>Por que isso será feito?</b>",
                explicacao: "🤔 Para que qualquer pessoa possa confrontar os resultados dos votos do boletim de urna da sua respectiva seção com os resultados posteriormente divulgados no site do Tribunal Superior Eleitoral.",
                comoVotar:"Se você acha que a explicação (🤔) é<b>verdadeira vote 1</b>. Se, pelo contrário, considera que ela é<b>falsa vote 2.</b> Em seguida, aperte<b class='confirmaVerde'>CONFIRMA</b>para checar o resultado. ⬇️",
                correta: true,
                resposta:"<p><b>SAIBA MAIS</b></p><p>Essa é uma novidade criada para<b>aumentar a transparência da totalização dos votos e a auditabilidade das eleições</b>pela sociedade civil 🔎.</p><p>Até o pleito passado, ocorrido em 2020, os boletins de urna ficavam disponíveis para o público em até três dias úteis. Agora eles serão disponibilizados no mesmo dia da eleição. Isso<b>permitirá à população fazer apurações simultâneas e em tempo real com o Tribunal Superior Eleitoral (TSE)</b>.</p><p>Verificar se os dados do boletim de urna (disponibilizados em primeira mão no local de cada seção) correspondem aos dados divulgados pelo TSE é um dos mecanismos que as pessoas que votaram têm de<b>checar a integridade do processo eleitoral</b>.</p>"

            }
        ]

// lista[0].resposta -> assim consigo acessar o valor da propriedade resposta que está dentro do objetio que está na posição de índice 0 da lista

// lista[0]['resposta'] -> mesma coisa da notaçã anterior. A vantagem é que ela consegue pegar propriedadees com nome fora do padrão, como com espaço e com pontuação, com elementos que nao pode ter em nome de variável. 



//Cria a função "comecar". Na prática, ela carrega a questão da vez, faz desaparecer o botão "COMEÇAR", faz aparecer o desenho da urna eletrônica, faz o texto com as instuções do Quiz desaparecerem.  

        function comecar(){

            loadQuestion(0)
                //Manda rodar a função "loadQuestion", ela foi declarada mais abaixo no código. O parâmetro zero significa que vai rodar o primeiro objeto da lista "lista". 

            document.querySelector(".comecar").style.display = 'none'
                //Da minha página web, seleciono o elemento que tem a classe ".comecar". Ele corresponde ao botão "COMEÇAR" do QUIZ. Peço para o javascript deixar o display dele como "none", ou seja, peço para que ele não apareça mais. 
            document.querySelector(".urna").classList.remove("escondida")
                //Seleciono o elemento HTML que tem a classe ".urna", peço para que o javascript liste todas as classes dele e remova a chamada "escondida". Na prática, esse comando faz a urna aparecer na tela. 
            document.querySelector(".instrucoes").style.display = 
            'none'
                //Seleciono o elemento HTML que tem a classe ".instrucoes" e peço para que o javascript mexa no estilo dele, fazendo com que o display seja "none". Na prática, estou fazendo desaparecer as instruções do jogo  
        }


//Adiciona um monitorador de eventos no elemento HTML que possui a classe ".comecar". No caso, é o botão "QUERO JOGAR". O evento que será monitorado é o de "Click". Se ele ocorrer, a  função "comecar" - declarada acima - é rodada. 

        document.querySelector(".comecar").addEventListener('click', comecar)



//Cria um contator

        let perguntaAtual = 0



//Cria a função "loadQuestion". Ela é rodada dentro da função "comecar" - declarada acima. 

        function loadQuestion(n){
                //Função que seleciona trechos do HTML, preenche eles com conteúdo e esconde o botão "Próxima Pergunta". Ela recebe "n" como parâmetro. Isso permite que possa criar ou reduzir perguntas no meu quiz sem causar um erro em outras etapas do código.

            const elContexto = document.querySelector(".contexto")
            const elExplicacao = document.querySelector(".explicacao")
            const elComoVotar = document.querySelector(".comoVotar")
            const elResposta = document.querySelector(".resposta")
                //Cria variáveis que selecionam elementos HTML vazios, que terão seus conteúdos preenchidos dinamicamente. Todos eles são elementos do tipo "p". 
            

            elContexto.innerHTML = lista[n].contexto
            elExplicacao.innerHTML = lista[n].explicacao
            elComoVotar.innerHTML = lista[n].comoVotar
            elResposta.innerHTML = lista[n].resposta
                //Pega as variáveis criadas acima e as preenche com o conteúdo da array "lista". Só que para cada variável há um respectivo conteúdo. Por exemplo, na "elContexto" entrará o conteúdo "contexto".    

            document.querySelector(".proximaPergunta").style.display = "none"
                //Esconde o botão "Próxima Pergunta"
        }

//Cria variável "opcao". Ela não tem um valor (ainda).
        let opcao 



//Coloca monitorador de evento nos botões "votáveis" (nos números 1 e 2). Se o usuário clicar no elemento HTML que possui ID "#numero1" ou "#numero2", roda a função "selecionarResposta"

        document.querySelector('#numero1').addEventListener('click', selecionarResposta);
        document.querySelector('#numero2').addEventListener('click', selecionarResposta);        


//Cria função "selecionarResposta". Ela habilita uma opção e concomitantemente desabilita a outra. Se o usuário clicar em 1,o botão 1 fica marcado, se clicar em 2, o botão 2 fica marcado e o 1 desmarcado.   

        function selecionarResposta(event) { 

            somNumero.play()
                //Dá play na variável somNumero. Emite som toda vez que clica nos botões 1 ou 2. 

            if (event.target.id == "numero1") {
                //target é o elemento htlm que provocou o evento, representa o elmento que foi clicado. Desse elemento que foi clicado, quero checar o ID 
            opcao = true
                //O valor da variável "opcao" - declarada acima- será verdadeiro 
            document.querySelector('#numero2').classList.remove('clicado')
                //Retira do elemento que possui ID = "numero2" o estilo "clicado". Se usuário clicar no 1, quero que o botão 2 perca a classe "clicado". 
        }
            else  {
                //se a condição de cima não for realizada, ou seja, se ID for igual a "numero2"
            opcao = false
                //o valor da variável "opcao" é falso
            document.querySelector('#numero1').classList.remove('clicado')
                //retira o estilo clicado do elmento que tem a ID iagua a "numero1"
        }

            event.target.classList.add('clicado')
                //adiciona a classe "clicado" no target do evento (botão que foi clicado). Ou seja, deixa o botão que foi clicado com transparência.             
    }


//Cria função "checarResposta". Ela confere se a resposta que ta na array bate com a opção selecionada com o usuário. A depender da resposta, mostra um emoji sorridente ou um emoji triste. E independentemente da resposta mostra a div que tem a classe complemento, faz aparecer o botão "Próxima Pergunta", e checa se a quantidade de perguntas é do tamanho da pergunta atual, se for, desaparece com o botão "Próxima Pergunta".



        document.querySelector('#botaoVerde').addEventListener('click', checarResposta);
            //Coloca monitorador de evento no botão verde, se ele for clicado, roda a função "checarResposta"



        function checarResposta() {

            somConfirma.play()
                //Emite som quando clica no botão da urna "Confirma"

            let pergunta = lista[perguntaAtual]
                //é o elemento da lista que tem como índice "perguntaAtual" (é um contador, foi criado mais acima no código)

            if (pergunta.correta == opcao)
                //Se o valor "correta" for igual à variável "opcao"...
                //lembrar que correta é uma variável booliana criada dentro da array e "opcao" é uma variável booleana criada dentro da variável selecionarResposta.
                //Este trecho de código faz uma checagem, ve se as duas variáveis tem o mesmo valor (false e false ou true e true). 
            document.querySelector(".resultado").textContent = "😁 ACERTOU!"
                //se forem iguais, preenche o elemento HTML que tem a classe "resultado" com o conteúdo "emoji + acertou".
            else
            document.querySelector(".resultado").textContent = "😫 ERROU!"
                //Caso contrário, preenche o conteúdo com "emoji + errou".

            document.querySelector(".complemento").style.display = "initial"
                //Muda o display do elemento que tem classe "complemento" para inicial. Ou seja, mostra o resultado. 

            document.querySelector(".proximaPergunta").style.display = "initial"
            //Faz aparecer o botão "Próxima Pergunta"

            if (perguntaAtual == lista.length-1) {
                //pergunta atual é um contador. Se o valor dela for igual ao tamanho da variável lista - 1...
                //lembrar que "lista" é a array, cujo tamanho depende da quantidade de perguntas 
                //CHECA SE ESTOU NA ÚLTIMA NA PERGUNTA. 

                document.querySelector('.proximaPergunta').style.display = "none"
                // ... desapareça com o botão "Próxima Pergunta"

               }
        }



        document.querySelector('.proximaPergunta').addEventListener('click', avancar);
            //Coloca monitorador de evento no botão "Próxima Pergunta", se for clicado, roda a função "avancar"



//Cria a função "avancar". Ela remove as opacidades dos botões 1 ou 2, esconde a div com explicação da resposta, roda a função que carreda a próxima pergunta e 🚨[explicar o perguntaAtual++] 

        function avancar() {

            perguntaAtual++
                //Soma 1 na variável pergunta atual, para poder avançar para a p´roxima pergunta.
            document.querySelector(".complemento").style.display = "none" 
                //Esconde a div que tem a classe "complemento", ou seja, que tem a explicação da resposta.
            loadQuestion(perguntaAtual)   
                //Roda a função "loadQuestion", tem como parametro "perguntaAtual", que é um número. 

            document.querySelector('#numero1').classList.remove('clicado')
                //Remove a classe "clicado" do botão 1
            document.querySelector('#numero2').classList.remove('clicado')
                //Remove a classe "clicado" do botão 2

        }
