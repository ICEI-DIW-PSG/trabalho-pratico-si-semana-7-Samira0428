let receitas = [
    {
        "id": 1,
        "titulo": "Bolo de Cenoura",
        "descricao": "Incrível bolo de cenoura, super prático para os cafés da manhã!",
        "conteudo": "Ingredientes: 2 cenouras, 3 ovos, 1 xícara de óleo, 2 xícaras de açúcar, 2 xícaras de farinha, 1 colher de fermento. Modo de preparo: Bata no liquidificador a cenoura, ovos e óleo. Misture o açúcar, farinha e fermento. Asse por 40 minutos a 180°C. Cobertura de chocolate para finalizar.",
        "categoria": "Doces",
        "data": "2025-03-30",
        "imagem": "/public/img/cenouraa.jpeg"
    },

    {
        "id": 2,
        "titulo": "Bolo de Banana",
        "descricao": "Prático para comer no dia a dia (fácil e saudável).",
        "conteudo": "Ingredientes: 3 bananas maduras, 2 ovos, 1/2 xícara de óleo, 1 xícara de açúcar mascavo, 2 xícaras de farinha integral, 1 colher de fermento. Modo de preparo: Amasse as bananas, misture com ovos e óleo. Adicione açúcar, farinha e fermento. Asse por 35 minutos a 180°C. Sirva com canela por cima.",
        "categoria": "Doces",
        "data": "2025-03-29",
        "imagem": "/public/img/boloBanana.webp"
    },

    {
        "id": 3,
        "titulo": "Mousse de Maracujá",
        "descricao": "Muito gostoso para sobremesas refrescantes no verão.",
        "conteudo": "Ingredientes: 1 lata de leite condensado, 1 lata de creme de leite, suco de 3 maracujás, 1 caixinha de gelatina incolor. Modo de preparo: Bata no liquidificador o leite condensado, creme de leite e suco de maracujá. Dissolva a gelatina na água quente e misture. Leve à geladeira por 4 horas. Decore com polpa de maracujá.",
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
        <a href="receita.html?id=${item.id}" style="text-decoration: none; color: inherit;">
        <img src="${item.imagem}" alt="${item.titulo}" 
             class="me-3 rounded" style="width: 120px; height: auto;">
      </a>
        <div>
          <h4 class="fw-bold text-success mb-1">${item.titulo}</h4>
          <p style="color: #f4b400;">${item.descricao}</p>
          <a href="receita.html?id=${item.id}" class="btn btn-sm btn-outline-success">Ver Receita Completa</a>
        </div>
      </article>
    `;
  }
  container.innerHTML = strTextoHTML;
}

window.onload = carregaReceitas;
