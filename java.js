function MudaDesenho(){
            const texto = document.querySelector("h1");
            const imagem = document.querySelector("img");
            const valor = document.querySelector('#valor').value;
            const dia = document.querySelector('#dia').value;
            const mes = document.querySelector('#mes').value;      

            if(valor=="gemeos"){
                texto.innerHTML = "Saga";
                imagem.setAttribute("src","img/gemeos.png");
                imagem.setAttribute("width","500px");
            }

            else if(valor=="escorpiao"){
                texto.innerHTML = "Milo";
                imagem.setAttribute("src","img/escorpiao.png");
                imagem.setAttribute("width","500px");
            }
            
            else if(valor=="peixes"){
                texto.innerHTML = "Afrodite";
                imagem.setAttribute("src","img/peixes.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="touro"){
                texto.innerHTML = "Aldebaran";
                imagem.setAttribute("src","img/touro.png");
                imagem.setAttribute("width","500px");
            }
            else if(valor=="cancer"){
                texto.innerHTML = "Máscara da Morte";
                imagem.setAttribute("src","img/cancer.png");
                imagem.setAttribute("width","400px");
            }
            else if(valor=="leao"){
                texto.innerHTML = "Aiolia";
                imagem.setAttribute("src","img/leao.png");
                imagem.setAttribute("width","500px");
            }
            else if(valor=="virgem"){
                texto.innerHTML = "Shaka";
                imagem.setAttribute("src","img/virgem.png");
                imagem.setAttribute("width","600px");
            }
            else if(valor=="libra"){
                texto.innerHTML = "Dohko";
                imagem.setAttribute("src","img/libra.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="sagitario"){
                texto.innerHTML = "Aiolos";
                imagem.setAttribute("src","img/sagitario.png");
                imagem.setAttribute("width","400px");
            }
            else if(valor=="aries"){
                texto.innerHTML = "Mu";
                imagem.setAttribute("src","img/aries.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="capricornio"){
                texto.innerHTML = "El Cid";
                imagem.setAttribute("src","img/capricornio.png");
                imagem.setAttribute("width","500px");
            }
            else if((dia >= '21' && mes >= '01') && (dia <= '19' && mes <= '02')){
                texto.innerHTML = "Camus";
                imagem.setAttribute("src","img/aquario.png");
                imagem.setAttribute("width","300px");
            }
            else{
                texto.innerHTML = "Cavaleiro não encontrado... =(";
                imagem.setAttribute("src","img/x.webp");
                imagem.setAttribute("width","250px");
            }
        }
        function descobrirCDZ(){

            const texto = document.querySelector("h1");
            const data = document.querySelector('#data').value;
            
            // Para a comparação de datas, deve-se levar em consideração a sequência aceita no JS para datas: ANO/MÊS/DIA.
            // Dica: é possível concaternar informações em constantes utilizando o NOME_DA_CONSTANTE = CONST1 + CONST2.
            
            if ((dia >= '21' && mes >= '01') && (dia <= '19' && mes <= '02')) {
                texto.innerHTML = "cavaleiro de aquario";
            }
            else if ((dia >= '19' && mes >= '02') && (dia <= '20' && mes <= '03')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '21' && mes >= '03') && (dia <= '20' && mes <= '04')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '21' && mes >= '04') && (dia <= '20' && mes <= '05')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '21' && mes >= '05') && (dia <= '20' && mes <= '06')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '21' && mes >= '06') && (dia <= '22' && mes <= '07')) {
                texto.innerHTML = "Cavaleiro de peixes";
            } 
            else if ((dia >= '23' && mes >= '07') && (dia <= '22' && mes <= '08')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '23' && mes >= '08') && (dia <= '22' && mes <= '09')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '23' && mes >= '09') && (dia <= '22' && mes <= '10')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '23' && mes >= '10') && (dia <= '21' && mes <= '11')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '22' && mes >= '11') && (dia <= '21' && mes <= '12')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else if ((dia >= '22' && mes >= '12') && (dia <= '20' && mes <= '01')) {
                texto.innerHTML = "Cavaleiro de peixes";
            }
            else {
                texto.innerHTML = "Deu ruim... =(";
            }
         }
          