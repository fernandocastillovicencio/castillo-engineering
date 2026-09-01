---
# ═══════════════════════════════════════════════════════════════
# RODAPÉ (aparece em todas as páginas, no fim)
# ═══════════════════════════════════════════════════════════════
# Para editar:
#   cta → a chamada com botão (título, texto e botão)
#         NÃO troque o label "Agendar conversa (sem compromisso)" — é padrão
#   colunas → as 3 colunas do rodapé
#   copyright → a linha de direitos autorais
#
# Coluna 1 (sobre a empresa):  titulo + paragrafos (lista de textos)
# Coluna 2 (navegação):        titulo + links (label + href)
# Coluna 3 (contato):          titulo + itens (texto simples ou com tipo)
#
# MODELO DE LINK (coluna 2):
#   - { label: "Texto do link", href: "/endereco" }
#
# MODELO DE ITEM COM CONTATO (coluna 3):
#   - "Texto simples"
#   - { tipo: "email", label: "contato@empresa.com.br" }
#   - { tipo: "whatsapp", label: "(41) 9 0000-0000" }
# ═══════════════════════════════════════════════════════════════
sobre: "RODAPÉ: chamada com botão, 3 colunas (empresa, navegação, contato) e copyright."
cta:
  titulo: "Quer saber onde sua operação pode melhorar?"
  texto: "Converse sem compromisso com um engenheiro especialista."
  label: "Agendar conversa (sem compromisso)"
  href: "/#contato"
colunas:
  - titulo: "Castillo Engineering LTDA"
    paragrafos:
      - "Consultoria em engenharia de fluidos e térmica — solução de problemas, otimização de processos, simulação computacional, software sob demanda."
      - "CREA-PR ativo · ART quando o serviço exigir, ou a pedido do cliente (Lei 6.496/1977)"
  - titulo: "Navegação"
    links:
      - { label: "Início", href: "/" }
      - { label: "Metodologia", href: "/methodology" }
      - { label: "Investimento", href: "/prices" }
      - { label: "Política de Privacidade (LGPD)", href: "/privacy-lgpd" }
  - titulo: "Contato"
    itens:
      - item: "Atendimento remoto — Brasil e América do Sul"
      - { tipo: "email", label: "contato@castilloeng.com.br" }
      - { tipo: "whatsapp", label: "(41) 9 3300-9505" }
      - item: "CNPJ: 67.015.526/0001-16"
      - item: "CEP: 81.510-210 — Curitiba/PR — Brasil"
copyright: "© 2026 Castillo Engineering LTDA. Todos os direitos reservados."
---
