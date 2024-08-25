var btn_criptografar = document.querySelector(".botao_criptografar");
var btn_descriptografar = document.querySelector(".botao_descriptografar");
var conteudo_saida_img = document.querySelector(".img_menina_com_lupa");
var conteudo_saida_texto_h2 = document.querySelector(".conteudo_saida_texto_h2");
var conteudo_saida_texto_p = document.querySelector(".conteudo_saida_texto_p");
var resultado = document.querySelector(".texto_resultado");
var btn_copiar = document.querySelector(".btn_copiar");


function criptografar() {
   ocultar_img_textos();
   resultado.textContent = criptografar_texto(capturar_texto());
   limpar_textarea();
}

function descriptografar() {
    ocultar_img_textos();
    resultado.textContent = descriptografar_texto(capturar_texto());
    limpar_textarea();
    
 }

function capturar_texto () {
    var text_area = document.querySelector(".conteudo_entrada_texto");
    return text_area.value;
}

function ocultar_img_textos() {
    conteudo_saida_img.classList.add("ocultar");
    conteudo_saida_texto_h2.classList.add("ocultar");
    conteudo_saida_texto_p.classList.add("ocultar");
    
}

function limpar_textarea() {
   var text_area = document.querySelector(".conteudo_entrada_texto");
   text_area.value = "";
}

function criptografar_texto(mensagem){
    var texto = mensagem;
    var texto_final = "";

    for(var i = 0; i < texto.length; i ++){
         if(texto[i] == "a") {
            texto_final = texto_final + "ai"
         }
         else if(texto[i] == "e") {
            texto_final = texto_final + "enter"
         }
         else if(texto[i] == "i") {
            texto_final = texto_final + "imes"
         }
         else if(texto[i] == "o") {
            texto_final = texto_final + "ober"
         }
         else if(texto[i] == "u") {
            texto_final = texto_final + "ufat"
         }
         else{
            texto_final = texto_final + texto[i];
         }

    }
    
    return texto_final;
}

function descriptografar_texto(mensagem){
    var texto = mensagem;
    var texto_final = "";

    for(var i = 0; i < texto.length; i ++){
         if(texto[i] == "a") {
            texto_final = texto_final + "a"
            i = i + 1;
         }
         else if(texto[i] == "e") {
            texto_final = texto_final + "e"
            i = i + 4;
         }
         else if(texto[i] == "i") {
            texto_final = texto_final + "i"
            i = i + 3;
         }
         else if(texto[i] == "o") {
            texto_final = texto_final + "o"
            i = i + 3;
         }
         else if(texto[i] == "u") {
            texto_final = texto_final + "u"
            i = i + 3;
         }
         else{
            texto_final = texto_final + texto[i];
         }

    }
    
    return texto_final;
}

function copiar() {
    var texto_para_copiar = resultado.textContent;
    navigator.clipboard.writeText(texto_para_copiar).then(function() {
        alert("Texto copiado para a área de transferência!");
    }, function(err) {
        console.error("Erro ao copiar o texto: ", err);
    });
}

btn_criptografar.onclick = criptografar;

btn_descriptografar.onclick = descriptografar;

btn_copiar.onclick = copiar;





