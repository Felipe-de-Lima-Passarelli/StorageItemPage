# 🛍️ Sneakers Store - Mobile First com Next.js

Este projeto é uma página de produto de e-commerce desenvolvida com **Next.js**, aplicando na prática o conceito de **Mobile First** desde a estrutura inicial do layout até a adaptação para telas maiores.

A aplicação simula a experiência de visualização de um produto, seleção de imagens, controle de quantidade e interação com carrinho, priorizando a usabilidade em dispositivos móveis.

---

## 🧠 Principais aprendizados

- Aplicação real do conceito **Mobile First**
- Controle de estado para galeria de imagens e quantidade de produto
- Manipulação de layout responsivo com Tailwind CSS
- Separação clara entre Header, Main e Footer
- Uso de `useState` para interações dinâmicas
- Estruturação de layout pensando primeiro em telas pequenas
- Adaptação progressiva para tablets e desktops com `md:` e `xl:`

---

## 🧱 Estrutura do projeto

- **Header** com menu hamburguer funcional para mobile
- **Main** com:
  - Galeria dinâmica de imagens do produto
  - Controle de quantidade
  - Botão de adicionar ao carrinho
  - Versão mobile e desktop bem definidas
- **Footer** simples e institucional

---

## 📱 Mobile First na prática

Todo o layout foi construído inicialmente para telas pequenas, e depois expandido para telas maiores utilizando breakpoints do Tailwind:

- Menu lateral apenas no mobile
- Layout vertical no mobile → horizontal no desktop
- Botões de navegação de imagens exclusivos do mobile
- Thumbnails de imagens apenas no desktop

---

## 📌 Próximos passos

- Implementar lógica real de carrinho
- Melhorar acessibilidade (aria-labels, semântica)
- Criar animações suaves na troca de imagens
- Persistência de estado do carrinho

---

## 👨‍💻 Autor

Felipe de Lima Passarelli  
Desenvolvedor Front-End focado em evolução contínua e boas práticas.

🔗 GitHub: https://github.com/Felipe-de-Lima-Passarelli  
🔗 LinkedIn: (adicione o link aqui)

---

## 📄 Licença

Este projeto está sob a licença MIT.
