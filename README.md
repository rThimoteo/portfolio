# Portfolio

Landing page pessoal/profissional criada com React, Vite, TypeScript e Tailwind CSS.

## Estrutura

- `src/App.tsx`: composição da landing page e seções principais.
- `src/components/Header.tsx`: navegação fixa.
- `src/components/SectionHeading.tsx`: título reutilizável das seções.
- `src/data/profile.ts`: dados pessoais, links, tecnologias, diferenciais e placeholders de projetos.
- `src/styles.css`: Tailwind, fontes e estilos globais.
- `index.html`: SEO básico, metadados e ponto de montagem do React.

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse a URL exibida no terminal.

## Onde alterar links e projetos

Edite `src/data/profile.ts`.

- O `resumeUrl` já usa o PDF `cv_rodrigo_thimoteo.pdf` da raiz do projeto.
- Substitua os itens de `projects` por projetos reais quando estiverem disponíveis.
- Atualize GitHub, LinkedIn ou email no objeto `profile`, se necessário.
