---
# ═══════════════════════════════════════════════════════════════
# PÁGINA /prices — INVESTIMENTO (página separada)
# ═══════════════════════════════════════════════════════════════
# Diferença da seção "Investimento" na home: esta página mostra
# as etapas detalhadas + 3 cards de projeto + "Como precificamos".
#
# Para editar:
#   h1 → título principal da página
#   intro → parágrafo abaixo do título
#   etapas → 4 etapas numeradas. Cada etapa começa com "- numero:"
#   comoPrecificamos → bloco com 3 pontos + texto de risco
#   cta → botão no fim. NÃO troque o label
#         "Agendar conversa (sem compromisso)" — é padrão do site
#
# MODELO DE ETAPA:
#   - numero: 1                        ← número da etapa (1 a 4)
#     titulo: "Título da etapa"
#     texto: "Descrição da etapa"
#     destaque: false                  ← true = card azul | false = normal
#     textoDestaque: "Texto extra"     ← OPCIONAL (só se tiver)
#     prazo: "Prazo: 5–10 dias"        ← OPCIONAL (só se tiver prazo)
#     cards:                           ← OPCIONAL (só na etapa 4)
#       - nome: "Básico"
#         texto: "Descrição do card"
#     nota: "Nota no rodapé"           ← OPCIONAL
#
# ⚠️ "textoDestaque", "prazo", "cards" e "nota" são opcionais.
#    Se não existirem, apague essas linhas.
# ═══════════════════════════════════════════════════════════════
sobre: "Página /prices - INVESTIMENTO: intro, 4 etapas, 3 cards de projeto e Como precificamos."
prazoLabel: "Prazo:"
seo:
  title: "Investimento em Eficiência Energética | Castillo Engenharia"
  description: "Investimento definido na proposta, após analisarmos os seus dados. Conversa de 30 minutos, sem compromisso."
h1: "Investimento"
intro: "Preferimos entender o seu problema antes de falar de números. O valor é definido na proposta, depois da análise — cada planta é um caso."
etapas:
  - numero: 1
    titulo: "Conversa de diagnóstico"
    texto: "30 minutos: você conta o contexto, o problema e o resultado esperado."
    destaque: false
  - numero: 2
    titulo: "Proposta de Serviço"
    texto: "Analisamos os dados que você fornecer (faturas, registros de operação) e enviamos a proposta: escopo, prazo e investimento — em 3–5 dias úteis após o envio dos dados. Sem cobrança pela proposta."
    destaque: false
  - numero: 3
    titulo: "Diagnóstico aprofundado"
    texto: "1 sistema (vapor, refrigeração ou bombas), medição pontual não intrusiva e linha de base com fatura + acordo de confidencialidade. "
    textoDestaque: "Abatido no plano de melhoria."
    prazo: "5–10 dias úteis de análise."
    destaque: true
  - numero: 4
    titulo: "Plano de melhoria — escopo, prazo e investimento na proposta"
    cards:
      - nome: "Básico"
        texto: "Escopo pontual: 1 sistema, solução dimensionada e plano de ação."
      - nome: "Médio"
        texto: "2–3 sistemas integrados, com orientação técnica remota."
      - nome: "Completo"
        texto: "Plano multissistema com verificação de resultado e linha de base contratual."
    nota: "ART (Anotação de Responsabilidade Técnica) quando o serviço exigir · Projetos enquadráveis em linhas Finep/Embrapii são avaliados caso a caso."
    destaque: false
comoPrecificamos:
  titulo: "Como precificamos"
  pontos:
    - destaque: "No começo — hora de engenharia com teto:"
      texto: "você conhece o limite máximo antes de começar."
    - destaque: "Quando a economia é verificada — fixo por escopo:"
      texto: "a economia é medida e reportada contra a fatura."
    - destaque: "Sem bônus:"
      texto: "o alinhamento de interesses é a verificação de resultado."
  risco: "O risco de comprar caro é baixo: o investimento só é definido na proposta, depois de analisarmos o seu caso e os seus dados. O risco de não fazer nada é a fatura de energia poder subir no próximo reajuste."
cta:
  label: "Agendar conversa (sem compromisso)"
  href: "/#contato"
---