# 🎮 Jogo do Número Secreto

Este é um projeto simples e divertido desenvolvido durante o curso de lógica de programação com JavaScript da Alura. O objetivo do jogo é adivinhar um número secreto gerado aleatoriamente dentro de um intervalo definido.

## ✨ Funcionalidades

* **Adivinhe o Número Secreto:** O jogador deve inserir um número e tentar adivinhar o número secreto.
* **Dicas Inteligentes:** O jogo fornece dicas se o chute é maior ou menor que o número secreto.
* **Contador de Tentativas:** Acompanha o número de tentativas que o jogador levou para acertar.
* **Reiniciar Jogo:** Após acertar, um botão "Novo Jogo" é habilitado para iniciar uma nova rodada.
* **Responsividade:** Interface adaptável para diferentes tamanhos de tela (desktop e mobile).
* **Prevenção de Números Repetidos:** Garante que todos os números dentro do limite sejam sorteados antes de reiniciar a lista, para uma experiência de jogo mais justa e completa.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura da página web.
* **CSS3:** Estilização e responsividade da interface.
* **JavaScript:** Lógica do jogo (geração de números, verificação de chutes, controle de estado).
* **Google Fonts:** Utilização das fontes 'Chakra Petch' e 'Inter' para um design agradável.

## ⚙️ Como Rodar o Projeto

[Deploy no Vercel](https://jogo-do-numero-secreto-pi-lyart.vercel.app/)

Siga os passos abaixo para ter o projeto rodando em sua máquina local:

1.  **Clone o repositório (ou baixe o ZIP):**
    ```bash
    git clone https://github.com/Munique-Feitoza/jogo-do-numero-secreto.git
    ```
    Se você não tem um repositório Git, você pode simplesmente baixar o código-fonte como um arquivo ZIP e extraí-lo.

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd jogo-numero-secreto
    ```

3.  **Abra o arquivo `index.html`:**
    Você pode simplesmente clicar duas vezes no arquivo `index.html` em seu navegador de arquivos, ou arrastá-lo para a janela de um navegador (Chrome, Firefox, Edge, etc.).

    **Alternativa (Recomendado para desenvolvimento):** Para uma melhor experiência e para simular um servidor web local (evitando problemas de CORS com algumas bibliotecas), você pode usar extensões como "Live Server" no VS Code ou abrir um servidor simples via Python:

    ```bash
    # Se você tem Python instalado
    python -m http.server
    # ou para Python 3
    python3 -m http.server
    ```

    Após rodar o comando, abra seu navegador e vá para `http://localhost:8000` (ou a porta indicada).

---

Feito com ❤️ por Munique Feitoza como parte do curso da Alura.
