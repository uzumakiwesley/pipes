import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimento'
})
export class ComprimentoPipe implements PipeTransform {
  /**
   * pegar um array qualquer e retornar a quantidade de elementos 
   * dentro dele
   * 
   * value: parâmetro responsável por pegar o valor que será transformado
   *
   *  caso queira passar outros parâmetros é possível 
   */

  transform(value: any[]): number {
    return value.length;
  }

}
