import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-livro-inserir',
    templateUrl: './livro-inserir.component.html',
    styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent {
    @Output() livroAdicionado = new EventEmitter

    id: string
    titulo: string
    autor: string
    pagina: string

    onAdicionarLivro() {
        const livro = {
            id: this.id,
            titulo: this.titulo,
            autor: this.autor,
            pagina: this.pagina
        }
        this.livroAdicionado.emit(livro)
    }
}
