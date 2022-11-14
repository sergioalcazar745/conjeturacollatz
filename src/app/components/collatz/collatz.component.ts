import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public lista: Array<number>
  public num!: number;

  constructor(private _activeRouted: ActivatedRoute) {
    this.lista = new Array<number>();
  }

  ngOnInit(): void {
    this._activeRouted.params.subscribe((params: Params) => {
      this.metodocollatz(parseInt(params['numero']))
    });
  }

  metodocollatz(num:number){
    this.lista.splice(0)
    var resultado = num
    while (true) {
      if(resultado % 2 == 0){
        resultado = resultado / 2;        
        if(resultado == 1){
          this.lista.push(resultado)
          break;
        }else{
          this.lista.push(resultado)
        }        
      }else{
        resultado = (resultado * 3) + 1 
        this.lista.push(resultado)
      }      
    }
  }
}
