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
sobre: "Seção CONTATO: formulário completo (campos obrigatórios, complementares, aviso LGPD, botão e confirmação)."
title: "Agende sua conversa."
intro: "Sem documento, sem dado sensível, sem compromisso. Você conta o problema — nós encontramos o que está acontecendo e mostramos o caminho."
form:
  assunto: "Novo contato — site Castillo Engenharia"
  camposObrigatorios:
    - nome: "nome"
      label: "Nome *"
      tipo: "text"
      placeholder: "Seu nome"
      required: true
    - nome: "whatsapp"
      label: "WhatsApp *"
      tipo: "tel"
      placeholder: "(41) 9xxxx-xxxx"
      required: true
    - nome: "dor_principal"
      label: "Problema principal *"
      tipo: "select"
      placeholder: "Selecione"
      opcoes: ["Vapor", "Refrigeração", "Bombas", "Secagem", "Ar comprimido", "Outro"]
      required: true
  complementar:
    titulo: "Complementar (opcional)"
    campos:
      - nome: "empresa"
        label: "Empresa"
        tipo: "text"
        placeholder: "Nome da sua empresa"
      - nome: "email"
        label: "E-mail"
        tipo: "email"
        placeholder: "voce@empresa.com.br"
      - nome: "cargo"
        label: "Cargo"
        tipo: "text"
        placeholder: "Ex.: gerente de manutenção"
      - nome: "cidade"
        label: "Cidade/UF (ou país)"
        tipo: "text"
        placeholder: "Ex.: Castro/PR — ou país, se América do Sul"
      - nome: "setor"
        label: "Setor"
        tipo: "select"
        placeholder: "Selecione (opcional)"
        opcoes: ["Laticínios", "Cervejarias", "Frigoríficos", "Usinas de cana", "Madeira e móveis", "Papel e celulose", "Química", "Têxtil", "Avícola", "Outro"]
      - nome: "problema"
        label: "Problema (opcional)"
        tipo: "textarea"
        rows: 2
        placeholder: "ex.: consumo de vapor acima do esperado, entupimentos recorrentes, variação de qualidade na secagem..."
avisoLgpd:
  antes: "Ao enviar, você concorda com o tratamento dos dados para fins de diagnóstico, conforme a "
  linkLabel: "Política de Privacidade (LGPD)"
  linkHref: "/privacy-lgpd"
botao: "Agendar conversa (sem compromisso)"
botaoEnviando: "Enviando..."
erroEnvio: "Não foi possível enviar. Tente novamente ou fale direto no WhatsApp."
confirmacao:
  titulo: "Recebemos seu contato."
  texto: "Entraremos em contato em até 24h úteis. Enquanto isso, veja como encontramos onde sua planta perde calor, vapor, frio e dinheiro."
  link:
    href: "/methodology"
    rotulo: "Ver nosso método →"
whatsappDireto:
  antes: "Prefere conversar direto? "
  linkLabel: "Fale no WhatsApp"
---
