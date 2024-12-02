const btnMensagem = document.getElementById("btnMensagem");
var contador=0;
btnMensagem.addEventListener('click', opcoesSetembro);

function opcoesSetembro()
{
    console.log ('vou escrever uma mensagem no <body>');
}

setInterval(function ()
{

//document.getElementById('fraseMotivacional').innerText=frases[contador]

if(contador>12){
contador=0
}

contador+=1;

function typeWritter(texto,idElemento,tempo){
  var mensagem = texto.split('').reverse();
  document.getElementById('fraseMotivacional').innerHTML='<span style="opacity:0">.</span>';
  
  var digitador = setInterval(function () {
      if (!mensagem.length) return clearInterval(digitador);
      var proximaLetra = mensagem.pop();
      document.getElementById(idElemento).innerHTML += proximaLetra;
  }, tempo);
}
typeWritter(frases[contador],'fraseMotivacional',70);

},10000);

var frases= [
  'A vida é preciosa e cada dia é uma nova oportunidade para recomeçar.',
  'Você não está sozinho, sempre há alguém disposto a ouvir e ajudar.',
  'As tempestades da vida são temporárias, mantenha a esperança acesa.',
  'Seus sentimentos são válidos. Não tenha medo de espressá-los.',
  'Cada pequeno passo conta, celebre suas vitórias por menor que sejam.',
  'A escuridão pode ser profunda, mas sempre há uma luz esperando para brilhar.',
  'Falar sobre seus problemas é um sinal de força, não de fraqueza.',
  'Acredite em você e na sua capacidade de superar desafios.',
  'A vida é um presente, cuide dela com carinho e atenção.',
  'Seu sorriso pode ser a luz na vida de alguém, espalhe positividade!',
  'Lembre-se: pedir ajuda é um ato de coragem e não de fraqueza.',
  'Conecte-se com quem ama, relacionamentos saudáveis são fundamentais para o bem-estar.',
  'O amanha pode ser melhor, mantenha a fé e a esperança em seu coração.',
  'Você é importante, e sua história merece ser contada.'
]