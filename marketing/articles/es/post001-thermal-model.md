---
title: "Transporte neumático con problemas de calentamiento: cómo resolvimos el problema y redujimos hasta en 70% la ganancia térmica"
date: 2026-10-07
autor: "Fernando Castillo Vicencio"
resumo: "Proceso detallado de cómo conseguimos reducir la ganancia térmica del insumo fundamental mediante modelamiento térmico"
capa: "/images/articles/post001-thermal-model/thumbnail.avif"
og: "/images/articles/post001-thermal-model/og.jpg"
cta:
  label: "Agendar conversación (sin compromiso)"
  href: "whatsappCta"
seo:
  title: "Problema térmico en el transporte neumático de insumo fundamental en una planta, ganancias térmicas de hasta 70 %"
  description: "Degradación termo-higroscópica del insumo y empedramiento en el silo, en una línea de transporte neumático de 150 m. Medición de campo, modelo 1D ajustado sección a sección y propuesta de aislamiento."
sobre: "Caso real anonimizado: insumo en calentamiento en una línea de transporte neumático, con empedramiento en el silo. Medición de campo, modelo térmico 1D ajustado sección a sección, extrapolación para el día extremo y propuesta de aislamiento."
---

En estas últimas semanas, un cliente nos buscó con un problema térmico industrial que no estaba consiguiendo resolver.

## El problema

La planta del cliente es una industria de producción de alimentos, donde varias líneas de productos diferentes operan al mismo tiempo. Una de las principales líneas de transporte neumático de insumo, en tubo de acero inoxidable, recorre aproximadamente 150 metros en el nivel superior de la instalación, de una sala a otra, con 4 vanos a cielo abierto, quedando expuesta a la intemperie y al calor de otros equipos, generando degradación termo-higroscópica, generando problemas operativos.

Para atenuar o evitar este problema, los ingenieros del cliente instalaron una cobertura sobre la línea. Esta cobertura o techo redujo la radiación solar, pero ella misma calienta e irradia sobre el tubo, y el problema no estaba resuelto: el producto continuaba presentando degradación termo-higroscópica.

<figure>

<img src="/images/articles/post001-thermal-model/render-panel.avif" alt="Representación de la línea y de la cobertura, en cuatro vistas." width="2576" height="1308" loading="lazy" decoding="async"/>

<figcaption>Representación de la línea y de la cobertura.</figcaption>

</figure>

La temperatura de entrada del insumo, informada por la planta y confirmada en la medición de campo, es de aproximadamente 29 °C, sin pre-enfriamiento.

La empresa desea evitar o disminuir este efecto termo-higroscópico del producto durante el transporte, que se manifiesta por aglutinamiento, empedramiento y posible obstrucción del silo receptor.

<figure>

<img src="/images/articles/post001-thermal-model/product-degradation.avif" alt="Representación del producto aglutinado en el silo, sin y con degradación termo-higroscópica." width="1024" height="559" loading="lazy" decoding="async"/>

<figcaption>Representación del producto aglutinado en el silo, sin y con degradación termo-higroscópica.</figcaption>

</figure>

## Lo que el cliente necesita

Así, el cliente nos buscó con la finalidad de resolver este problema, solicitando:

- El sistema que disminuirá o atenuará la degradación termo-higroscópica.

- La previsión de la temperatura con la cual el producto saldrá de la línea.

- ¿Cómo quedarán las temperaturas en el día extremo del año?

El alcance del trabajo es la tubería, de la entrada a la salida de la línea: la temperatura de entrada es la condición de contorno del estudio, no una variable de proyecto.

La base de temperatura fue definida por el cliente en 29 °C.

## ¿Cuál fue la estrategia trazada?

Como ingenieros, necesitamos ser no solamente teóricos sino, antes que todo, resolver los problemas de la vida real. En la industria, cuando la urgencia del cliente es alta, no sirve montar una estrategia muy detallada, como la simulación CFD 3D de toda la línea. El ingeniero debe conocer las herramientas y priorizar la solución de acuerdo con las necesidades del cliente. Fue lo que hicimos aquí: dos días de medición en campo y un modelo térmico unidimensional, en vez de CFD en 150 metros de tubería.

Así, después de reuniones con el cliente, se pudo establecer una estrategia que incluya:

- Establecer los puntos de medición de acuerdo con la viabilidad de la planta.

- Medir las temperaturas en esas secciones a lo largo de la línea en dos días típicos (de preferencia calurosos), junto con las temperaturas superficiales y el ambiente de referencia.

- Elaborar un modelo unidimensional de la línea.

- Extrapolar ese modelo para el día extremo (temperatura de proyecto ASHRAE o a pedido del cliente), con previsión de temperatura en cada sección de medición.

- Elaborar la estrategia de reducción de la transferencia de calor entre la tubería y el ambiente alrededor.

- Especificar la solución y prever las temperaturas en el día extremo adoptado (design-day).

## El modelo

El modelo fue desarrollado con los conceptos básicos de Transferencia de Calor, utilizando un balance de energía en cada sección de medición:

$$
q_{sol} + q_{rad} + q_{conv} = q_{\text{neto}}
$$

<figure class="figure-narrow">

<img src="/images/articles/post001-thermal-model/fig-section-balance.svg" alt="El balance, término a término, en la sección del tubo." width="601" height="635" loading="lazy" decoding="async"/>

<figcaption>El balance, término a término, en la sección del tubo.</figcaption>

</figure>

El coeficiente convectivo adopta el mayor valor entre la convección natural y la forzada (correlaciones de Churchill). El modelo fue calibrado con las mediciones de superficie de campo del techo y de la superficie de la tubería.

<figure>

<img src="/images/articles/post001-thermal-model/fig-calibration.svg" alt="El modelo contra la medición de campo, sección por sección." width="1229" height="691" loading="lazy" decoding="async"/>

<figcaption>El modelo contra la medición de campo, sección por sección.</figcaption>

</figure>

La marcha térmica del producto es integrada en cada punto de medición con base en el balance de energía:

$$
\Delta T = \sum \frac{q \cdot L}{\dot{m} \cdot c_p}
$$

<figure>

<img src="/images/articles/post001-thermal-model/fig-thermal-march.svg" alt="La ganancia de cada metro sumando a lo largo del producto." width="758" height="413" loading="lazy" decoding="async"/>

<figcaption>La ganancia de cada metro sumando a lo largo del producto.</figcaption>

</figure>

Los resultados son vistos en temperatura y en ganancia de calor por metro, considerando las simplificaciones adoptadas.

Fueron identificados los puntos críticos: la ganancia de calor se concentra en los tramos sin sombra, y el pico está en la sección E, en el medio de la línea. En las secciones con sombra el saldo de energía cae, y una de ellas es negativa: la tubería pierde calor hacia el ambiente, como puede ser visto en la figura.

<figure>

<img src="/images/articles/post001-thermal-model/fig-balance-per-section.svg" alt="El saldo del modelo, sección por sección." width="1229" height="690" loading="lazy" decoding="async"/>

<figcaption>El saldo del modelo, sección por sección.</figcaption>

</figure>

## El día extremo

El ASHRAE Handbook indica 28,8 °C como temperatura de proyecto para la ciudad analizada. Por cuenta del fenómeno de El Niño, el cliente nos solicitó un día extremo de 34,9 °C, por encima de la temperatura de proyecto indicada por la norma.

El modelo, desarrollado y calibrado en el día medido, es ahora extrapolado para el día extremo: a 34,9 °C la ruta pasa a adicionar 3,4 °C al producto.

<figure>

<img src="/images/articles/post001-thermal-model/fig-march-compare.svg" alt="El día medido y el día extremo, en las mismas secciones." width="922" height="518" loading="lazy" decoding="async"/>

<figcaption>El día medido y el día extremo, en las mismas secciones.</figcaption>

</figure>

## Las opciones de aislamiento

Después de reunión con los ingenieros de planta, fueron evaluados dos aislantes: poliuretano (PUR) y espuma elastomérica (FEF), de 1" a 3".

Para cada uno de estos aislantes, el modelo fue evaluado en cada espesor a la temperatura del día extremo:

- Para el PUR, con chapa de acero inoxidable.

- Para la FEF, con pintura blanca.

Las conductividades adoptadas son 0,032 W/(m·K) para el PUR y 0,038 W/(m·K) para la FEF.

<figure>

<img src="/images/articles/post001-thermal-model/fig-pur-insulation.svg" alt="Perfil de la línea sin aislante y con PUR en cuatro espesores, en el día extremo." width="1055" height="498" loading="lazy" decoding="async"/>

<figcaption>El perfil de la línea sin aislante y con PUR de 1", 1½", 2" y 3", en el día extremo.</figcaption>

</figure>

Sin embargo, la diferencia entre los dos todavía es pequeña. Otra evaluación fue el cambio de carga del insumo, que puede cambiar el tiempo de residencia de él en la tubería de 150 m y, por lo tanto, en la temperatura durante su transporte y en la salida, que es la temperatura más importante de todo este recorte de proceso.

<figure>

<img src="/images/articles/post001-thermal-model/fig-pur-outlet.svg" alt="Temperatura de salida con PUR en cada espesor y carga." width="989" height="616" loading="lazy" decoding="async"/> <img src="/images/articles/post001-thermal-model/fig-fef-outlet.svg" alt="Temperatura de salida con FEF en cada espesor y carga." width="989" height="616" loading="lazy" decoding="async"/>

<figcaption>Comparación de cargas: salida con PUR (arriba) y con FEF (abajo).</figcaption>

</figure>

Nuevamente, los dos aislantes tienen un comportamiento similar para diferentes cargas; siendo así, utilizamos un criterio más para escoger la mejor opción.

Por el método del codo, se observa que los espesores donde la diferencia de temperatura residual todavía es relevante están en torno a 1½" a 2" de aislante térmico. Con el PUR, de 1½" a 3" se gana menos de 0,3 °C en la carga de referencia, con el doble del material.

## Escogiendo el mejor aislante

En el desempeño térmico los dos conjuntos son prácticamente similares. Así, la elección se decide por la viabilidad operacional y de mantenimiento del aislante térmico. En este punto, de acuerdo con el cliente, el poliuretano lleva ventaja. Considerando esto y el método del codo, el PUR de 1½" es el escogido.

<figure>

<img src="/images/articles/post001-thermal-model/pipe_insulation.avif" alt="La opción escogida: PUR de 1½ pulgadas con chapa de acero inoxidable." width="1024" height="559" loading="lazy" decoding="async"/>

<figcaption>La opción escogida: PUR de 1½" con chapa de acero inoxidable.</figcaption>

</figure>

Así, se define la mejor solución y se modela la temperatura del producto en cada sección de medición, para cada carga, ya con el aislamiento escogido.

<figure>

<img src="/images/articles/post001-thermal-model/fig-load-range.svg" alt="Con el PUR de 1½ pulgadas: temperatura del producto en cada sección de medición, para cada carga." width="1056" height="519" loading="lazy" decoding="async"/>

<figcaption>Con el PUR de 1½": temperatura del producto en cada sección de medición, para cada carga — la carga mínima (20 %) es el peor caso.</figcaption>

</figure>

Con el PUR de 1½" y la línea en la carga de referencia, la salida queda en 30,0 °C en el día extremo de 34,9 °C, contra 32,4 °C sin aislamiento, una ganancia de 70 % en el desempeño térmico: bajó de 3,4 °C a 1 °C.

## Conclusión

Puede observarse que, sin aislamiento, el $$\Delta T$$ del equipo llega a 5,6 °C con 20 % de carga y 3,4 °C con 100 % de carga del producto.

A su vez, con el sistema propuesto, el $$\Delta T$$ del equipo llega a 3,8 °C con 20 % de carga y 1,0 °C con 100 % de carga del producto.

Esto representa **una ganancia de 35 % y 70 %** respectivamente, para 20 % y 100 % de carga del producto, en el día más caluroso establecido.

El modelo entrega la temperatura prevista en cada sección de medición, y no solamente la elección del material.

Quedando así, justificado el trabajo, el análisis y el modelado del problema.