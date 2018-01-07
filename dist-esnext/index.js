// Como o johnny five é um módulo Node.js, 
// ele é carregado como qualquer outro
import five from 'johnny-five';
// Instanciamos uma placa, que neste caso 
// será a do Arduino que se comunicará com o computador 
var board = new five.Board();
// O evento de ready é disparado quando a comunicação 
// é estabelecida entre o processo Node.js e o Arduino 
board.on('ready', function () {
    var led = new five.Led(13);
    var temperature = new five.Temperature({
        pin: 0,
        controller: 'ANALOG',
        toCelsius: raw => raw / 20.2325581395,
    });
    temperature.on('data', (data) => {
        console.log('===>', data);
        if (data.C > 30) {
            led.on();
        }
        else {
            led.off();
        }
    });
});
//# sourceMappingURL=index.js.map