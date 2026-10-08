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
sobre: "PIE DE PÁGINA: llamada con botón, 3 columnas (empresa, navegación, contacto) y copyright."
cta:
  titulo: "¿Quiere saber lo que sus facturas y registros ya dicen sobre la operación?"
  texto: "Conversación de 30 minutos, sin compromiso, sobre los sistemas térmicos y de fluidos de su planta."
  label: "Agendar conversación (sin compromiso)"
  href: "whatsappCta"
colunas:
  - titulo: "Castillo Engenharia"
    paragrafos:
      - "Diagnóstico, optimización, análisis de desempeño y solución de problemas en sistemas térmicos y de fluidos."
      - "CREA-PJ 92764 · Responsable técnico: Ing. Mecánico Fernando Enrique Castillo Vicencio, CREA-PR 234812/D · ART cuando el servicio lo exija (Ley 6.496/1977)"
  - titulo: "Navegación"
    links:
      - { label: "Inicio", href: "/" }
      - { label: "Metodología", href: "/methodology" }
      - { label: "Inversión", href: "/prices" }
      - { label: "Artículos técnicos", href: "/articles" }
      - { label: "Política de Privacidad (LGPD)", href: "/privacy-lgpd" }
  - titulo: "Contacto"
    itens:
      - item: "Atención remota — Brasil y América del Sur"
      - { tipo: "email", label: "contato@castilloengenharia.com.br" }
      - { tipo: "whatsapp", label: "(41) 9 3300-9505" }
      - item: "CNPJ: 67.015.526/0001-16"
      - item: "CEP: 81.510-210 — Curitiba/PR — Brasil"
copyright: "© 2026 Castillo Engineering LTDA. Todos los derechos reservados."
---
