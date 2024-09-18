# Game Collection Manager

Este projeto é um gerenciador de coleções de jogos que permite registrar jogos físicos e digitais, separando-os por plataforma (Nintendo Switch, PS5, Xbox, PS4, etc.) e armazenando informações sobre o valor pago em cada jogo. O sistema também gera um dashboard exibindo estatísticas sobre o número de jogos por plataforma e tipo de mídia, além dos custos totais.

![alt text](/docs/assets/image.png)

## Funcionalidades

1. **Cadastro de Jogos**:

   - Cadastro de jogos com campos para nome, tipo de mídia (física ou digital), plataforma e valor pago.
   - Suporte para múltiplas plataformas, como Nintendo Switch, PS5, PS4, Xbox, entre outras.

2. **Classificação por Tipo de Mídia**:

   - Separação de jogos em mídia física e digital, permitindo a filtragem e organização da coleção.

3. **Dashboard de Estatísticas**:
   - Exibe as seguintes informações:
     - Total de jogos cadastrados.
     - Quantidade de jogos por plataforma.
     - Quantidade de jogos por tipo de mídia.
     - Total gasto em jogos, separando entre mídia física e digital.

## Estrutura do Projeto

### 1. Cadastro de Jogos

O cadastro de cada jogo incluirá as seguintes informações:

- **Nome do Jogo**: Título do jogo que será adicionado à coleção.
- **Plataforma**: Nome da plataforma (ex: PS5, Nintendo Switch, Xbox, PS4).
- **Tipo de Mídia**: Se é mídia física ou digital.
- **Valor Pago**: Valor gasto ao adquirir o jogo.
- **Classificação**: Como foi qualificado o jogo ao finalizar.

### 2. Organização por Plataforma

Cada jogo será classificado com base na plataforma em que ele pode ser jogado. As plataformas que você pode cadastrar incluem, mas não estão limitadas a:

- **Nintendo Switch**
- **PlayStation 5**
- **PlayStation 4**
- **Xbox**

### 3. Organização por Tipo de Mídia

Os jogos serão divididos em dois tipos de mídia:

- **Física**: Jogos adquiridos em discos ou cartuchos físicos.
- **Digital**: Jogos adquiridos digitalmente e baixados em uma plataforma.

### 4. Dashboard

O dashboard irá exibir algumas estatísticas importantes para você acompanhar sua coleção e seus gastos:

- **Total de jogos por plataforma**: Quantidade total de jogos em cada plataforma.
- **Total de jogos por tipo de mídia**: Quantidade de jogos físicos e digitais.
- **Custo total por tipo de mídia**: Total gasto em jogos físicos e digitais.
- **Valor total gasto**: Soma de todos os valores pagos nos jogos.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:

   ```bash
   git clone https://github.com/m4rcosazevedo/my-collections.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd my-collections
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Tecnologias Utilizadas

- **React**: Para a construção da interface do usuário e organização dos componentes.
- **Firebase**: Para persistência dos dados, permitindo salvar os jogos cadastrados e suas informações.

## Como Adicionar um Jogo

1. Acesse a página principal e clique no botão de "Cadastrar item".
2. Preencha o formulário com as informações:

   - Nome do jogo.
   - Upload da imagem
   - Tipo de mídia (física ou digital).
   - Plataforma (ex: PS5, Switch).
   - Preço pago.
   - Descrição breve do jogo.
   - Classificação

3. Clique em "Cadastrar" para adicionar o jogo à sua coleção.

## Dashboard

O dashboard será gerado automaticamente conforme os jogos forem adicionados. Ele mostram os seguintes dados:

- Quantidade de jogos por plataforma.
- Gasto total por tipo de mídia e plataforma.

## Contribuição

Se você deseja contribuir para este projeto, siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie uma nova branch com a sua feature/ajuste:

   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```

3. Commit suas alterações:

   ```bash
   git commit -m 'Adiciona nova feature'
   ```

4. Envie suas alterações para o repositório remoto:

   ```bash
   git push origin feature/nome-da-sua-feature
   ```

5. Abra um Pull Request para revisar suas alterações.

## Licença

Este projeto está sob a licença [MIT](LICENSE).

---

Qualquer dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato!
