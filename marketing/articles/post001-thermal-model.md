---
title: "Medição em campo e modelo seção a seção: 70% menos ganho de calor na linha, 2,4 °C a menos na saída"
date: 2026-10-07
autor: "Fernando Castillo Vicencio"
resumo: "Medição em campo, cálculo, modelo térmico 1D ajustado seção a seção e proposta de isolamento: o ganho da rota cai de 3,4 °C para 1,0 °C e a saída, de 32,4 °C para 30,0 °C no dia extremo."
capa: "/images/articles/post001-thermal-model/thumbnail.avif"
og: "/images/articles/post001-thermal-model/og.jpg"
cta:
  label: "Agendar conversa (sem compromisso)"
  href: "whatsappCta"
seo:
  title: "70% menos ganho de calor: medição em campo e modelo seção a seção"
  description: "Medição em campo e modelo 1D ajustado seção a seção: o ganho da rota cai de 3,4 °C para 1,0 °C, cerca de 70% menos, e a saída, no dia extremo, de 32,4 °C para 30,0 °C."
sobre: "Caso real anonimizado: insumo em aquecimento numa linha de transporte pneumático, com empedramento no silo. Medição de campo, modelo térmico 1D ajustado seção a seção, extrapolação para o dia extremo e proposta de isolamento."
---

Nestas últimas semanas, um cliente nos procurou com um problema térmico industrial que não estava conseguindo resolver.

## O problema

A planta do cliente é uma indústria de produção de alimentos, onde várias linhas de produtos diferentes operam ao mesmo tempo. Uma das principais linhas de transporte pneumático de insumo, em tubo de aço inoxidável, percorre aproximadamente 150 metros no nível superior da instalação, de uma sala a outra, com 4 vãos a céu aberto, ficando exposta à intempérie e ao calor residual de outros equipamentos, gerando degradação termo-higroscópica — o calor e a umidade fazem o produto aglutinar e empedrar.

Para atenuar ou evitar este problema, os engenheiros do cliente instalaram uma cobertura sobre a linha. A cobertura reduziu a radiação solar direta, mas ela própria aquece e irradia sobre o tubo, e o problema não estava resolvido: o produto continuava a apresentar degradação termo-higroscópica.

<figure>

<img src="/images/articles/post001-thermal-model/render-panel.avif" alt="Representação da linha e da cobertura, em quatro vistas." width="2576" height="1308" loading="lazy" decoding="async"/>

<figcaption>Representação da linha e da cobertura, em quatro vistas.</figcaption>

</figure>

A temperatura de entrada do insumo, informada pela planta e confirmada na medição de campo, é de aproximadamente 29 °C, sem pré-resfriamento.

A empresa deseja evitar ou diminuir este efeito termo-higroscópico do produto durante o transporte, que se manifesta por aglutinação, empedramento e possível entupimento do silo receptor.

<figure>

<img src="/images/articles/post001-thermal-model/product-degradation.avif" alt="Representação do produto aglutinado no silo, sem e com degradação termo-higroscópica." width="1024" height="559" loading="lazy" decoding="async"/>

<figcaption>Representação do produto aglutinado no silo, sem e com degradação termo-higroscópica.</figcaption>

</figure>

## O que o cliente precisa

Assim, o cliente nos procurou com a finalidade de resolver este problema, solicitando:

- O sistema que diminuirá ou atenuará a degradação termo-higroscópica.

- A previsão da temperatura com a qual o produto sairá da linha.

- Como ficarão as temperaturas no dia extremo do ano?

O escopo do trabalho é a tubulação, da entrada à saída da linha: a temperatura de entrada é a condição de contorno do estudo, não uma variável de projeto.

O produto tem uma faixa de recebimento definida para a chegada ao silo — é contra ela que os resultados deste artigo são comparados.

## Qual foi a estratégia traçada?

Como engenheiros, precisamos ser não somente teórico mas, antes de tudo, resolver os problemas da vida real. Na indústria, quando a urgência do cliente é alta, não adianta montar uma estratégia muito detalhada, como a simulação CFD 3D de toda a linha: o engenheiro deve conhecer as ferramentas e priorizar a solução. Foi o que fizemos aqui: dois dias de medição em campo e um modelo térmico unidimensional, em vez de CFD em 150 metros de tubulação.

Assim, após reuniões com o cliente, pode-se estabelecer uma estratégia que inclua:

- Estabelecer os pontos de medição de acordo com a viabilidade da planta.

- Medir as temperaturas nessas seções ao longo da linha em dois dias típicos (de preferência quentes), junto com as temperaturas superficiais e o ambiente de referência.

- Elaborar um modelo unidimensional da linha.

- Extrapolar esse modelo para o dia extremo (temperatura de projeto ASHRAE ou a pedido do cliente), com previsão de temperatura em cada seção de medição.

- Elaborar a estratégia de redução da transferência de calor entre a tubulação e o ambiente ao redor.

- Especificar a solução e prever as temperaturas no dia extremo adotado.

## O modelo

O modelo foi desenvolvido com os conceitos básicos de Transferência de Calor: foi estabelecido um balanço linear em cada seção de medição:

$$
q_{sol} + q_{rad} + q_{conv} = q_{\text{líquido}}
$$

<figure class="figure-narrow">

<img src="/images/articles/post001-thermal-model/fig-section-balance.svg" alt="O balanço, termo a termo, na seção do tubo." width="601" height="635" loading="lazy" decoding="async"/>

<figcaption>O balanço, termo a termo, na seção do tubo.</figcaption>

</figure>

O coeficiente convectivo adota o maior valor entre a convecção natural e a forçada. O modelo foi calibrado com as medições de superfície de campo, feitas com pirômetro de infravermelho — que lê a temperatura aparente, dependente da emissividade da superfície.

<figure>

<img src="/images/articles/post001-thermal-model/fig-calibration.svg" alt="O modelo contra a medição de campo, seção por seção." width="1229" height="691" loading="lazy" decoding="async"/>

<figcaption>O modelo contra a medição de campo, seção por seção.</figcaption>

</figure>

A marcha térmica do produto é integrada em cada ponto de medição com base no balanço de energia:

$$
\Delta T = \sum \frac{q \cdot L}{\dot{m} \cdot c_p}
$$

<figure>

<img src="/images/articles/post001-thermal-model/fig-thermal-march.svg" alt="O ganho de cada metro somando ao longo do produto." width="758" height="413" loading="lazy" decoding="async"/>

<figcaption>O ganho de cada metro somando ao longo do produto.</figcaption>

</figure>

Os dados de processo do cliente não são divulgados: os resultados aparecem em temperatura e em ganho de calor por metro. Ficam fora do modelo o efeito do ar de transporte e as condições de umidade.

Foram identificados os pontos críticos: o ganho de calor se concentra nos trechos sem sombra, e o pico está na seção E, no meio da linha. Nas seções abrigadas o saldo cai, e uma delas é negativa: a tubulação perde calor para o ambiente. A figura traz o saldo do modelo, seção por seção: das 12 seções instrumentadas, 10 entraram na calibração — as seções D e J ficaram em quarentena (carga baixa) e a E foi aceita com a ressalva do viés do pirômetro.

<figure>

<img src="/images/articles/post001-thermal-model/fig-balance-per-section.svg" alt="O saldo do modelo, seção por seção." width="1229" height="690" loading="lazy" decoding="async"/>

<figcaption>O saldo do modelo, seção por seção.</figcaption>

</figure>

## O dia extremo

O ASHRAE Handbook (edição SI de 2017) indica 28,8 °C como temperatura de projeto (0,4 %) para a região. Por conta do El Niño, o cliente nos solicitou um dia extremo de 34,9 °C, acima da temperatura de projeto indicada pela norma.

O modelo, desenvolvido e calibrado no dia medido, é agora extrapolado para o dia extremo: a 34,9 °C a rota passa a adicionar 3,4 °C ao produto.

Os resultados são médias de 20 000 cenários por trecho de tubulação: na carga de referência a dispersão (p5–p95) é de cerca de ±0,3 °C e chega a ±0,6 °C nas cargas menores. O coeficiente convectivo interno adotado foi 25 W/(m²·K), o mais baixo dos três avaliados.

<figure>

<img src="/images/articles/post001-thermal-model/fig-march-compare.svg" alt="O dia medido e o dia extremo, nas mesmas seções." width="922" height="518" loading="lazy" decoding="async"/>

<figcaption>O dia medido e o dia extremo, nas mesmas seções.</figcaption>

</figure>

## As opções de isolamento

Após reunião com os engenheiros de planta, foram avaliados dois isolantes: poliuretano (PUR) e espuma elastomérica (FEF), de 1" a 3".

Para cada um destes isolantes, o modelo foi avaliado em cada espessura na temperatura do dia extremo:

- Para o PUR, com chapa de aço inoxidável.

- Para a FEF, com pintura branca.

As condutividades adotadas são 0,032 W/(m·K) para o PUR e 0,038 W/(m·K) para a FEF.

<figure>

<img src="/images/articles/post001-thermal-model/fig-pur-insulation.svg" alt="Perfil da linha sem isolante e com PUR em quatro espessuras, no dia extremo." width="1055" height="498" loading="lazy" decoding="async"/>

<figcaption>O perfil da linha sem isolante e com PUR de 1", 1½", 2" e 3", no dia extremo.</figcaption>

</figure>

No entanto, a diferença entre os dois ainda é pequena. Falta avaliar a variação de carga: a medição foi feita com a linha na carga de referência (100 %), e com menos produto na linha o tempo de residência aumenta. No sistema sem isolamento, a elevação cresce quando a carga cai: na menor carga avaliada, 20 %, o produto sai a 34,6 °C, contra 32,4 °C na carga de referência. Com o PUR de 1½" e essa mesma carga, a saída fica em 32,8 °C, que é o pior caso de operação.

<figure>

<img src="/images/articles/post001-thermal-model/fig-pur-outlet.svg" alt="Temperatura de saída com PUR em cada espessura e carga." width="989" height="616" loading="lazy" decoding="async"/> <img src="/images/articles/post001-thermal-model/fig-fef-outlet.svg" alt="Temperatura de saída com FEF em cada espessura e carga." width="989" height="616" loading="lazy" decoding="async"/>

<figcaption>Comparação de cargas: saída com PUR (acima) e com FEF (abaixo).</figcaption>

</figure>

Novamente, os dois isolantes têm um comportamento similar para diferentes cargas; sendo assim, utilizamos mais um critério para escolher a melhor opção.

Pelo método do cotovelo, observa-se que as espessuras onde a diferença de temperatura residual ainda é relevante estão em torno de 1½" a 2" de isolante térmico. Com o PUR, de 1½" para 3" ganha-se menos de 0,3 °C na carga de referência, com o dobro do material.

## Escolhendo o melhor isolante

No desempenho térmico os dois conjuntos praticamente empatam; a escolha se decide pela manutenção. A FEF exige repintura periódica, enquanto a chapa de aço do PUR se lava e se inspeciona. Por isso o PUR de 1½" é o escolhido.

<figure>

<img src="/images/articles/post001-thermal-model/pipe_insulation.avif" alt="A opção escolhida: PUR de 1½ polegadas com chapa de aço inoxidável." width="1024" height="559" loading="lazy" decoding="async"/>

<figcaption>A opção escolhida: PUR de 1½" com chapa de aço inoxidável.</figcaption>

</figure>

Assim, define-se a melhor solução e modela-se a temperatura do produto em cada seção de medição, para cada carga, já com o isolamento escolhido.

<figure>

<img src="/images/articles/post001-thermal-model/fig-load-range.svg" alt="Com o PUR de 1½ polegadas: temperatura do produto em cada seção de medição, para cada carga." width="1056" height="519" loading="lazy" decoding="async"/>

<figcaption>Com o PUR de 1½": temperatura do produto em cada seção de medição, para cada carga — a carga mínima (20 %) é o pior caso.</figcaption>

</figure>

Com o PUR de 1½" e a linha na carga de referência, a saída fica em 30,0 °C no dia extremo de 34,9 °C, contra 32,4 °C sem isolamento. A saída continua acima do limite superior da faixa, e nenhuma espessura cobre essa diferença: para a saída cruzar o limite, a temperatura de entrada teria de ser cerca de 7 °C mais baixa na carga de referência — e ainda mais nas cargas menores.

Cobrir os 4 vãos a céu aberto, os únicos sem cobertura, é uma medida adicional, de efeito menor que o do isolamento.

## Conclusão

Hoje, sem isolamento, a rota soma 3,4 °C e o produto chega ao silo a 32,4 °C no dia extremo.

Com o sistema proposto, o PUR de 1½" com chapa de aço inoxidável nos trechos cobertos, a rota soma 1,0 °C e, na carga de referência, a saída fica em 30,0 °C: 2,4 °C menos do que hoje. Na menor carga do envelope avaliado, o pior caso, a saída sobe para 32,8 °C, ainda fora da faixa. Como alternativa, a FEF de 2" pintada de branco sai a 30,1 °C.

O modelo entrega a temperatura prevista em cada seção de medição, e não apenas a escolha do material.

O isolamento proposto reduz o ganho da rota de 3,4 °C para 1,0 °C, cerca de 70% menos, e leva a saída, no dia extremo, de 32,4 °C para 30,0 °C. O modelo entrega a temperatura prevista em cada seção de medição, e não apenas a escolha do material: cada trecho foi avaliado em 20 000 cenários, com dispersão de ±0,3 °C (p5–p95) na carga de referência. A temperatura em que o produto empedra não foi medida; o critério adotado é a faixa de recebimento. Atuar sobre a temperatura de entrada do insumo é outro projeto — este estudo entrega o que a tubulação pode dar. Se a sua linha tem esse perfil, o caminho é o mesmo: medir em campo e decidir com o número.