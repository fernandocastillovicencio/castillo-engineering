# 📋 Castillo Engenharia — Guia de Migração e Deploy do Decap CMS

> Documento de referência completo para a migração do site a uma nova pasta/repositório integrado à empresa. Contém **toda a configuração, decisões, credenciais e próximos passos** do projeto Decap CMS.

**Data:** 01/09/2026 (atualizado no mesmo dia com a centralização completa do CSS — Seção 15)
**Responsável técnico:** Fernando Castillo Vicencio
**Stack do site:** Astro 4 (estático) · Tailwind v4.2.2 · Vercel · GitHub
**Estado do CSS:** 100% centralizado em `src/styles/global.css` (6 categorias numeradas) — templates não têm nenhum estilo inline

---

## 1. Contexto e objetivo

- O site **castilloeng.com.br** é estático, gerado com **Astro 4**, e está hospedado no **Vercel** com deploy automático a partir do **GitHub**.
- O conteúdo fica em arquivos Markdown dentro da pasta `marketing/`, organizados por seção (home, páginas institucionais, configurações globais, etc.).
- **Objetivo:** permitir que uma pessoa leiga (conhece Word, não sabe código) edite os textos do site sem mexer em código/Markdown. Solução escolhida: **Decap CMS** (open source, MIT, gratuito).

### Requisitos confirmados pelo dono
- ✅ Gratuito total
- ✅ Site público leve (CMS não pode pesar nas páginas normais)
- ✅ Editor leigo (apenas formulários, sem Git/YAML)
- ✅ Hospedagem continua no Vercel
- ✅ Repositório no GitHub continua sendo a fonte

---

## 2. Decisão de arquitetura: por que ficamos no Vercel

A pesquisa revelou que **o método do vídeo do YouTube (Netlify Identity + Git Gateway) está sendo depreciado pela própria Netlify**.

| Opção | Veredito |
|---|---|
| Migrar para Netlify só para usar o login do vídeo | ❌ Migraria para uma solução **deprecada** |
| Manter Vercel + login com GitHub | ✅ Caminho **oficial e atual** do Decap CMS |
| Login e-mail/senha (como no vídeo) | ⚠️ Depende do Netlify Identity (deprecado) |

**Fonte oficial** — resposta do mantenedor do Decap (Martin Jagodic), [discussion #7419](https://github.com/decaporg/decap-cms/discussions/7419), fev/2025:
> "Netlify Identity is being deprecated... there will be no updates/maintenance for Identity or Git Gateway from Netlify moving forward (it's been 9 months since the last Git Gateway update)... Decap is basically married to Netlify Identity, and as maintainers, we are aware that a divorce is long overdue."

**Conclusão:** Vercel + GitHub (já é o stack atual) é o caminho mais simples, gratuito e **futuro**.

---

## 3. Pesquisa de versão (versão mais recente em 2025/2026)

- **Decap CMS 3.16.0** (mais recente em set/2026) — carregada via `decap-cms@^3.0.0` no CDN (caret resolve para última 3.x).
- **Compatibilidade:** estrutura (`public/admin/config.yml` + `index.html`, coleções, widgets) **continua igual** ao do vídeo. Mudanças foram em features e correções; nenhuma quebra para nosso caso.
- **Fonte:** [Astro Docs — Decap CMS](https://docs.astro.build/en/guides/cms/decap-cms/) · [Releases do Decap](https://decapcms.org/docs/releases/)
- **Importante:** existe uma issue conhecida de login no Vercel ([#7321](https://github.com/decaporg/decap-cms/issues/7321)). Ela afeta o OAuth direto com GitHub; a solução oficial para Vercel é usar um **External OAuth Client** (provider serverless) — o que é exatamente o que vamos fazer.

---

## 4. Fluxo de autenticação (escolhido)

**Decap CMS `backend: github` + External OAuth Provider (`vencax/netlify-cms-github-oauth-provider`) deployado no Vercel.**

```
Editora clica "Login com GitHub" no /admin/
       ↓
Decap redireciona para base_url/auth (Vercel)
       ↓
Vercel serverless function redireciona para GitHub OAuth
       ↓
Editora autoriza (precisa de conta GitHub + ser colaboradora do repo)
       ↓
GitHub volta para base_url/callback
       ↓
Provider gera token e o Decap usa para fazer commit
       ↓
Vercel detecta commit no repo → redeploy automático
```

---

## 5. Credenciais já criadas (GitHub OAuth App)

**Status:** OAuth App criado, Client Secret gerado e copiado.

| Item | Valor |
|---|---|
| **Application name** | `Castillo CMS` |
| **Homepage URL** | `https://castilloeng.com.br` |
| **Client ID** | `Ov23li8XWQjFrycYGw6z` |
| **Client Secret** | `147c0e6bfafea7bc4362fd87b1b6d3f4a714d45c` |
| **Authorization callback URL** | `https://castillo-cms-auth.vercel.app/callback` |
| **Allow wildcard matching** | ❌ NÃO |
| **Enable Device Flow** | ❌ NÃO |
| **Expire user access tokens** | ❌ NÃO |

> ⚠️ O secret só aparece uma vez. Se perder, é preciso gerar outro.

> ⚠️ O Callback URL acima **só funciona depois do deploy do Passo 3**. Se você tentar logar antes, vai dar erro.

---

## 6. Repositório

- **URL:** https://github.com/fernandocastillovicencio/castillo-engineering
- **Público:** sim
- **Branch padrão:** `main`
- **Usar no config.yml como:** `fernandocastillovicencio/castillo-engineering`

---

## 7. Arquivos do CMS criados (no checkout atual)

| Arquivo | O que faz |
|---|---|
| `public/admin/index.html` | Página de login do CMS. Carrega `decap-cms@^3.0.0` (resolve para 3.16.0). |
| `public/admin/config.yml` | Mapeia os 15 arquivos `.md` em formulários editáveis em português. Cobre **todos** os campos, inclusive técnicos (hidden). |
| `public/_headers` | CSP do site. Adicionei regra `/admin/*` permitindo `unpkg.com` (CMS), `api.github.com` e `github.com` (autenticação). |
| `ADMIN-README.md` | Guia resumido (passo-a-passo curto). |
| `marketing/*.md` (15 arquivos) | Conteúdo do site, estruturas padronizadas para o CMS. |
| Templates Astro (`src/pages/*.astro`, `src/layouts/Layout.astro`) | Renderizam os dados. Já estão com `item.item ?? item` e fallbacks para listas que o CMS converte em objetos. |
| `src/styles/global.css` | **ÚNICO arquivo de estilo do site.** 6 categorias numeradas; templates usam só classes nomeadas (zero estilo inline). Ver Seção 15. |
| `src/components/WhatsAppButton.astro` | Botão flutuante de WhatsApp (classe `.fab` definida no global.css). |
| `src/pages/prices.astro` / `methodology.astro` / `privacy-lgpd.astro` / `404.astro` | Páginas internas — também usam só classes do global.css. |

---

## 8. Conteúdo do `public/admin/config.yml` (estado validado)

### Bloco `backend` (NÃO usar com está, ajustar no Passo 5)

```yaml
backend:
  name: github
  repo: fernandocastillovicencio/castillo-engineering
  branch: main
  base_url: https://castillo-cms-auth.vercel.app    # ← preencher após Passo 3
  auth_endpoint: auth                                # ← NÃO "api/auth" (corrija se estiver errado)
```

> ⚠️ **Correção importante:** o README antigo tinha `auth_endpoint: api/auth`. O correto para o provider `vencax` é `auth` (padrão) ou omitir.

### Configurações globais

```yaml
locale: "pt_br"
site_url: "https://castilloeng.com.br"
media_folder: "public/images"
public_folder: "/images"
```

### Coleções (3 grupos, 15 arquivos)

1. **`inicio`** (Página Inicial, 9 seções)
   - `apresentacao.md` · `o-que-resolvemos.md` · `como-funciona.md` · `para-quem.md`
   - `por-que-a-castillo.md` · `investimento.md` · `perguntas-frequentes.md` · `resultados.md` · `contato.md`

2. **`paginas`** (4 páginas)
   - `pagina-investimento.md` · `pagina-metodologia.md` · `pagina-nao-encontrada.md` · `pagina-privacidade-lgpd.md`

3. **`global`** (Configurações Globais, 2 arquivos)
   - `configuracao-do-site.md` · `rodape.md`

### Cobertura de campos (validado)

- ✅ Todos os **campos-folha** (valores reais) estão definidos no config.yml.
- ✅ Campos técnicos (`href`, `nome`, `formspree.endpoint`, `schemaOrg.*`, `a11y.skipLink`, etc.) estão como `widget: hidden` para não aparecer na UI mas serem preservados ao salvar.
- ✅ Decap reescreve o frontmatter ao salvar; campos fora do config são APAGADOS — por isso a importância de cobrir tudo.
- ✅ Dotted names (`seo.title`, `form.camposObrigatorios`, `schemaOrg.@type`) reconstroem objetos aninhados automaticamente.

---

## 9. Configurações estruturais que precisam ser aplicadas na nova pasta

### 9.1 O CTA (byte-idêntico, 7 ocorrências em `.md` + 7 em `config.yml`)

Texto exato: **`Agendar conversa (sem compromisso)`**

Aparece em:
- `marketing/apresentacao.md` (2x) — botão principal
- `marketing/contato.md` (2x) — botão de envio
- `marketing/investimento.md` (2x) — botão da seção
- `marketing/pagina-investimento.md` (2x)
- `marketing/pagina-metodologia.md` (2x)
- `marketing/rodape.md` (2x)
- `marketing/configuracao-do-site.md` (2x) — `header.ctaPrincipalDesktop`
- `marketing/ESTRUTURA.md` (1x) — documentação

> **NUNCA** altere o texto do CTA sem revisar o layout e o `config.yml` juntos.

### 9.2 Voz do site

**"Nós" em todo o conteúdo** (decisão do dono, 25/08/2026). O "eu" só fica no material impresso (não reaplicar ao site).

### 9.3 Listas no `.md` (Decap converte, templates são resilientes)

- **`widget: list` sem `field`/`fields`** → produz strings puras `- "texto"`. Templates: `{setor}`, `{opcao}`, `{p}`.
- **`widget: list` + `fields:`** → produz objetos. Templates: `{item.dor}` ou `{item.item ?? item}`.
- **Mistos** (ex: `camadas[].itens` em `o-que-resolvemos.md`) — normalizado para objetos com campos opcionais; chips viraram `- item: "..."`. Template: `{item.item ?? item}`.
- **`rodape.md` colunas[].itens** — normalizado para sempre-objeto (`item:` ou `tipo+label`). Template: `if (item.item) ...`.

---

## 10. Validações já executadas (estado atual)

| Verificação | Resultado |
|---|---|
| `config.yml` YAML válido | ✓ |
| 15 arquivos `.md` YAML válidos | ✓ 15/15 |
| Todos os campos-folha cobertos no `config.yml` | ✓ (script de cross-check) |
| `astro sync` | ✓ "Synced content" |
| CSS Tailwind v4 compila | ✓ |
| CSS final compilado (o que o navegador baixa) | ✓ **41,2 KB · 5,7 KB gzip** |
| Classes órfãs / classes usadas sem definição | ✓ 0 / 0 |
| Seletores posicionais frágeis (`:first-of-type`, `:has`) | ✓ 0 |
| JS do formulário (`.is-hidden` via `classList`) | ✓ intacto |
| Imagens referenciadas existem em `public/` | ✓ 3/3 |
| Âncoras `/#secao` têm `id` de destino | ✓ todas |
| CTA byte-idêntico | ✓ 22 ocorrências (15 nos `.md` + 7 defaults no config) |
| Estruturas `.md` compatíveis com o que os templates leem | ✓ |

**Script de cross-check usado:**
```python
# Para cada .md, extrai chaves-folha (valores reais) e compara com os
# nomes definidos em config.yml (dotted names aceitos)
```

---

## 11. Próximos passos (na nova pasta)

### Passo 1 — Copiar arquivos
Trazer para a nova pasta **o projeto inteiro** (é um repo git; ideal: clonar de `https://github.com/fernandocastillovicencio/castillo-engineering` — ou copiar tudo exceto `node_modules/`, que é symlink e não vai no git). Mínimo para o site funcionar:
- `src/` inteiro (`styles/global.css`, `layouts/`, `components/`, `pages/`, `content.config.ts`)
- `public/` inteiro (`admin/`, `_headers`, `images/`)
- `marketing/*.md` (todos os 15 + `ESTRUTURA.md`)
- `package.json` · `astro.config.mjs` · `tsconfig.json` · `vercel.json` (se existir) · `.gitignore`
- `DEPLOY-README.md` (este guia) · `ADMIN-README.md`

> ⚠️ **`node_modules/` nesta pasta é um SYMLINK** para fora do repositório — não copie, não commita. Na nova pasta rode `npm install` (ou o gerenciador do `package.json`) para recriá-lo. O `.gitignore` já cobre `node_modules/`, `.vite/`, `.astro/` e `dist/`.

### Passo 2 — GitHub OAuth App ✅ JÁ FEITO
Credenciais obtidas (ver Seção 5).

### Passo 3 — Deploy do servidor de login no Vercel
1. Fork/importar `https://github.com/vencax/netlify-cms-github-oauth-provider` no Vercel.
2. Adicionar env vars:
   - `GITHUB_CLIENT_ID` = `Ov23li8XWQjFrycYGw6z`
   - `GITHUB_CLIENT_SECRET` = `147c0e6bfafea7bc4362fd87b1b6d3f4a714d45c`
3. Deploy → anotar URL gerada (ideal: `https://castillo-cms-auth.vercel.app`).

### Passo 4 — Adicionar a editora como colaboradora (Write)
- Repositório: `https://github.com/fernandocastillovicencio/castillo-engineering/settings/access`
- Add people → conta GitHub da editora → permissão **Write**.

### Passo 5 — Ajustar o `config.yml` (SEÇÃO 8)
Trocar o bloco `backend:` para:
```yaml
backend:
  name: github
  repo: fernandocastillovicencio/castillo-engineering
  branch: main
  base_url: https://castillo-cms-auth.vercel.app   # URL do Passo 3
  auth_endpoint: auth
```

### Passo 6 — `git push` e testar
1. Push para a branch `main`.
2. Vercel faz deploy automático.
3. Acessar `https://castilloeng.com.br/admin/`.
4. Clicar "Login with GitHub" → autorizar.
5. Conferir que vê as 3 coleções: "Página Inicial", "Páginas", "Configurações Globais".

---

## 12. Pontos de atenção (lições da rodada anterior)

1. **Issue #7321** (login no Vercel) — resolvida usando o External OAuth Client, não é mais problema.
2. **Netlify Identity deprecado** — não usar para novos projetos.
3. **Decap `widget: hidden` preserva valores existentes** — o `default` só vale para campos vazios. Verificado na [doc oficial](https://decapcms.org/docs/widgets/hidden/).
4. **Campos pontilhados (`seo.title`)** — Decap reconstroi objetos automaticamente. Cobertura dos campos-folha já foi validada.
5. **CSP do site** — a regra `/admin/*` foi adicionada em `public/_headers` para permitir `unpkg.com`, `api.github.com`, `github.com`, `avatars.githubusercontent.com`. Sem isso, o painel não carrega.
6. **CTA "Agendar conversa (sem compromisso)"** — byte-idêntico em todos os locais; qualquer alteração deve ser feita em conjunto (`.md` + `config.yml` + templates).
7. **Decap reescreve o frontmatter** ao salvar — todos os campos precisam estar no `config.yml` ou são perdidos.
8. **Voz do site: "nós"** — não usar "eu" no conteúdo do site.
9. **`node_modules` é symlink** nesta pasta (aponta para fora do repo, EROFS). Em pasta nova: `npm install` do zero.

---

## 13. Fontes consultadas (validação técnica)

- [Astro Docs — Decap CMS](https://docs.astro.build/en/guides/cms/decap-cms/) — guia canônico para Astro + Decap
- [Decap CMS — Releases](https://decapcms.org/docs/releases/) — confirma 3.15.1+ em 2026
- [Decap CMS — Hidden widget](https://decapcms.org/docs/widgets/hidden/) — comportamento de campos ocultos
- [Decap CMS — GitHub Backend](https://decapcms.org/docs/github-backend/) — backend `github`
- [Decap CMS — External OAuth Clients](https://decapcms.org/docs/external-oauth-clients/) — lista de providers
- [Decap CMS #7419](https://github.com/decaporg/decap-cms/discussions/7419) — deprecação do Netlify Identity
- [Decap CMS #7321](https://github.com/decaporg/decap-cms/issues/7321) — issue de login no Vercel
- [vencax/netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider) — provider OAuth escolhido

---

## 14. Resumo de uma linha

> Ficar no **Vercel + GitHub** (Netlify Identity está deprecado); login com **GitHub OAuth** via provider `vencax` deployado grátis no Vercel; o painel `/admin/` carrega só na rota admin (site público intocado); a editora entra com **conta GitHub** e clica **Publicar** → commit → Vercel deploys sozinho. **Gratuito total, peso zero, simples para leigos.**

---

## 15. CSS — estado final e como evoluir (centralização completa, 01/09/2026)

> **Decisão do dono:** TODO o CSS fica centralizado num arquivo só — `src/styles/global.css` — onde dá para **categorizar e agrupar**. Nada de estilo nos templates (nem utilitários Tailwind em `class=""`): os templates usam **apenas classes nomeadas** definidas no global.css. Não importa o número de linhas — importa o **número de categorias** e **quantas vezes cada classe é usada**.

### 15.1 As 6 categorias do `global.css`

| # | Categoria | Conteúdo |
|---|---|---|
| 1 | **TEMA** | As 10 cores + 3 sombras da marca (`@theme`). Mudou aqui, mudou o site inteiro. |
| 2 | **BASE** | `html` (scroll suave), `section[id]` (scroll-margin), `body` (flex column min-h-screen), `main` (flex-grow). |
| 3 | **PEÇAS** | O vocabulário do site — classes usadas em 2+ páginas: `container-site`, `section-title`, `btn`, `card`, `card-title`, `card-body`, `box-dark`, `chip`, `chips`, `ctas`, `item-grid`, `link-cta`, `grid-3`, `grid-4`, `stack`, `lead`, `legenda`, `subtitulo`, `selo`, `cta-wrap`, `form-grid`, `form-extra`, `form-field`, `full`, `is-hidden`, `skip-link`. |
| 4 | **REGIÕES FIXAS** | Cabeçalho (`.header`, `.header-inner`, `.header-logo`, `.header-actions`, `.header-wa`, `.header-cta`, `.txt-curto`, `.txt-longo`), rodapé (`.footer`, `.footer-inner`, `.footer-cta`, `.footer-cols`, `.footer-copy`), botão flutuante (`.fab`). Aparecem 1× no Layout, mas renderizam em **todas as páginas**. |
| 5 | **HOME** | Uma subseção por seção da home (`#hero`, `#o-que-resolvemos`, `#como-funciona`, `#para-quem`, `#por-que`, `#resultados`, `#contato`) — só o que é exclusivo. |
| 6 | **PÁGINAS INTERNAS** | `#precos`, `#metodologia`, `#privacidade`, `#nao-encontrada` (404) — só o que é exclusivo. |

### 15.2 Vocabulário — uso de cada classe (auditoria 01/09/2026)

**42 classes nomeadas** (mínimo absoluto; 0 órfãs). As mais usadas:

```
14×  card-body     14×  card-title    13×  container-site
11×  card           9×  btn            9×  section-title
 5×  form-field     3×  box-dark       3×  cta-wrap      3×  lead
 3×  stack          2×  chip           2×  chips         2×  ctas
 2×  form-grid      2×  grid-4         2×  item-grid     2×  legenda    2×  subtitulo
```

Classes de uso único — todas justificadas: regiões do Layout (real: 6 páginas), `is-hidden` (manipulada pelo JS do formulário), `skip-link` (acessibilidade), `hero-badge`, `num-badge`, `selo`, `link-cta`, `grid-3`, e classes escopadas por seção (`corpo`, `atualizado`, `sintoma`, `impacto`, `nota`, `prazo`, `lead-404`→usa `.lead`, `sub-404`→usa `.card-body`).

Fusões já feitas (classes de uso único absorvidas por classes existentes): `stack-lg`+`faq-lista`→`.stack` (3×) · `hero-sub`→`.lead` (3×) · `hero-linha`+`foot-note`→`.legenda` (2×) · `hero-ctas`→`.ctas` (2×) · `planos`→`.grid-4` (2×) · `tags`→`.chips` (2×) · `sucesso-titulo`/`sucesso-texto`/`lead-404`/`sub-404`→`.card-title`/`.card-body`/`.lead`.

### 15.3 Métricas (histórico)

| | Original | Final | Δ |
|---|---|---|---|
| Linhas do CSS | 214 | **198** | −7% |
| Regras `@apply` | 154 | **113** | −27% |
| Tokens de utilitário | 656 | **448** | −32% |
| Seletores posicionais frágeis | 63 | **0** | −100% |
| Profundidade máx. de seletor | 12 | **2** | −83% |
| Estilo inline nos templates | ~0 | **0** | centralizado |
| CSS compilado | — | **41,2 KB / 5,7 KB gzip** | leve |

### 15.4 Regras para evoluir o CSS (aprendizados desta rodada)

1. **Tailwind v4 NÃO aceita `@apply` de classes próprias** (ex.: `@apply card` quebra) — só utilitários. Por isso as variantes de botão usam atributo: `.btn[data-tipo=primario]`, e o CMS controla `data-tipo` via campo.
2. **Utilitários vencem classes de componente** na cascata — para sobrescrever, use `class="card-title text-castillo-orange"`.
3. **`#privacidade h2` precisa continuar no CSS** — o h2 vem do markdown (`<Content />`), não passa por template.
4. **`.is-hidden` é manipulada pelo `<script>` do formulário** (`classList.add/remove`) — nunca renomear.
5. **Header/footer têm classes nomeadas de volta** (`.header-logo`, `.header-wa`, `.header-cta`, `.txt-curto`, `.txt-longo`, `.footer-inner`, `.footer-cta`, `.footer-copy`) — uma tentativa de substituí-las por seletores posicionais (`:first-of-type`) foi revertida: os posicionais são frágeis.
6. **Classes escopadas por seção** (`#o-que-resolvemos .rows`, `#privacidade .corpo`) são o mecanismo para estilo exclusivo de uma seção — mantenha assim em vez de criar utility soup no template.
7. **NUNCA rodar `npm run build`** (o dono compila manualmente). Validação de template = `npx astro sync`.

### 15.5 Como validar mudanças no CSS (harness, sem build)

```js
// salvar como ./v.mjs e rodar:  timeout 40 node ./v.mjs && rm ./v.mjs
import { compile } from 'tailwindcss';
import fs from 'fs';
const css = fs.readFileSync('./src/styles/global.css', 'utf8');
const tw = fs.readFileSync('./node_modules/tailwindcss/index.css', 'utf8');
try {
  await compile(css, { base: process.cwd() + '/',
    loadStylesheet: (id) => id === 'tailwindcss'
      ? { content: tw, base: process.cwd() + '/', path: './node_modules/tailwindcss/index.css' }
      : { content: '', base: process.cwd() + '/' },
    loadModule: (id) => import(id) });
  console.log('✓ CSS compila');
} catch (e) { console.log('✗', e.message); }
```

Checklist completo pós-mudança: (a) harness acima ✓ · (b) `npx astro sync` ✓ · (c) `grep -ro 'Agendar conversa (sem compromisso)' marketing/ | wc -l` = 15 e `grep -c '...' public/admin/config.yml` = 7 ✓ · (d) órfãs: para cada classe definida no CSS, conferir que aparece em algum `.astro` (e vice-versa) ✓.

### 15.6 Auditoria funcional (01/09/2026, tudo verde)

CSS compila · `astro sync` ✓ · 0 classes usadas sem definição · 0 órfãs · JS do formulário intacto (`is-hidden`, `form-contato`, `form-submit`, `form-sucesso`) · 3/3 imagens existem (`castillo-logo-horizontal-negative.svg`, `castillo-symbol.svg`, `og-castillo.png`) · todas as âncoras `/#...` têm destino · CTA 15/15 + 7/7 · 0 posicionais.

**Correção importante feita nesta auditoria:** o template usava `.tags` mas o CSS definia `.chips` (os chips do "Para quem" perderiam o flex-wrap) — padronizado para `.chips` (2 usos).
