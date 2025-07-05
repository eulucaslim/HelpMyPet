Help My Pet 🐶

Este é um projeto Next.js desenvolvido para a iniciativa "Help My Pet". Este README.md guiará você através da configuração e execução do projeto utilizando o Yarn.
Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Yarn instalados em sua máquina.

    Node.js: Você pode baixá-lo em nodejs.org. Recomenda-se a versão LTS.

    Yarn: Após instalar o Node.js, você pode instalar o Yarn globalmente com o seguinte comando:

    npm install -g yarn


Instalação

    Clone o repositório:

    git clone git@github.com:eulucaslim/HelpMyPet.git
    cd help-my-pet


    Instale as dependências:

    Navegue até o diretório do projeto e instale todas as dependências necessárias utilizando o Yarn:

    yarn install


Executando o Projeto

Para iniciar o servidor de desenvolvimento do Next.js, use o seguinte comando:

yarn dev


Isso iniciará o aplicativo em modo de desenvolvimento. Você poderá acessá-lo no seu navegador em http://localhost:3000.
Comandos Úteis do Yarn

Aqui estão alguns comandos Yarn úteis que você pode precisar durante o desenvolvimento:

    yarn dev: Inicia o servidor de desenvolvimento.

    yarn build: Cria uma versão otimizada para produção do seu aplicativo.

    yarn start: Inicia o servidor de produção após a execução de yarn build.

    yarn lint: Executa o linter para verificar problemas de código.

Estrutura do Projeto

O projeto segue a estrutura padrão de um aplicativo Next.js:

    pages/: Contém as páginas da sua aplicação. Cada arquivo JavaScript/TypeScript neste diretório se torna uma rota.

    public/: Armazena arquivos estáticos como imagens, fontes, etc.

    components/: Onde você pode criar seus componentes React reutilizáveis.

    styles/: Contém seus arquivos CSS/Sass/Modules.

Sinta-se à vontade para explorar e contribuir com o projeto! Se tiver alguma dúvida, abra uma issue no repositório.