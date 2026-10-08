---
# ═══════════════════════════════════════════════════════════════
# SEÇÃO "CONTATO" (o formulário)
# ═══════════════════════════════════════════════════════════════
# Para editar:
#   title → título da seção
#   intro → parágrafo abaixo do título
#   form.camposObrigatorios → os campos que o visitante precisa preencher
#   form.complementar → os campos opcionais (dentro de "Complementar")
#   botao → o texto do botão. NÃO troque o label
#           "Agendar conversa (sem compromisso)" — é padrão do site
#   confirmacao → o que aparece depois que o formulário é enviado
#
# MODELO DE CAMPO (obrigatório):
#   - nome: "nome"                 ← identificador (não mudar)
#     label: "Nome *"              ← texto que aparece no formulário
#     tipo: "text"                 ← text | tel | email | select | textarea
#     placeholder: "Seu nome"      ← texto cinza de exemplo
#     required: true               ← true = obrigatório | false = opcional
#
# ⚠️ Para campos "select", precisa da linha "opcoes:"
#    com as opções entre colchetes [ ], separadas por vírgula:
#    opcoes: ["Opção 1", "Opção 2"]
# ⚠️ Não mude os "nome:" — são técnicos (usados no envio).
# ═══════════════════════════════════════════════════════════════
sobre: "Sección CONTACTO: formulario reducido (3 campos obligatorios), aviso LGPD, botón y confirmación."
title: "Agende su conversación (30 min, sin costo)."
intro: "Sin documento, sin costo, sin compromiso — usted cuenta el problema, nosotros mostramos lo que está ocurriendo."
form:
  assunto: "Nuevo contacto — sitio Castillo Engenharia"
  camposObrigatorios:
    - nome: "nome"
      label: "Nombre *"
      tipo: "text"
      placeholder: "Su nombre"
      required: true
    - nome: "whatsapp"
      label: "WhatsApp *"
      tipo: "tel"
      placeholder: "(41) 9xxxx-xxxx"
      required: true
    - nome: "dor_principal"
      label: "Problema principal *"
      tipo: "select"
      placeholder: "Seleccione"
      opcoes: ["Vapor", "Refrigeración", "Bombas", "Secado", "Aire comprimido", "No sé — quiero entender", "Otro"]
      required: true
  complementar:
    titulo: "Complementario (opcional)"
    campos: []
avisoLgpd:
  antes: "Al enviar, usted acepta el tratamiento de los datos con fines de diagnóstico, conforme a la "
  linkLabel: "Política de Privacidad (LGPD)"
  linkHref: "/privacy-lgpd"
botao: "Agendar conversación (sin compromiso)"
botaoEnviando: "Enviando..."
erroEnvio: "No fue posible enviar. Intente nuevamente o hable directo por WhatsApp."
confirmacao:
  titulo: "Recibimos su contacto."
  texto: "Nos pondremos en contacto en un plazo de hasta 24 h hábiles. Mientras tanto, vea cómo encontramos dónde su planta pierde calor, vapor, frío y dinero."
  link:
    href: "/methodology"
    rotulo: "Ver nuestro método →"
whatsappDireto:
  antes: "¿Prefiere conversar directo? "
  linkLabel: "Hable por WhatsApp"
---
