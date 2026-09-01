# ESTRUTURA DO CONTEÚDO DO SITE

> **Propósito:** este arquivo define a ordem do conteúdo e explica o que cada arquivo controla.
> A pessoa que edita o site deve ler este guia primeiro, depois editar os arquivos `.md` indicados.

---

## 📋 ORDEM DO CONTEÚDO NA PÁGINA INICIAL

A página inicial (`/`) tem 9 seções, nesta ordem:

| Ordem | Seção | Arquivo | O que controla |
|-------|-------|---------|----------------|
| 1 | **Apresentação** (topo) | `apresentacao.md` | Selo, linha de atendimento, título principal, subtítulo, botões |
| 2 | **O que resolvemos** | `o-que-resolvemos.md` | As 4 camadas de dores: energia, operação, projetos, conformidade |
| 3 | **Como funciona** | `como-funciona.md` | Os 4 passos do serviço, do contato à verificação |
| 4 | **Para quem** | `para-quem.md` | Setores industriais atendidos (5 principais + 4 secundários) |
| 5 | **Por que a Castillo** | `por-que-a-castillo.md` | 3 diferenciais + bloco "Como trabalhamos" |
| 6 | **Investimento** | `investimento.md` | 4 cards de serviços + botão de agendar |
| 7 | **Perguntas frequentes** | `perguntas-frequentes.md` | 7 perguntas frequentes com respostas |
| 8 | **Resultados** | `resultados.md` | Portfólio técnico (5 projetos) |
| 9 | **Contato** | `contato.md` | Formulário completo (campos, botões, confirmação) |

---

## 📄 PÁGINAS INTERNAS

| Página | Arquivo | O que controla |
|--------|---------|----------------|
| `/prices` (Investimento) | `pagina-investimento.md` | Etapas, planos e "Como precificamos" |
| `/methodology` (Metodologia) | `pagina-metodologia.md` | 4 cards do método de diagnóstico |
| `/privacy-lgpd` (Privacidade) | `pagina-privacidade-lgpd.md` | Política de privacidade (9 blocos legais) |
| `/404` (Página não encontrada) | `pagina-nao-encontrada.md` | Textos e botões de navegação |

---

## ⚙️ CONFIGURAÇÕES GLOBAIS

| Arquivo | O que controla |
|---------|----------------|
| `configuracao-do-site.md` | Dados globais: URL, WhatsApp, contatos, CNPJ/CREA, textos do header, botão WhatsApp, dados do Google/Schema. **Não editar sem orientação do desenvolvedor.** |
| `rodape.md` | Rodapé completo: chamada com botão, 3 colunas (empresa, navegação, contato) e copyright |

---

## ✏️ COMO EDITAR

1. **Abra o arquivo** da seção que quer alterar (ex.: `apresentacao.md` para mudar o título do topo).
2. **Leia as instruções** que começam com `#` (linhas azuis/comentários) dentro do arquivo — elas explicam cada campo em português.
3. **Edite o texto** entre as aspas (`"texto"`). Cuidado para não apagar as aspas.
4. **Salve o arquivo.**
5. **Rode o build** com `npm run build` para gerar o site atualizado.
6. **Importante:** não altere os nomes dos campos (ex.: `headline:`, `ctaPrincipal:`), só os valores entre aspas. As linhas que começam com `#` são comentários — pode ignorar ou ler para se orientar.

### Exemplo

```markdown
---
headline: "Sua planta perde dinheiro em calor, vapor e frio."   ← Edite aqui
ctaPrincipal:
  label: "Agendar conversa (sem compromisso)"                     ← Edite aqui
---
```

---

## 🔄 OBSERVAÇÕES

- **Idioma:** todo o conteúdo está em português brasileiro (pt-BR).
- **Arquivo `.md`:** cada arquivo usa o formato Markdown com cabeçalho YAML (entre `---`). Os dados estruturados (listas, cards, perguntas) ficam no cabeçalho; textos longos (como a LGPD) ficam no corpo do arquivo.
- **Não renomeie os arquivos** — o sistema busca pelo nome do arquivo.
- **Dúvidas:** pergunte ao desenvolvedor antes de alterar `configuracao-do-site.md`.