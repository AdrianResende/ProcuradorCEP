# 🔍 Procurador CEP

Um aplicativo moderno e elegante para busca de endereços pelo CEP, inspirado no design glassmorphism do iPhone.

![Procurador CEP](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11.1-FF6D9A?style=for-the-badge&logo=framer)

## ✨ Características

- 🎨 **Design Moderno**: Interface inspirada no iOS com efeito glassmorphism
- 🌊 **Animações Fluidas**: Transições suaves usando Framer Motion
- 📱 **Responsivo**: Funciona perfeitamente em desktop e mobile
- ⚡ **Performance**: Construído com Vite para carregamento rápido
- 🔍 **Busca Inteligente**: Formatação automática do CEP e validação
- 🎯 **UX Intuitiva**: Feedback visual para estados de loading e erro

## 🚀 Tecnologias

- **React 18.3.1** - Biblioteca para interfaces
- **Vite 5.4.8** - Build tool moderna
- **Framer Motion 11.11.1** - Animações e transições
- **Axios 1.7.7** - Cliente HTTP
- **React Icons 5.3.0** - Ícones modernos
- **Via CEP API** - API pública para consulta de CEPs

## 🎨 Design Features

### Glassmorphism Effect
- Backdrop blur com transparência
- Bordas sutis e sombras suaves
- Gradientes modernos
- Efeitos de hover interativos

### Animações
- Fade in suave na inicialização
- Transições de escala nos botões
- Animações de entrada/saída dos resultados
- Loading spinner personalizado

### Responsividade
- Layout adaptativo para todas as telas
- Otimizado para touch em dispositivos móveis
- Tipografia escalável

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AdrianResende/ProcuradorCEP.git
cd ProcuradorCEP
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter para verificar código

## 📚 Como Usar

1. Digite um CEP no campo de busca (formato: 12345-678)
2. Clique no botão de busca ou pressione Enter
3. Visualize as informações do endereço em cards elegantes
4. Aproveite as animações suaves e o design moderno!

## 🎯 Funcionalidades

- ✅ Busca por CEP com formatação automática
- ✅ Validação de entrada em tempo real
- ✅ Feedback visual para estados de loading
- ✅ Tratamento de erros elegante
- ✅ Interface totalmente responsiva
- ✅ Animações fluidas e modernas
- ✅ Design glassmorphism

## 🔧 Estrutura do Projeto

```
src/
├── App.jsx          # Componente principal
├── main.jsx         # Ponto de entrada
├── styles.css       # Estilos globais com glassmorphism
└── services/
    └── api.jsx      # Configuração da API
```

## 🌟 Próximas Melhorias

- [ ] Histórico de pesquisas
- [ ] Compartilhamento de resultados
- [ ] Modo escuro/claro
- [ ] PWA (Progressive Web App)
- [ ] Geolocalização
- [ ] Cache de resultados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Adrian Resende**
- GitHub: [@AdrianResende](https://github.com/AdrianResende)

---

⭐ Deixe uma estrela se este projeto te ajudou!