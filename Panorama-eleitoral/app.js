//Carrega os dados json no javascript

      fetch("./dados.json")  

      .then(response => {
         return response.json();
      })
      .then(jsondata => run(jsondata));



//Cria variáveis que selecionam trechos do meu HTML: 

      let seletorFaixa = document.querySelector('.faixaEtaria')
         // A variável "seletorFaixa" seleciona o elemento HTML que possui a classe ".faixaEtaria. No caso, é um elemento do tipo SELECT que possui dentro dele 9 elementos OPTION. Esta variável seleciona um elemento pai, o valor desse elemento pai varia de acordo com o atributo "value" do OPTION filho. Isso é uma particularidade do elemento SELECT. 
      let generos = document.querySelectorAll('input[name="genero"]')
         // A variável "generos" seleciona todos os elementos do tipo "input" que possuem o atributo "name" igual a "genero". No caso, ela está selecionando 3 elementos. 
      let grausDeInstrucao = document.querySelector('.instrucao')
      let estadosCivis = document.querySelector('.estadoCivil')
      let racas = document.querySelector('.raca')
         // As variáveis "grausDeInstrucao", "estadosCivis" e "racas" possuem o mesmo comportamento da variável "seletorFaixa".



//Cria uma função que reseta o valor dos campos preenchidos em cada um dos filtros.
   
      function limpar(){

         seletorFaixa.value = 'TODOS'
         grausDeInstrucao.value = 'TODOS'
         estadosCivis.value = 'TODOS'
         racas.value = 'TODOS'
            // Determina que o atributo "value" das variáveis "seletorFaixa", "grausDeInstrucao", "estadosCivis" e "racas" - declaradas no início do código - é igual a "TODOS". No HTML, o elemento do tipo OPTION que possui "value" igual a "TODOS" possui nada de conteúdo dentro, o que faz com que exista uma opção em branco no filtro. 


         for( let genero of generos) {  
            // 🚨 Crio a variável "genero". Ela só existe dentro do FOR. COMO LER: para cada "gênero" que houver dentro da minha variável "generos" (no caso, são 3: Feminino, Masculino e Outro) ...  
         genero.checked = false
            // ... o atributo checked será falso. 
         }
      
            //Por que fazer um FOR? Generos é uma lista de elementos. Como eu quero que os nenhum elemento esteja marcado, faço o FOR para passear por todas as tres opções.  
      }



//Manda rodar a função "limpar". 
      
      limpar()



//Cria um objeto de estado chamado "opcoes". Esse objeto possui as seguintes características: ano, genero, grauInstrucao, estadoCivil, raca. Nesse momento, o valor dessas carascterísticas é indefinido. 

      let opcoes = {      
         ano: undefined,
         genero: undefined,
         grauInstrucao: undefined,
         estadoCivil: undefined,            
         raca: undefined   
      } 

//Cria uma variável chamada "dados", que, por ora, tem valor indefinido.

      let dados = undefined // sintaxe equivalente: "let dados"



//Cria a função "extraiAno". Ela tem o parâmetro "data". Esse parâmetro é dinâmico, ou seja, ele não possui uma valor fixo. Ao observarmos o FOR que tem dentro da função que vem a seguir (RUN), fica mais compreensível o valor do parâmetro: data = row.DS_NASCIMENTO. Isso significa, que "data" são os valores da variável DS_NASCIMENTO da base dados. Cada linha dessa variável tem um valor diferente.

      function extraiAno(data){ 
         //data seria algo assim: "24/03/1937", ou seja, uma string do meu json.
      return +data.substr(6,4) 
         //🚨 "substr" é um método, o 6 a partir de qual carácter da string quero extrair e o 4 diz a quantidade de itens que deve compor a string.  
      } 



//Cria a função RUN. Ela evita que os dados em json desapareçam. Na realidade, os dados não desapareceriam, eles não seriam aproveitados. Só posso fazer um processamento de dados, se os dados ja tiverem carregados. Por isso, todo o código que para ser executado necessita dos dados carregados, tem que estar dentro da função RUN. 

      function run(jsondata) { 

         document.body.classList.remove( 'carregando' )
            //O comportamento padrão da minha página é ter transparência e estar com o cursor do mouse desabilitado. Nesse trecho de código eu removo esse estilo assim que a base de dados é carregada. COMO LER: Falo para o javascrip olhar toda a minha página web. De todo o conteúdo dela, peço para que ele considere o elemento "body".Adiciono a propriedade classlist, responsável por listar todas as classes do elemento "body". Adiciono o método "remove", com isso o javascript remove da lista de classes a que eu colocar entre os parênteses. No caso, a classe "carregando".  
         
        
         
            //Roda um FOR que executa uma série de tarefas. Em resumo: elimina o dia e o mês da variável DS_NASCIMENTO, com isso a base de dados fica só com a informação do ano. Com a informação do ano "em mãos" cria faixa etárias. Por fim, cria na base de dados a variável "faixaIdade".

         for(row of jsondata){ 
               //COMO LER: "Para cada linha da minha base de dados, quero..."
            let idade = 2022 - (extraiAno(row.DT_NASCIMENTO))
               ///Cria a variável idade. A variável idade é a subtração do ano atual,2022, com o ano de nascimento do candidato em questão. O ano de nascimento de cada candidato foi obtido por meio da função "extraiAno". O código entre parenteses roda a função "extraiAno" e dá como parâmetro a coluna DT_NASCIMENTO do meu Json.
            
            let faixaIdade
               // Cria a variável faixaIdade, o valor dela muda de acordo com o IF
            if (idade > 18 && idade < 31) faixaIdade = "De 18 a 30 anos"
               //Se a variável idade - declarada acima -, ou seja, se a subtração for maior que 18 e menor que 31, o valor de faixaIdade será igual à string "De 18 a 30 anos". 
            if (idade >= 31 && idade <= 40) faixaIdade = "De 31 a 40 anos"
            if (idade >= 41 && idade <= 50) faixaIdade = "De 41 a 50 anos"
            if (idade >= 51 && idade <= 60) faixaIdade = "De 51 a 60 anos"
            if (idade >= 61 && idade <= 70) faixaIdade = "De 61 a 70 anos"
            if (idade >= 71 && idade <= 80) faixaIdade = "De 71 a 80 anos"
            if (idade >= 81 && idade <= 90) faixaIdade = "De 81 a 90 anos"
            if (idade > 90) faixaIdade = "Mais de 90 anos"

            row["faixaIdade"] = faixaIdade 
               //Cria a coluna "faixaIdade" no banco de dados
               //As variáveis "idade" e "faixaIdade só existem dentro do FOR". Elas estão dentro do ESCOPO do FOR.
         }

         

         dados = jsondata

            //Define que o valor da variável "dados" - declarada lá em cima como "undefined" - é igual à minha base de dados.
            //O escopo é o contexto que meu código está. O ESCOPO da miha base de dados é a função RUN. "DADOS" é uma variável global. Ao atribuir a ela o valor de "jsondata", eu consigo ter acesso aos dados fora da função RUN. 

        
         
         seletorFaixa.addEventListener("change", atualizarOpcoes)
         grausDeInstrucao.addEventListener('change', atualizarOpcoes)
         estadosCivis.addEventListener('change', atualizarOpcoes)
         racas.addEventListener('change', atualizarOpcoes)
            
            //Adiciona às variáveis "seletorFaixa", "grausDeInstrucao", "estadosCivis" e "racas" - declaradas no início do código e responsáveis por selecionar elementos específicos do HTML - um método para escutar eventos. Pede para que o javascript fique atento ao evento "change", se ele ocorrer, roda a função atualizarOpcoes.

         for (let genero of generos){
            //"Eu tenho uma lista de elementos inputs, para cada um desses inputs vou adicionar um monitorador de evento 
            genero.addEventListener('change', atualizarOpcoes)
            //"... fiquei atento ao evento de "change", se ele ocorrer, rode a função "atualizaOpcoes"."   
         }
            //Para o filtro sobre o gênero das pessoas candidatas é necessário fazer um FOR, porque a variável que seleciona o elemento pega cada um dos elementos filhos, ou seja, cada uma das opções de resposta para gênero (feminino, masculino ou outro). Se colocasse "generos" ia dar erro, porque generos não reprsenta um elemnto HTML, ele é uma lista de elementos HTML.   
         
      }



//Cria a função atualizarOpcoes. Nesse momento, entre em cena o objeto de estado "opcoes" criado lá em cima. Nessa função, as características dele que estavam como indefinidas, passam a ter um valor, esse valor muda de acordo com a opção selecionada pelo usuário. 

      function atualizarOpcoes() {
 
         opcoes.ano = seletorFaixa.value
            //"... atribua à característica "ano" do objeto "opcoes" - até então, com o valor indefinido - o valor do atributo "value" do OPTION selecionado pelo usuário no filtro "Faixa de idade". 
         opcoes.estadoCivil = estadosCivis.value
         opcoes.raca = racas.value       
         opcoes.grauInstrucao = grausDeInstrucao.value
         
         /* OUTRA FORMA DE FAZER A MESMA COISA:
   
         for (let grauInstrucao of grausDeInstrucao) {           
            if (grauInstrucao.selected){
               opcoes.grauInstrucao = grauInstrucao.value
            }
         } */

         for (let genero of generos){
            if (genero.checked) {    
                  //Vê se o input de "radio" está selecionado
               opcoes.genero = genero.value 
                  //Se estiver marcado, guarda no objeto de estado o gênero selecionado. 
               }
            }

         filtrar() 
      }



//Cria a função "filtrar"

      function filtrar() { 

         let contador = 0
            //Cria a variável "contador". Ela tem valor igual a zero. 
         
         for (let candidato of dados){   
            //"Para cada candidato da minha base de dados..."

            let condicaoFaixa, condicaoGenero, condicaoInstrucao, condicaoCivil, condicaoRaca
               //Cria variáveis. Elas só existem dentro do escopo da função "filtrar"


            if (opcoes.ano == "TODOS")
               //Se o valor da característica "ano" do objeto "opcoes" for igual a "TODOS", ou seja, se o usuário não escolheu uma opção. 
               condicaoFaixa = true
               //O valor da variável condicaoFaixa - declarada no início da função - será verdadeiro, ou seja, a condição de faixa etária é ignorada.   
            else 
               condicaoFaixa = opcoes.ano == candidato.faixaIdade
               //Se não, ou seja, se tiver um valor de faixa etária selecionado, eu quero que a condicaoFaixa cheque se a faixa etária que a pessoa selecionou bate com a do candidato. O que está depois do sinal de igual (opcoes.ano == candidato.faixaIdade) corresponde a uma checagem. Lembrando que "faixaIdade" é a coluna que eu criei dinamicamente na minha base de dados. 



            if (opcoes.genero == undefined)
               condicaoGenero = true
            else
               condicaoGenero = opcoes.genero == candidato.DS_GENERO
            

            if (opcoes.grauInstrucao == "TODOS")
               condicaoInstrucao = true
            else 
               condicaoInstrucao = opcoes.grauInstrucao == candidato.DS_GRAU_INSTRUCAO
            

            if (opcoes.estadoCivil == "TODOS")
               condicaoCivil = true
            else 
               condicaoCivil = opcoes.estadoCivil == candidato.DS_ESTADO_CIVIL


            if (opcoes.raca == "TODOS")
               condicaoRaca = true
            else
               condicaoRaca = opcoes.raca == candidato.DS_COR_RACA

            

            if (condicaoFaixa && condicaoGenero && condicaoInstrucao && condicaoCivil && condicaoRaca)   {  
               //Verifica se a informação do json está batendo com a informação que foi armazenada.
            contador++         
               //Se as infos baterem, soma 1
            }
         
         }
      
         mostrar(contador)
         
      }



//Cria a função "mostrar"
            
      function mostrar(contador) {
         
      document.querySelector('.contagem').textContent = contador
      document.querySelector('.porcentagem').textContent = ((contador * 100) / dados.length).toFixed(3)+"%"  
      }

