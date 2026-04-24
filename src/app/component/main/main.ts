import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  name = "Vale";
  mostrarConteudo = true;
  mensagem = "";

  submit(){
    this.mensagem = "Carregando dados. do cliente";
  }
  submit2(){
    this.mensagem = "";
  }
}
