'use strict';

let calculator = require('../index');

describe('Calculator', () => {
    let instance;

    beforeAll(() => {
        instance = new calculator();
    });

    it('should allow to call add() for instance of its class', () => {
        expect(instance.add).toBeDefined();
        expect(typeof instance.add).toBe('function');
    });

    it('should allow to call add() without any parameters sent and return result', () => {
        expect(instance.add()).toBe('No parameters sent. Nothing to calculate');
    });

    it('should allow to call add() with one parameter used and return it as result', () => {
        expect(instance.add(10)).toBe(10);
    });

    it('should allow to call add() with two parameters and return their sum', () => {
        expect(instance.add(5,-3)).toBe(2);
    });

    it('should allow to call add() with several parameters and return their sum', () => {
        expect(instance.add(5,-3, 10, 0, 123)).toBe(135);
    });

    it('should allow to call multiply() for instance of its class', () => {
        expect(instance.multiply).toBeDefined();
        expect(typeof instance.multiply).toBe('function');
    });

    it('should allow to call multiply() without any parameters sent and return result', () => {
        expect(instance.multiply()).toBe('No parameters sent. Nothing to calculate');
    });

    it('should allow to call multiply() with one parameter used and return it as result', () => {
        expect(instance.multiply(10)).toBe(10);
    });

    it('should allow to call multiply() with two parameters and return their multiply', () => {
        expect(instance.multiply(5,-3)).toBe(-15);
    });

    it('should allow to call multiply() with several parameters and return their multiply', () => {
        expect(instance.multiply(5,-3, 10, 2, 3)).toBe(-900);
    });
});