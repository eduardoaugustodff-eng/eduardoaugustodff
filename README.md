# 🔧 Auto Peças Nunediesel - Catálogo Motor Cummins 6BT

Dashboard interativa profissional para gerenciar e buscar peças de motor Cummins série B/6BT.

## 🎨 Características

- **Design Executivo Escuro**: Tema azul marinho e fundo escuro com identidade visual da Nunediesel
- **Busca Avançada**: Busque por código, descrição ou número de peça em tempo real
- **Filtro por Categoria**: 14 categorias de peças organizadas logicamente
- **Duas Visualizações**: Cards responsivos ou tabela detalhada
- **Interface Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições elegantes e feedback visual

## 📋 Categorias de Peças

- Pistões
- Anéis
- Camisas
- Bronzinas
- Buchas
- Tuchos
- Válvulas
- Guias e Sedes
- Juntas
- Selos e Retentor
- Bombas
- Sistemas
- Rolamentos
- Filtros

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação abrirá em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 🎯 Funcionalidades

### 🔍 Busca em Tempo Real
- Digite qualquer parte do código, descrição ou número de peça
- Resultados filtram instantaneamente
- Botão de limpeza rápida

### 🏷️ Filtros por Categoria
- Clique em uma categoria para filtrar peças específicas
- "Todas as Categorias" para ver o catálogo completo
- Contador de peças encontradas

### 👁️ Modos de Visualização
- **Cards**: Visualização moderna e compacta
- **Tabela**: Visualização estruturada com todos os detalhes

### 📱 Design Responsivo
- Otimizado para todos os tamanhos de tela
- Grid automático para cards
- Tabelas com scroll horizontal em dispositivos pequenos

## 🎨 Paleta de Cores

```
Azul Escuro Primário: #001f3f
Azul Primário: #0066cc
Azul Acento: #0099ff
Fundo Escuro: #0a0e27
Card: #1a2340
Input: #2a3456
Texto Principal: #ffffff
Texto Secundário: #b3b3cc
Borda: #3a4560
```

## 📦 Estrutura de Arquivos

```
.
├── src/
│   ├── App.jsx          # Componente principal com lógica
│   ├── App.css          # Estilos principais
│   ├── data.js          # Dados das peças
│   ├── index.css        # Reset global de CSS
│   └── main.jsx         # Ponto de entrada React
├── index.html           # HTML raiz
├── vite.config.js       # Configuração Vite
├── package.json         # Dependências
└── README.md            # Este arquivo
```

## 🛠️ Tecnologias

- **React 18**: Framework UI
- **Vite**: Build tool e dev server
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript ES6+**: Sintaxe moderna

## 📄 Informações das Peças

Cada peça contém:
- **Código**: Identificador único da peça
- **Descrição**: Detalhes da peça
- **Número de Peça**: Código do fabricante (quando disponível)
- **Notas**: Observações especiais (ex: "VER ADAPTAÇÕES")

## 🌐 Motor Cummins 6BT

Catálogo completo com peças para:
- Cummins Série B
- 6BT / 6BTA / 6BTAA / 6B5.9T
- Motor 6 Cilindros Turbinado

## 💡 Dicas de Uso

1. Use a busca para encontrar peças rápido
2. Filtre por categoria para navegar estruturalmente
3. Alterne entre Cards e Tabela conforme sua preferência
4. Os cards mostram informações visuais, a tabela é mais compacta

## 📞 Auto Peças Nunediesel

Dashboard desenvolvida para facilitar o acesso ao catálogo de peças Cummins.

---

**Versão**: 1.0.0  
**Última atualização**: 2024
