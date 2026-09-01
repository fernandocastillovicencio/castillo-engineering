---
# ═══════════════════════════════════════════════════════════════
# SEÇÃO "O QUE RESOLVEMOS" (aparece na página inicial)
# ═══════════════════════════════════════════════════════════════
# Para editar:
#   title   → o título grande da seção
#   intro   → o parágrafo logo abaixo do título
#   camadas → os blocos de problemas (veja o modelo abaixo)
#
# ⚠️ IMPORTANTE:
#   • As linhas que começam com # são só explicações — pode ignorar.
#   • Respeite a INDENTAÇÃO: os traços (-) e os espaços precisam ficar
#     exatamente como estão. Use a barra de espaço, não a tecla Tab.
#   • Texto entre aspas " " — não apague as aspas.
#   • Para ADICIONAR um item novo: copie um bloco de 3 linhas (- dor:
#     sintoma: impacto:) e cole logo abaixo, na mesma posição.
#   • Para REMOVER um item: apague as 3 linhas dele.
# ═══════════════════════════════════════════════════════════════
sobre: "Seção O QUE RESOLVEMOS: 4 camadas (energia, operação, projetos, conformidade) com dores, sintomas e impactos."
title: "O que resolvemos"
intro: "Estimamos o impacto financeiro/operacional do problema, fornecemos uma ou mais soluções, e estimamos a diferença entre o antes e o depois."

# ───────────────────────────────────────────────────────────────
# CAMADAS = os blocos de problemas. Cada bloco começa com "- titulo:"
# Há 2 tipos de bloco:
#
#   tipo: "dores"  → lista de 3 colunas (problema / o que acontece / impacto)
#   tipo: "chips"  → lista de tags simples (uma por linha, entre aspas)
#
# MODELO DO BLOCO "dores":
#   - titulo: "Nome do bloco"
#     subtitulo: "— explicação curta"
#     tipo: "dores"
#     itens:
#       - dor: "O problema"            ← 1ª coluna (negrito)
#         sintoma: "O que acontece"    ← 2ª coluna
#         impacto: "Quanto custa"      ← 3ª coluna (laranja)
#
# MODELO DO BLOCO "chips":
#   - titulo: "Nome do bloco"
#     subtitulo: "— explicação curta"
#     tipo: "chips"
#     itens:
#       - item: "Item 1"
#       - item: "Item 2"
#     notaTitulo: "Texto em destaque:"   ← opcional
#     nota: "explicação extra"           ← opcional
# ───────────────────────────────────────────────────────────────
camadas:
  - titulo: "Eficiência Energética"
    subtitulo: "— Redução de custos e da fatura de energia"
    tipo: "dores"
    itens:
      - dor: "Vapor e caldeiras"
        sintoma: "A caldeira queima mais do que deveria para o vapor que produz; purga excessiva"
        impacto: "10–25% do combustível = R$ 5–40 mil/mês"
      - dor: "Recuperação de calor"
        sintoma: "Condensado e gases quentes descartados"
        impacto: "10–20% do combustível da caldeira"
      - dor: "Refrigeração com COP baixo"
        sintoma: "Consumo elétrico alto por tonelada refrigerada"
        impacto: "+15–30% da energia de refrigeração"
      - dor: "Bombas fora do ponto"
        sintoma: "Rendimento baixo; estrangulamento"
        impacto: "10–20% do consumo de bombeamento"
      - dor: "Secagem"
        sintoma: "Ciclo longo; produto fora do padrão"
        impacto: "R$ 5–30 mil/mês"
  - titulo: "Otimização operacional"
    subtitulo: "— evitar paradas, melhorar a qualidade do processo e do produto"
    tipo: "dores"
    itens:
      - dor: "Golpe de aríete"
        sintoma: "Batidas na tubulação; ruptura de conexões"
        impacto: "R$ 10–80 mil/evento"
      - dor: "Incrustação em trocadores/evaporadores"
        sintoma: "Perde eficiência; lavagens frequentes"
        impacto: "R$ 10–80 mil/evento"
      - dor: "Cavitação em bombas"
        sintoma: "Vibração; desgaste do rotor"
        impacto: "R$ 5–30 mil/ano"
      - dor: "Vazamentos (vapor, gás, amônia)"
        sintoma: "Fugas visíveis; reposição alta"
        impacto: "R$ 2–15 mil/mês + risco de segurança"
      - dor: "Temperatura de processo fora de especificação"
        sintoma: "Refugo; retrabalho; lote perdido"
        impacto: "R$ 5–50 mil/mês"
      - dor: "Ar comprimido desperdiçado"
        sintoma: "Vazamentos; pressão alta demais"
        impacto: "10–30% do consumo de ar comprimido"
  - titulo: "Projetos e engenharia"
    subtitulo: "— do dimensionamento ao projeto"
    tipo: "chips"
    itens:
      - item: "Dimensionamento de trocadores"
      - item: "Projeto de redes de vapor e retorno de condensado"
      - item: "Seleção de bombas"
      - item: "Retrofit de refrigeração"
      - item: "Simulação CFD (análise de fluidos e térmica)"
    notaTitulo: "Escopo realista:"
    nota: "começamos pelo que está ao alcance imediato — onde o retorno aparece mais rápido."
  - titulo: "Conformidade e segurança"
    subtitulo: "Regularize sua operação sem parar a produção — laudos técnicos, inspeção e conformidade normativa."
    tipo: "chips"
    itens:
      - item: "NR-13 (caldeiras, vasos de pressão e tubulações)"
      - item: "NR-36 (abatedouros) · amônia (NBR 16069)"
      - item: "NR-20 (gás natural e GLP)"
      - item: "NR-33 (espaços confinados)"
      - item: "Laudos e planos de inspeção (NBR 12177)"
      - item: "ART quando o serviço exigir (projetos, laudos, NR-13)"
---
