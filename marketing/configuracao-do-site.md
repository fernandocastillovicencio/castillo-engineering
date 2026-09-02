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
sobre: "Configuração global do site: URL, WhatsApp, contatos, CNPJ/CREA, textos do header, botão WhatsApp e dados do Schema.org. NÃO edite sem orientação do dev."
siteUrl: "https://castilloeng.com.br"
formspree:
  endpoint: "https://formspree.io/f/mqernvvb"
a11y:
  skipLink: "Pular para o conteúdo"
header:
  logoAlt: "Logo da Castillo Engenharia - Engenharia de Fluidos e Térmica Industrial"
  logoAria: "Castillo Engenharia — página inicial"
  ctaWhatsAppMobile: "WhatsApp"
  ctaWhatsAppMobileAria: "Conversar no WhatsApp"
  ctaPrincipalMobile: "Agendar conversa"
  ctaPrincipalDesktop: "Agendar conversa (sem compromisso)"
whatsapp:
  number: "5541933009505"
  mensagemAgendar: "Olá, vi o site da Castillo Engenharia e gostaria de agendar uma conversa de 30 minutos sobre um possível problema térmico na minha planta. Pode me ajudar?"
  mensagem404: "Olá, encontrei um link quebrado no site da Castillo Engenharia."
whatsappButton:
  ariaLabel: "Conversa de 30 minutos, sem compromisso"
  textoDesktop: "Entre em contato, sem compromisso"
meta:
  descriptionDefault: "Engenharia de fluidos e térmica industrial: encontre onde sua planta perde calor, vapor, frio e dinheiro. Conversa de 30 minutos, sem compromisso."
contato:
  email: "contato@castilloeng.com.br"
  telefone: "+55-41-93300-9505"
  cnpj: "67.015.526/0001-16"
  cep: "81.510-210 — Curitiba/PR — Brasil"
institucional:
  nomeFantasia: "Castillo Engenharia"
schemaOrg:
  "@type": ["ProfessionalService", "LocalBusiness"]
  legalName: "Castillo Engineering LTDA"
  description: "Engenharia de fluidos e térmica. Diagnóstico e análise de desempenho de vapor, condensado, refrigeração, bombas e secagem; conformidade NR-13/NR-36."
  addressLocality: "Curitiba"
  addressRegion: "PR"
  postalCode: "81510-210"
  addressCountry: "BR"
  areaServed: ["Brasil", "América do Sul"]
  knowsAbout: ["Engenharia de fluidos e térmica", "Eficiência energética", "Análise de desempenho térmico", "Diagnóstico de vapor e condensado", "Sistemas de bombeamento", "Sistemas de refrigeração", "Secagem industrial", "NR-13", "NR-36"]
---