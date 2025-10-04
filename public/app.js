let receitas = [
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

function carregaReceitas() {
  let container = document.querySelector(".receitas");
  let strTextoHTML = "";

  for (let i = 0; i < receitas.length; i++) {
    let item = receitas[i];

     strTextoHTML += `
      <article class="d-flex mb-3">
        <a href="detalhes.html?id=${item.id}" style="text-decoration: none; color: inherit;">
        <img src="${item.imagem}" alt="${item.titulo}" 
             class="me-3 rounded" style="width: 120px; height: auto;">
      </a>
        <div>
          <h4 class="fw-bold text-success mb-1">${item.titulo}</h4>
          <p style="color: #f4b400;">${item.descricao}</p>
          <a href="detalhes.html?id=${item.id}" class="btn btn-sm btn-outline-success">Ver Receita Completa</a>
        </div>
      </article>
    `;
  }
  container.innerHTML = strTextoHTML;
}

window.onload = carregaReceitas;


function carregaDetalhes() {
    let parametros = new URLSearchParams(window.location.search);
    let id = parametros.get("id");

    let receita = receitas.find(item => item.id === parseInt(id));

      let container = document.querySelector(".detalhes");

    container.innerHTML = `
    <h2 class="fw-bold text-success mb-3">${receita.titulo}</h2>
    <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid rounded mb-3" style="max-width: 500px;">
    <p class="text-muted">${receita.data} • Categoria: ${receita.categoria}</p>
    <p class="lead">${receita.descricao}</p>
    <hr>
    <p>${receita.conteudo}</p>
    <a href="index.html" class="btn btn-success mt-4">Voltar para a Home</a>
  `;
}
window.onload = function () {
  if (document.querySelector(".receitas")) {
    carregaReceitas();
  } else if (document.querySelector(".detalhes")) {
    carregaDetalhes();
  }
};