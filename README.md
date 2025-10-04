[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20725504&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Samira Vitoria da Silva Fraga
- Matricula: 1629044
- Proposta de projeto escolhida: Culinária
- Breve descrição sobre seu projeto: Projeto que oferece receitas práticas e rápidas para o dia a dia, ajudando pessoas a cozinhar de forma saudável e saborosa, mesmo com pouco tempo.

## Print da Home-Page

![Home-Page](/public/img/home-pg-1.png)
![Home-Page](/public/img/home-pg-2.png)

## Print da página de detalhes do item

![Detalhes-item](/public/img/cenouraDetalhes1.png)
![Detalhes-item](/public/img/cenouraDetalhes2.png)
![Detalhes-item](/public/img/bananaDetalhes.png)
![Detalhes-item](/public/img/maracujaDetalhes.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
     "id": 1,
        "titulo": "Bolo de Cenoura",
        "descricao": "Incrível bolo de cenoura, super prático para os cafés da manhã!",
         conteudo: 
        "Ingredientes:\n" +
        "- 2 xícaras de cenoura (aproximadamente 2 unidades)\n" +
        "- 4 ovos\n" +
        "- 1 xícara de óleo\n" +
        "- 1 e 1/2 xícaras de açúcar(se gostar mais doce, coloque 2)\n" +
        "- 2 xícaras de farinha\n" +
        "- 1 colher de fermento\n\n" +

        "Cobertura:\n" +
        "200g de chocolate (meio amargo)\n" +
        "1 caixinha de creme de leite\n" +

        "Modo de preparo:\n" +
        "1. Bata no liquidificador a cenoura, ovos, óleo e açúcar por 5 minutos.\n" +
        "2. Misture farinha e misture mais um pouco.\n" +
        "3. Adicione o fermento e misture delicadamente.\n" +
        "4. Leve ao forno pré-aquecido a 200°C por aproximadamente 30/40min.\n" +
        "5. Finalize com cobertura de chocolate.\n" +


        "Cobertura:\n" +
        "Junte os ingredientes e leve ao microondas de 30 em 30 segundos até derreter (ou banho maria).\n",

        "categoria": "Doces",
        "data": "2025-10-01",
        "imagem": "/public/img/cenouraa.jpeg"
    },

    {
        "id": 2,
        "titulo": "Bolo de Banana",
        "descricao": "Prático para comer no dia a dia (fácil e saudável).",
        "conteudo": 
        "Ingredientes:\n" +
        "- 1/2 banana.\n" +
        "- 1 ovo.\n" +
        "- 2 colheres de sopa de farinha de aveia.\n" +

        "Modo de preparo:\n" +
        "1. Amasse a banana.\n" +
        "2. Adicione o ovo e misture muito bem.\n" +
        "3. Adicione 2 colheres sopa de farinha de aveia.\n" +
        "4. Coloque uma pitada de canela(a gosto) e um fio de mel para adoçar.\n" +
        "5. Misture tudo e finalize com uma pitada de fermento.\n" +
        "6. Leve ao micro-ondas por 2 minutos.\n" +


        "Cobertura:\n" +
        "Se preferir - adicione mel, canela e use a outra metade da banana em cima.\n",
        "categoria": "Doces",
        "data": "2025-03-29",
        "imagem": "/public/img/boloBanana.webp"
    },

    {
        "id": 3,
        "titulo": "Mousse de Maracujá",
        "descricao": "Muito gostoso para sobremesas refrescantes no verão.",
        "conteudo": 
        "Ingredientes:\n" +
        "- 1 lata de leite condensado.\n" +
        "- 1 lata de creme de leite.\n" +
        "- 1 lata de suco de maracujá(medida pela lata de leite condensado).\n" +

        "Modo de preparo:\n" +
        "1. Bata no liquidificador o as latas de creme de leite e leite condesado e o suco concentrado de maracujá.\n" +
        "2. Em uma tigela, despeje a mistura e leve à geladeira por, no mínimo, 4 horas.\n" +

        "Cobertura:\n" +
        "Pode colocar as sementes do maracujá ou se preferir faça uma ganache com barra de chocolate derretido e coloque por cima.\n",
        "categoria": "Sobremesas",
        "data": "2025-03-28",
        "imagem": "/public/img/mousse-maracuja.jpg"
  }
]
```