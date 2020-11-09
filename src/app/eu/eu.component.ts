import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  nome: string = "Yairina Boada";
  idade: string = "24";
  gosto: string = "Musica, hamburguer e assistir filmes";
  cidade: string = "Tucupita (Venezuela), Atualmente estou morando no Rio de Janeiro";
  img: string = "./assets/IMG_03.jpg"
  
  constructor() { }

  ngOnInit(): void {
  }

}
