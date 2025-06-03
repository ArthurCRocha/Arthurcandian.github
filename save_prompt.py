import os

# Define the prompt text
prompt_text = """
🧠 PROMPT COMPLETO PARA O COPILOT GERAR MEU PORTFÓLIO

🏗️ Objetivo: Criar um portfólio pessoal com uma única página utilizando HTML, CSS e JavaScript puros, com boas práticas de desenvolvimento web, design responsivo e acessível. O projeto será hospedado no GitHub Pages (apenas uma página).
🎯 Arquivos: index.html, style.css e script.js.

📑 Estrutura do Portfólio:

🔹 Header:
- Nome: Arthur Candian Rocha.
- Menu de navegação com links âncora para as seções:
Início | Sobre | Habilidades | Projetos | Contato.
- Menu hambúrguer funcional para mobile.

🔸 Sobre Mim:
- Foto (usar placeholder).
- Texto:
"Sou estudante de Ciência da Computação no IF Sudeste MG - Campus Rio Pomba. Tenho experiência em desenvolvimento web e design gráfico, buscando unir criatividade e tecnologia para construir soluções inovadoras. Atuei como estagiário de desenvolvimento web, em comunicação e eventos, além de diretor de marketing na Empresa Júnior EmComp."

🔧 Habilidades Técnicas:
- Linguagens: JavaScript, TypeScript, Java, C++, Angular 18, Groovy Grails.
- Design: Canva, diagramação de documentos.
- Ferramentas: Git, IntelliJ, Jira, Bitbucket, Visual Studio Code.
- Edição de mídia: Criação de flyers, cards e materiais para redes sociais.

🚀 Projetos:
Cada projeto deve ser exibido como um card responsivo contendo título, descrição e botão para ver mais (GitHub ou placeholder).

1. Sistema de Coleta de Lixo
> Sistema em Java para gerenciamento de uma empresa ou ONG de coleta de lixo urbana.

2. Sistema de Gerenciamento Financeiro (Em desenvolvimento)
> Sistema para uma empresa de terraplanagem, focado no controle financeiro.

3. Chatbot WhatsApp
> Assistente virtual para WhatsApp, criado para automação de atendimentos online.

📞 Contato:
- Formulário com campos: Nome, E-mail, Mensagem (apenas frontend, sem backend).
- Links rápidos:
  - 📱 (32) 98493-0125
  - 📧 arthurcandian@gmail.com
  - 💼 https://github.com/ArthurCRocha
  - 🔗 https://drive.google.com/file/d/1VvtyYAtVqOukM0f6_4mgzE9Vvnvo_ta4/view?usp=sharing

🎨 Regras para o CSS (style.css):
- Usar variáveis CSS (:root) para definir cores e fontes.
- Paleta de cores moderna, estilo clean.
- Tipografia elegante (usar Google Fonts como Montserrat, Poppins ou Roboto).
- Layout utilizando Flexbox e CSS Grid.
- Aplicar efeitos de hover nos botões e cards.
- Implementar scroll suave (scroll-behavior: smooth).
- Design totalmente responsivo (funcionando em desktop, tablet e mobile).
- Menu hambúrguer para telas menores.

✨ Funcionalidades do JavaScript (script.js):
- Menu hambúrguer funcional.
- Scroll suave ao clicar nos links do menu.
- Animação de fade-in ou slide nos elementos quando entram na tela (opcional).
- Validação básica do formulário (campos obrigatórios).

🔥 Padrões e Boas Práticas:
- Utilizar HTML5 semântico.
- Código bem comentado e indentado.
- Acessibilidade básica (uso de alt em imagens, títulos hierárquicos, contraste adequado).
- SEO básico com meta tags apropriadas (title, description, viewport).
- Separação de responsabilidades:
→ HTML (estrutura) | CSS (estilo) | JS (interatividade).

✅ Entregáveis:
- index.html (estrutura da página)
- style.css (estilo visual)
- script.js (funcionalidades)

🟢 Instrução final: Gere todo o código separado corretamente nos três arquivos citados, pronto para ser hospedado no GitHub Pages.
"""

# Define the file path in your project directory
file_path = r'c:\Users\arthu\OneDrive\Documentos\projetos\DEFINITIVE_EDITTION_OF_PORTIFOLIO_GITHUB\Prompt_Portfolio_Arthur.txt'

# Create directories if they don't exist
os.makedirs(os.path.dirname(file_path), exist_ok=True)

# Save the text to the file
with open(file_path, 'w', encoding='utf-8') as file:
    file.write(prompt_text)

print(f"Prompt saved to {file_path}")
