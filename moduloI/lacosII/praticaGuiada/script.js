/* Utilizando o array de filmes que está no template, complete os exercícios abaixo:

Crie um laço for para exibir o título, o ano e a pessoa diretora dos filmes como uma string:
Exemplo de saída: “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
b. Crie um laço for dentro do primeiro, para concatenar o elenco numa string:
	Exemplo de saída:
“O Homem que copiava, de 2003, dirigido por Jorge Furtado”
“Ator/Atriz 1: Lázaro Ramos"
"Ator/Atriz 2: Leandra Leal"
"Ator/Atriz 3: Pedro Cardoso” */

console.log(movies);
for(let i = 0; i < movies.length; i++) {
    console.log(`${movies[i].title} de ${movies[i].year}`);
}
