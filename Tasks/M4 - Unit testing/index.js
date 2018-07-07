'use strict';

class calculator {
    add() {
        if (arguments.length === 0) {
            return 'No parameters sent. Nothing to calculate';
        }
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }

    multiply() {
        if (arguments.length === 0) {
            return 'No parameters sent. Nothing to calculate';
        }
        var result = 1;
        for (var i = 0; i < arguments.length; i++) {
            result *= arguments[i];
        }
        return result;
    }
}

module.exports = calculator;