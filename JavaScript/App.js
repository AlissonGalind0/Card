function downloadImagem() {
    const imagem = document.querySelector("#imagem");
    const url = imagem.src;

   
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Card Melhoria.png'; 
  
    document.body.appendChild(link);
    link.click();

    
    document.body.removeChild(link);
  }

  
  // const botaoDownload = document.getElementById('download');

  // botaoDownload.addEventListener('click', downloadImagem);


  function limparTexto (){
  
}

function inserirNovo (){
  
  const btnConcluido = document.querySelector("#button-addon2")
  const btnNExecutado = document.querySelector("#button-addon3")
  const btnEmAndamento = document.querySelector("#button-addon4")


}