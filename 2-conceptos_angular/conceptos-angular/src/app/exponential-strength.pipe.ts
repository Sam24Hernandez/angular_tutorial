import { Pipe, PipeTransform } from '@angular/core';
/*
 * Aumentar el valor de forma exponencial
 * Toma un argumento de exponente que por defecto es 1.
 * Uso:
 * valor | exponencialFuerza:exponente
 * Ejemplo:
 * {{ 2 | exponentialStrength:10 }}
 * formatos para: 1024
*/
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
