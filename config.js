// ============================================================
//  CONFIGURAÇÃO DA APP - Bombons do Lis
// ============================================================
window.CONFIG = {
  // Folha "Preçário" do Google Sheets (preços de ingredientes e embalagens)
  // (o ID está no endereço da folha, entre /d/ e /edit)
  SHEET_ID: "1-invxUGfMswLZLrOBJKjNnmYLuROOr1ibuRtioXrW4c",

  // Nomes exatos dos separadores (tabs) na folha
  TAB_INGREDIENTES: "INGREDIENTES",
  TAB_PRODUTOS: "EMBALAGEM",

  // Guardar as receitas automaticamente na Drive.
  // Cola aqui, entre as aspas, o "URL da aplicação Web" que o Google te deu
  // (começa por https://script.google.com/...). Deixa vazio para desligar.
  DRIVE_URL: "https://script.google.com/macros/s/AKfycbxFK1oFEmqhA7QAynbFnkiB8acj_sESKLzgqXVPqf31R13WZy_8VCGjSPTUWsHJSdwh/exec",
  // Senha da ligação (tem de ser igual à do código no Google). Já vem preenchida.
  DRIVE_KEY: "Ar6ZJnRt3pfHJTKqiVM3-Xpf",

  // OPCIONAL: nomes exatos das colunas, se a app não as reconhecer sozinha.
  // Com a folha Preçário (Item, Preço, Quantidade, Unidade) não é preciso.
  COLUNAS: {
    nome: "",
    preco: "",
    quantidade: "",
    unidade: ""
  }
};
