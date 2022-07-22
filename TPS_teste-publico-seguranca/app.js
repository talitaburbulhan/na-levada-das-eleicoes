function escutaRolagem(){

    let gatilhos = document.querySelectorAll('.gatilhos > div[data-alvo]'); //Cria a variável "gatilhos", nela fica armazenada todos os elementos "div[data-alvo]" que sejam filhos do elemento com classe "gatilhos"
    
    for(let gatilho of gatilhos){   //COMO LER: "Para cada 'gatilho' que está dentro da lista de gatilhos que eu criei acima, faça o que estiver descrito a seguir:" 

        let posicao = gatilho.getBoundingClientRect(); //Cria a variável "posicao" e armazena dentro dela o retângulo que fica em volta do elemento gatilho. Com isso, eu vou conseguir saber algumas propriedades dele como altura e a largura, assim como a posição X e a posição Y. A propriedade que nos interessa é a TOP.  

        let alvo = gatilho.dataset.alvo; //Cria a variável "alvo", dentro dela armazeno a propiedade "alvo" dos elementos gatilho.
        
        let passo = document.querySelector('.'+alvo); //Cria a variável "passo" e armazena dentro dela as divs que tenham uma classe com o mesmo nome dos alvos, por exemplo, .passo-0 (o + é a junção de duas strings) 
        
        if(posicao.top <= 0 && posicao.top > -  posicao.height) { //Coloca duas condições que verificam se o gatilho está acima do topo da página. A condição 1 é que o TOP do elemento gatilho tem que ser menor ou igual a zero. A segunda condição é que o TOP do gatilho tem que ser maior que a altura negativa do elemento gatilho.

            passo.classList.add('passo-ativo'); //Se a condição acima for verdadeira, o javascript deve adicionar a classe "passo-ativo" no elemento "passo", ela faz com que o gráfico seja exibido. 

        }else{  //Se o IF não for verdade, peço para que o javascript remova a classe "passo-ativo" da lista de classes do elemento "passo". 
            passo.classList.remove('passo-ativo');       

        }
    

    }

}    

window.addEventListener('scroll', escutaRolagem); //Aqui peço para que o javascript fique atento à evento de "scrolar" a tela. Caso ele identifique que o usuário fez um scroll, peço para que o javascript execute a função "escutaRolagem".
