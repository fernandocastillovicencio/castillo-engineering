---
# ═══════════════════════════════════════════════════════════════
# CONFIGURAÇÃO GLOBAL DO SITE
# ═══════════════════════════════════════════════════════════════
# ⚠️  ALTERE APENAS SE SOUBER O QUE ESTÁ FAZENDO  ⚠️
#     Erro aqui pode quebrar o site inteiro.
#
# O que você PODE editar com segurança:
#   siteUrl → se o domínio mudar
#   whatsapp.number → se o número mudar
#   contato.email/telefone → contatos da empresa
#   meta.descriptionDefault → texto que aparece no Google
#   header.ctaPrincipalDesktop/Mobile → textos dos botões do topo
#     (mas NÃO troque "Agendar conversa (sem compromisso)" — é padrão)
#   whatsappButton.textoDesktop → texto do botão WhatsApp flutuante
#   whatsapp.mensagemAgendar → mensagem pré-preenchida do WhatsApp
#   institucional.nomeFantasia → nome da empresa
#   schemaOrg → dados técnicos para o Google (address, knowsAbout, etc.)
#
# ⚠️ NÃO MEXA em:
#   formspree.endpoint → URL do formulário (quebra o contato)
#   a11y → acessibilidade (skip link)
# ═══════════════════════════════════════════════════════════════
sobre: "Configuración global del sitio: URL, WhatsApp, contactos, CNPJ/CREA, textos del header, botón WhatsApp y datos del Schema.org. NO editar sin orientación del dev."
siteUrl: "https://castilloengenharia.com.br"
formspree:
  endpoint: "https://formspree.io/f/mqernvvb"
a11y:
  skipLink: "Saltar al contenido"
header:
  logoAlt: "Logo de Castillo Engenharia - Ingeniería de Fluidos y Térmica Industrial"
  logoAria: "Castillo Engenharia — página de inicio"
  navArtigos: "Artículos técnicos"
  ctaWhatsAppMobile: "WhatsApp"
  ctaWhatsAppMobileAria: "Conversar por WhatsApp"
  ctaPrincipalMobile: "Agendar conversación"
  ctaPrincipalDesktop: "Agendar conversación (sin compromiso)"
whatsapp:
  number: "5541933009505"
  mensagemAgendar: "Hola, vi el sitio de Castillo Engenharia y quisiera agendar una conversación de 30 minutos sobre un posible problema térmico en mi planta. ¿Puede ayudarme?"
  mensagemCta: "Hola, tengo un problema térmico o de fluidos en la planta"
  mensagem404: "Hola, encontré un enlace roto en el sitio de Castillo Engenharia."
whatsappButton:
  ariaLabel: "Conversación de 30 minutos, sin compromiso"
  textoDesktop: "Contáctenos, sin compromiso"
meta:
  descriptionDefault: "Diagnóstico, optimización y análisis de desempeño en sistemas térmicos y de fluidos — verificando el resultado contra la factura. Conversación de 30 minutos, sin compromiso."
contato:
  email: "contato@castilloengenharia.com.br"
  telefone: "+55-41-93300-9505"
  cnpj: "67.015.526/0001-16"
  cep: "81.510-210 — Curitiba/PR — Brasil"
institucional:
  nomeFantasia: "Castillo Engenharia"
schemaOrg:
  "@type": ["ProfessionalService", "LocalBusiness"]
  legalName: "Castillo Engineering LTDA"
  description: "Ingeniería de fluidos y térmica industrial: diagnóstico, optimización y análisis de desempeño en sistemas térmicos y de fluidos, con verificación de resultado contra la factura."
  addressLocality: "Curitiba"
  addressRegion: "PR"
  postalCode: "81510-210"
  addressCountry: "BR"
  areaServed: ["Brasil", "América del Sur"]
  knowsAbout: ["Ingeniería de fluidos y térmica", "Eficiencia energética industrial", "Análisis de desempeño térmico", "Diagnóstico de vapor y condensado", "Refrigeración industrial por amoníaco (NBR 16069)", "COP y desempeño de refrigeración", "Sistemas de bombeo", "Secado industrial", "Verificación de ahorro de energía", "NR-13", "NR-36"]
---
