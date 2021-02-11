const main = document.getElementById('main')
const cardHTML = `<h1 id="contador"></h1>`
main.innerHTML = cardHTML

document.ready = function(){

};
	setInterval(function(){
  	
    var _segundo = 1000;
    var _minuto = _segundo * 60;
    var _hora = _minuto * 60;
    var _dia = _hora * 24;
    
    var atual = new Date();
    var dataEvento = new Date('06/31/2020 00:01:00');
    
    var diferenca = atual - dataEvento;
    
    var dias = Math.floor(diferenca / _dia);
    var horas = Math.floor((diferenca % _dia) / _hora);
    var minutos = Math.floor((diferenca % _hora) / _minuto);
    var segundos = Math.floor((diferenca % _minuto) / _segundo);
    
    document.getElementById('contador').innerHTML = dias + ' Dias ' + horas + ' Horas ' + minutos + ' Minutos ' + segundos + ' Segundos ';
  	
  },1000);