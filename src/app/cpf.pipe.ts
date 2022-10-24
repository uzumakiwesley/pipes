import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
    transform(value: string): string {
        let numeroCpf = value ;

      
                                 
           
            

        return numeroCpf;
    }
}