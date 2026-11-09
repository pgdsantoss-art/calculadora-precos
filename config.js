// ============================================================
//  CONFIGURAÇÃO DA APP - Bombons do Lis
// ============================================================
window.CONFIG = {
  // Folha "Preçário" do Google Sheets
  // (o ID está no endereço da folha, entre /d/ e /edit)
  SHEET_ID: "1-invxUGfMswLZLrOBJKjNnmYLuROOr1ibuRtioXrW4c",

  // Nomes exatos dos separadores (tabs) na folha
  TAB_INGREDIENTES: "INGREDIENTES",
  TAB_PRODUTOS: "EMBALAGEM",

  // OPCIONAL: nomes exatos das colunas, se a app não as reconhecer sozinha.
  // Com a folha Preçário (Item, Preço, Quantidade, Unidade) não é preciso.
  COLUNAS: {
    nome: "",
    preco: "",
    quantidade: "",
    unidade: ""
  }
};
