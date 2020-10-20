import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  livros = []

  onAdicionarLivro(livro) {
    this.livros = [...this.livros, livro]
  }
}
