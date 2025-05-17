//Função: Define uma lista de ações que serão executadas quando a função for chamada. Palavra reservada para criar uma função em Java Function. 
    function insert(num){//Início da função.
    //Variável é um espaço na memória que armazena uma informação para uso posterior. Ao nomeá-la evite: Nºs e letras maiúsculas no início, espaço entre palavras (use_ ou camelCase) e acentução. Vale lembrar que segundo o tratado do camelCase, toda ver que formos nomear uma váriavel, a primeira palavra será composta apenas por letras minusculas, enquanto a subsequente será com letra maiscula, vide exemplo: numeroQuatro.
    //Captura o conteúdo atual exibido no elemento com id 'resultado' e armazena na variável 'número' 
    var numero = document.getElementById('resultado').innerHTML 
    //Atualiza o conteúdo do elemento 'resultado' concatenando o valor atual com o nº ou operador (+,-,/-,*) passando no parâmetro num. 
    document.getElementById('resultado').innerHTML = numero + num
}//Fim da função.
//Função para limpar todo o conteúdo que aparece no visor (tag p [id=resultado]) 
function clean(){
    //Define que o conteúdo do elemento 'resultado' como um elemento de texto vazio, limpando a tela
    document.getElementById('resultado').innerHTML = "";
}
//Função para apagar o último caracter digitado
function del(){
    //Variável para armazenar a informação do visor (tag p) 
    var resultado = document.getElementById('resultado').innerHTML;
    //Usa o método substring para remover o último caracter digitado na tela, atualizando o valor. O metódo length retornará o tamanho da string, ou seja, quantos elementos aparecem na tela. 
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);
}
//Função 'calcular' irá avaliar a expressão da tela e realizar o calculo exibindo-o na tela
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    //Use a função eval() para avaliar a expressão matemática e retornar o resultado da operação 
    if(resultado){
      document.getElementById('resultado').innerHTML=eval(resultado);  
    }//Senão, caso não haja nenhum conteúdo no visor 
    else{
        //Exiba uma mensagem de Erro
    document.getElementById('resultado').innerHTML= 'ERROR';
    } 
}
document.addEventListener('keydown', 
    function(event){
       //'Salva' a tecla pressionada
       var tecla = event.key 
       if(/[0-9+\-*/.]/.test(tecla)){
        insert(tecla);//Chama a função calcular
       }
       //Verifica se a tecla pressionada é o Backspace
       else if(tecla == 'Enter'){
        calcular();//Chama a função calcular
       }
       else if(tecla == 'Backspace'){
        del();//Chama a função del — Apaga o último caracter
       }  
       else if(tecla == 'Delete'){
        clean();//Chama a função clean - Apagando todo o conteúdo do visor
       }
    }
    )