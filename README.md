# Camu
Uma landing page minimalista e responsiva desenvolvida para pequenos empreendedores que possuem uma ou mais lojas físicas.

## Sobre o Projeto
Camu é uma solução web moderna que oferece uma presença digital elegante e funcional para pequenos negócios. Com design minimalista e totalmente responsivo, a plataforma foi pensada para atender às necessidades específicas de empreendedores que desejam expandir sua presença online mantendo a simplicidade e eficiência.

## Tecnologias Utilizadas
    - Next.js
    - TypeScript
    - Tailwind CSS
    - React.js
    - HTML5 & CSS3
    - JavaScript
    - Azure Static Web Apps (para deploy)

### Histórico de Desenvolvimento
O projeto passou por uma na sua stack:

Versão Inicial:
    - HTML, CSS e JavaScript vanilla
    - Tailwind CSS para estilização
    - React.js para componentes dinâmicos

Versão Atual:
    - Next.js para SSR e otimização de performance
    - Typescript para segurança de tipos
    - Otimizações de performance e SEO

## Características
    - Design Responsivo - Adaptável a todos os dispositivos
    - Interface Minimalista - Foco na experiência do usuário
    - Performance Otimizada - Carregamento rápido com Next.js
    - Padrão de Composição - Componentes reutilizáveis e modulares
    - Foco no Pequeno Empreendedor - Solução pensada para lojas físicas


## Instalação e Execução
**Pré-requisitos**:
    - Node.js (versão 16 ou superior)
    - npm ou yarn

**Passos para execução**:
Clone o repositório
```bash
git clone https://github.com/seu-usuario/camu.git

cd camu
``` 

Instale as dependências
```bash
npm install
# ou
yarn install`
```

Execute o projeto em modo de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

Acesse no navegador
http://localhost:3000


### Deploy
Build para Produção
```bash
yarn run next build
# Arquivos da build serão gerados na pasta `.next`

# Para deploy automático em produção
git checkout deploy_azure_swa
git commit -m "message"
git push origin deploy_azure_swa

# Para teste em deploy
git checkout deploy_dev
git commit -m "message"
git push origin deploy_dev
```
Hospedagem
O projeto está hospedado no Azure Static Web Apps, aproveitando:

✅ Deploy automático via GitHub Actions
✅ CDN global para performance otimizada
✅ HTTPS automático
✅ Integração nativa com repositórios Git
✅ Preview de branches para testes


## Público-Alvo
Pequenos empreendedores
Proprietários de lojas físicas
Negócios locais que buscam presença digital
Startups em fase inicial


## 📝 Licença
Este projeto está sob uma licença proprietária que impede a utilização, cópia, modificação ou distibuição sem autorização prévia.

## Contato
Desenvolvedor: Gilklewber Medeiros
Email: Gikimedei2018@Gmail.com
LinkedIn: https://www.linkedin.com/in/gilkleber/


