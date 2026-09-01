# 🚀 Painel de Conteúdo — Decap CMS

> ✅ **Decisão (pesquisa 2025):** ficamos no **Vercel** com login **GitHub**.
> O método do vídeo (Netlify Identity + Git Gateway) está sendo **aposentado pela
> própria Netlify** — não vale migrar para ele. Fonte:
> [decap-cms discussion #7419](https://github.com/decaporg/decap-cms/discussions/7419)

## Como configurar o login da editora

### O que precisa fazer (uma vez, ~20 minutos):

---

### 1. Criar um GitHub OAuth App ✅ JÁ FEITO — credenciais em `DEPLOY-README.md`, Seção 5

> Reprovado apenas se precisar regenerar o secret. Configuração usada:

1. Acesse: https://github.com/settings/developers
2. Clique em **"New OAuth App"**
3. Preencha:
   - **Application name:** `Castillo CMS`
   - **Homepage URL:** `https://castilloeng.com.br`
   - **Authorization callback URL:** `https://castillo-cms-auth.vercel.app/callback`
4. Clique em **"Register application"**
5. Na página seguinte, anote:
   - **Client ID** (valor que começa com `Iv1...`)
   - **Client Secret** (clique em "Generate a new client secret" e copie)

---

### 2. Deploy do servidor de autenticação no Vercel

1. Acesse: https://github.com/vencax/netlify-cms-github-oauth-provider
2. Clique em **"Deploy to Vercel"** (ou fork o repositório e importe no Vercel)
3. Nas variáveis de ambiente do Vercel, adicione:
   - `GITHUB_CLIENT_ID` = o Client ID que você copiou
   - `GITHUB_CLIENT_SECRET` = o Client Secret que você copiou
4. Faça o deploy. O Vercel vai gerar uma URL tipo: `https://castillo-cms-auth.vercel.app`

---

### 3. Dar acesso à editora no repositório

O login é com **conta GitHub**. A editora precisa ser **colaboradora do
repositório** do site (com permissão de escrita) para conseguir publicar:

1. Acesse: `https://github.com/SEU-USUARIO/SEU-REPOSITORIO/settings/access`
2. Clique em **"Add people"**
3. Adicione o e-mail/conta GitHub da editora (ela pode criar uma conta GitHub
   grátis, se não tiver uma)
4. Escolha permissão **Write**

---

### 4. Editar este arquivo

Edite `public/admin/config.yml` e preencha:

```yaml
backend:
  name: github
  repo: fernandocastillovicencio/castillo-engineering
  branch: main
  base_url: https://castillo-cms-auth.vercel.app   # URL do passo 2
  auth_endpoint: auth                              # NÃO usar "api/auth"
```

---

### 5. Testar

1. Suba as alterações para o GitHub (git push)
2. O Vercel faz o deploy automático
3. Acesse: `https://castilloeng.com.br/admin/`
4. Clique em **"Login with GitHub"**
5. Autorize o app
6. Pronto! A editora vê os formulários em português.

---

## Como a editora usa

1. Acessa `https://castilloeng.com.br/admin/`
2. Faz login com o GitHub (só na primeira vez)
3. Escolhe a seção que quer editar na lista à esquerda
4. Edita os campos (tudo em português, com labels claras)
5. Clica em **"Publicar"** → faz commit no GitHub → Vercel deploys sozinho

---

## ⚠️ Importante

- O painel `/admin/` **só carrega na rota de administração**. O site público continua leve (nenhum JS extra).
- A editora NÃO precisa saber Git, YAML, Markdown ou código — só precisa de uma conta GitHub grátis e aceitar o convite de colaboradora.
- Se algo der errado, o Git mantém o histórico completo — pode voltar atrás.
- Qualquer dúvida: pergunte ao desenvolvedor.