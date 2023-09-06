import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: string[];
  isXTurn: boolean;
  winner: string | null;

  ngOnInit(): void {
    this.newGame();
  }


  newGame () {
    this.squares = Array(9).fill(null);
    this.isXTurn = true;
  }

  get player (): string {
    return this.isXTurn?"X":"O";
  }

  onPlay (boxId:number) {
    if ( !this.squares[boxId] ) {
      this.squares[boxId] = this.player;
      this.isXTurn = !this.isXTurn
    }

    this.winner = this.checkWinner();
  }


  checkWinner (): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for ( const line of lines ) {
      const [ a, b, c ] = line;

      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[b] === this.squares[c]
      ) return this.squares[a]

    }

    return null;

  }


}
