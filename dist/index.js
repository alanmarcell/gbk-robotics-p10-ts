'use strict';

var _johnnyFive = require('johnny-five');

var _johnnyFive2 = _interopRequireDefault(_johnnyFive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instanciamos uma placa, que neste caso 
// será a do Arduino que se comunicará com o computador 
var board = new _johnnyFive2.default.Board();
// O evento de ready é disparado quando a comunicação 
// é estabelecida entre o processo Node.js e o Arduino 
// Como o johnny five é um módulo Node.js, 
// ele é carregado como qualquer outro
board.on('ready', function () {
    var led = new _johnnyFive2.default.Led(13);
    var temperature = new _johnnyFive2.default.Temperature({
        pin: 0,
        controller: 'ANALOG',
        toCelsius: function toCelsius(raw) {
            return raw / 20.2325581395;
        }
    });
    temperature.on('data', function (data) {
        console.log('===>', data);
        if (data.C > 30) {
            led.on();
        } else {
            led.off();
        }
    });
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map