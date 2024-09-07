function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
   
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhuma equipe foi encontrada. Você não digitou a sua busca</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let nomeEquipe = "";
    let resumo = "";
    // let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        nomeEquipe = dado.nomeEquipe.toLowerCase();
        resumo = dado.resumo.toLowerCase();
        // tags = dado.tags.toLowerCase();

        if (nomeEquipe.includes(campoPesquisa) || resumo.includes(campoPesquisa)){
            // Cria o HTML de um item de resultado
            resultados += `<div class="item-resultado">
            <h2>${dado.nomeEquipe}</h2>
            <h3>${dado.nomeCompletoEquipe}</h3>
            <h4>${dado.sede}</h4>
            <p>${dado.chefeEquipe}</p>
            <p>${dado.fundacao}</p>
            <p>${dado.titulosConstrutores}</p>
            <p>Pilotos atuais: ${dado.pilotosAtuais.join(", ")}</p>
            <p class="descricao-meta">${dado.resumo}</p>
            <a href=${dado.link} target="_blank">Site oficial</a>
            </div>`;
        }
      
    }

    if (!resultados) {
        resultados = "Nenhuma equipe foi encontrada";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}



