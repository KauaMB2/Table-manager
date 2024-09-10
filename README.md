# Table Manager (https://tablemanager.vercel.app)

## Requisitos

- Node.js v20.12 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/KauaMB2/Table-manager.git
2. Acesse o diretório do projeto:
   ```bash
   cd Table-manager
3. Instale as dependências:
    ```bash
    npm install
## Executando Localmente
    npm run dev
### Após isso, acesse o projeto localmente em http://localhost:5173/ ou visite o site hospedado em https://tablemanager.vercel.app.

# Table Manager - Documentação

## Visão geral

O **Table Manager** é um aplicativo baseado em React que permite aos usuários gerenciar tabelas dinamicamente. Os usuários podem adicionar ou remover colunas, editar o conteúdo das células e reorganizar as colunas da tabela. O aplicativo se adapta a diferentes tamanhos de tela alternando entre um painel lateral (para desktop) e uma barra inferior com modal (para celular).

## Principais recursos

- **Gerenciamento dinâmico de tabelas**: Adicione, remova ou edite colunas em tempo real.
- **Design responsivo**: Alterna entre um painel lateral e uma barra inferior/modal dependendo do dispositivo.
- **Modo de visualização**: Alterna entre edição e visualização de tabela por meio do botão deslizante de pré-visualização.

## Detalhes Técnicos

### Gestão de Estado

O estado é gerenciado usando os ganchos `useState` e `useContext` do React. O contexto principal do aplicativo é o `TablesContext`, que lida com o conteúdo da tabela, seleção de células, manipulação de colunas e alternância do modo de visualização. Além disso, foi utilizado algumas outras técnicas como o hook `useCallBack` para melhoria da performance.

### Adaptação Móvel

- **Desktop**: Usa um painel lateral para opções adicionais de tabela (por exemplo, título e configurações visuais).
- **Mobile**: Implementa uma barra inferior para navegação e um modal para exibir opções.

### Componentes principais

- **PreviewPanel**: Exibe a tabela principal, com funcionalidade para adicionar/remover colunas e reorganizar células.
- **SidePanel**: Contém opções para personalizar o título da tabela e configurações visuais (usado no modo desktop).
- **BottomBar & Modal**: Substitui o painel lateral na visualização móvel, permitindo aos usuários de dispositivos móveis acessarem opções através de um modal.

## Estrutura de pastas

- **/src/components**: Contém todos os componentes da UI (por exemplo, `PreviewPanel`, `SidePanel`, `BottomBar`).
- **/src/contexts**: Gerencia o estado global de todo o aplicativo usando React Context (por exemplo, `TablesContext`, `SidePanelContext`).
- **/src/assets**: Armazena arquivos estáticos como imagens e ícones.

# Funcionamento da interface
## 1. Painel Principal
 - **Visualização de tabela**: A tabela é exibida no centro da tela. Cada célula pode ser selecionada ou modificada clicando nela.
Adicionar Coluna: Para adicionar uma coluna, clique no botão "Adicionar coluna" no rodapé da tabela.
Remover coluna: selecione uma célula e clique em “Remover coluna” para remover a coluna correspondente.
## 2. Painel lateral (versão desktop)
 - **Título e Visual**: À direita, o painel lateral permite editar o título da tabela, o título da coluna e o conteúdo da célula.
Recolher seções: use o ícone de seta para expandir ou recolher seções de edição.
## 3. Barra inferior (versão móvel)
 - **Botões de acesso rápido**: No celular, em vez do painel lateral, você terá uma barra inferior. Os botões “Título” e “Visual” abrem um modal onde você pode disponibilizar as mesmas edições no painel lateral da versão desktop.
## 4. Modo de visualização
 - **Ativar/Desativar**: No topo da tabela, há uma opção "Modo de visualização". Ao ativar o modo de visualização, a tabela passa a ser somente leitura, desabilitando interações como adicionar, remover ou editar colunas.
## 5. Reorganizar colunas
 - **Mover colunas**: Ícones de seta aparecem ao lado de cada coluna quando o modo de visualização está desativado. Clique nas setas para mover as colunas para a esquerda ou para a direita.