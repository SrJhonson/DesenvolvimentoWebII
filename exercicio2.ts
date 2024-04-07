namespace exercicio2 {
    //Crie um Array com 4 objetos, cada um representa um livro com as propiedades
    // TITULO, AUTOR, E ANO, Em seguida use o método map()
    // para criar um array(string) contendo apenas os titulos


    type livro = {
        titulo: string,
        autor: string,
        ano: number
    }

    let livros: livro[];

    livros = [{
        titulo: "HarryPotter",
        autor: "JK",
        ano: 1998
    },
    {
        titulo: "Diario de um banana",
        autor: "Jeff Kinney",
        ano: 2007
    },
    {
        titulo: "O Menino do Pijama Listrado",
        autor: "John Boyne",
        ano: 2006
    },
    {
        titulo: "O Senhor dos Anéis",
        autor: "J. R. R. Tolkien",
        ano: 1949
    }]

    let tituloLivros: string[]

    tituloLivros = livros.map(function (livro: livro) {
        return livro.titulo;
    })

    tituloLivros = livros.map((livro:livro)=>{
        return livro.titulo
    })
    
    console.log(tituloLivros);

}