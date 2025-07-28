import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MoviesCardComponent } from '../movies-card/movies-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MoviesCardComponent, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  @Input() title: string = 'Assista em seguida';

  @ViewChild('scrollContainer', {static: false}) scrollContainer!: ElementRef

  showLeftArrow = false
  showRightArrow = false

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth'});
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth'});
  }

  toggleArrows(show: boolean) {
    this.showLeftArrow = show
    this.showRightArrow = show
  }

  protected movies: Array<Movie> = [
    {
      name: 'Oppenheimer',
      length: 180,
      summary: 'O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.',
      image: 'https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg'
    },
    {
      name: 'Mad Max: Estrada da Fúria',
      length: 120,
      summary: 'Em um mundo pós-apocalíptico, Max se une à Imperatriz Furiosa para fugir de um tirano em uma perseguição alucinante pelo deserto.',
      image: 'https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
      name: 'Vingadores: Ultimato',
      length: 181,
      summary: 'Após os eventos devastadores de Guerra Infinita, os Vingadores restantes se unem para desfazer o estalo de Thanos e restaurar o equilíbrio do universo.',
      image: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1178_.jpg'
    },
    {
      name: 'Interestelar',
      length: 169,
      summary: 'Com a Terra morrendo, um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.',
      image: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg'
    },
    {
      name: 'John Wick 3: Parabellum',
      length: 131,
      summary: 'Caçado por uma recompensa milionária, o assassino John Wick luta contra uma legião de matadores enquanto busca por redenção.',
      image: 'https://m.media-amazon.com/images/M/MV5BYjdlNWFlZjEtM2U0NS00ZWU5LTk1M2EtZmQxNWFiZjk0MGM5XkEyXkFqcGc@._V1_.jpg'
    },
    {
      name: 'Jurassic Park',
      length: 127,
      summary: 'Um parque temático com dinossauros clonados se transforma em pesadelo quando as criaturas escapam do controle.',
      image: 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg'
    },
    {
      name: 'Batman O Cavaleiro das Trevas',
      length: 152,
      summary: 'Batman enfrenta o Coringa, um criminoso caótico que deseja mergulhar Gotham no caos absoluto.',
      image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg'
    },
    {
      name: 'Matrix',
      length: 136,
      summary: 'Um hacker descobre que a realidade que conhece é uma simulação e se junta à resistência contra as máquinas.',
      image: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg'
    },
    {
      name: 'Gladiador',
      length: 155,
      summary: 'Um general romano busca vingança após ser traído e ver sua família assassinada por um imperador corrupto.',
      image: 'https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg'
    },
    {
      name: 'Duna: Parte Um',
      length: 155,
      summary: 'O jovem Paul Atreides embarca em uma jornada épica em um planeta desértico vital para o futuro da humanidade.',
      image: 'https://m.media-amazon.com/images/M/MV5BM2I1ZDY2N2ItY2EwMC00MGQ3LWIwMzgtNTE0ZTMzN2Q2Yzc4XkEyXkFqcGc@._V1_.jpg'
    },
    {
      name: 'Godzilla vs. Kong',
      length: 113,
      summary: 'As duas criaturas titânicas se enfrentam em uma batalha épica enquanto a humanidade tenta descobrir a origem dos titãs.',
      image: 'https://m.media-amazon.com/images/M/MV5BZGE3N2QzZGYtODBjMS00YmNiLTg3Y2EtMTJlMGZlOTJlMTg1XkEyXkFqcGc@._V1_.jpg'
    },
    {
      name: 'The Batman',
      length: 153,
      summary: 'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.',
      image: 'https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    }
  ]
}


export type Movie = {
  name: string;
  length: number;
  summary: string;
  image: string;
}