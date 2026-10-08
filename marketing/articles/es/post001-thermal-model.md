---
title: "Producto apelmazándose en el silo: medición en campo y modelo sección a sección, de 34,6 °C a 32,8 °C en la salida"
date: 2026-10-07
autor: "Fernando Castillo Vicencio"
resumo: "El insumo llegaba caliente al silo y el producto se apelmazaba. Medimos la línea en campo y ajustamos un modelo 1D sección a sección contra la medición: en la envolvente de carga, la salida va de 34,6 °C a 32,4 °C sin aislamiento y de 32,8 °C a 30,0 °C con el aislamiento propuesto."
capa: "/images/articles/post001-thermal-model/thumbnail.avif"
og: "/images/articles/post001-thermal-model/og.jpg"
cta:
  label: "Agendar conversación (sin compromiso)"
  href: "whatsappCta"
seo:
  title: "Producto apelmazándose en el silo: de 34,6 °C a 32,8 °C en la salida"
  description: "Producto apelmazándose en el silo por insumo caliente: medición en campo y modelo 1D ajustado sección a sección. En la carga mínima la salida va de 34,6 °C a 32,8 °C; en la de referencia, de 32,4 °C a 30,0 °C, con la ganancia de la ruta bajando cerca de 70%."
sobre: "Caso real anonimizado: insumo en calentamiento en una línea de transporte neumático, con apelmazamiento en el silo. Medición de campo, modelo térmico 1D ajustado sección a sección, extrapolación para el día extremo y propuesta de aislamiento."
---

En las últimas semanas, un cliente nos contactó con un problema térmico industrial que no estaba consiguiendo resolver.

## El problema

La planta del cliente es una industria de producción de alimentos, donde varias líneas de productos diferentes operan al mismo tiempo. Una de las principales líneas de transporte neumático de insumo, en tubo de acero inoxidable, recorre aproximadamente 150 metros en el nivel superior de la instalación, de una sala a otra, con 4 tramos a cielo abierto, quedando expuesta a la intemperie y al calor residual de otros equipos, generando degradación termohigroscópica — el calor y la humedad hacen que el producto se aglutine y se apelmace.

Para atenuar o evitar este problema, los ingenieros del cliente instalaron una cobertura sobre la línea. La cobertura redujo la radiación solar directa, pero ella misma se calienta e irradia sobre el tubo, y el problema no estaba resuelto: el producto seguía presentando degradación termohigroscópica.

<figure>

<img src="/images/articles/post001-thermal-model/render-panel.avif" alt="Representación de la línea y de la cobertura, en cuatro vistas." width="2576" height="1308" loading="lazy" decoding="async"/>

<figcaption>Representación de la línea y de la cobertura, en cuatro vistas.</figcaption>

</figure>

La temperatura de entrada del insumo, informada por la planta y confirmada en la medición de campo, es de aproximadamente 29 °C, sin preenfriamiento.

La empresa desea evitar o disminuir este efecto termohigroscópico del producto durante el transporte, que se manifiesta por aglutinación, apelmazamiento y posible obstrucción del silo receptor.

<figure>

<img src="/images/articles/post001-thermal-model/product-degradation.avif" alt="Representación del producto aglutinado en el silo, sin y con degradación termohigroscópica." width="1024" height="559" loading="lazy" decoding="async"/>

<figcaption>Representación del producto aglutinado en el silo, sin y con degradación termohigroscópica.</figcaption>

</figure>

## Lo que el cliente necesita

Así, el cliente nos contactó con la finalidad de resolver este problema, solicitando:

- El sistema que disminuirá o atenuará la degradación termohigroscópica.

- La previsión de la temperatura con la que el producto saldrá de la línea.

- ¿Cómo quedarán las temperaturas en el día extremo del año?

El alcance del trabajo es la tubería, de la entrada a la salida de la línea: la temperatura de entrada es la condición de frontera del estudio, no una variable de proyecto.

El producto tiene un rango de recepción definido para la llegada al silo — es contra él que se comparan los resultados de este artículo.

## ¿Cuál fue la estrategia trazada?

Como ingenieros, necesitamos ser no solo teóricos sino, antes que nada, resolver los problemas de la vida real. En la industria, cuando la urgencia del cliente es alta, no tiene sentido armar una estrategia muy detallada, como la simulación CFD 3D de toda la línea: el ingeniero debe conocer las herramientas y priorizar la solución. Fue lo que hicimos aquí: dos días de medición en campo y un modelo térmico unidimensional, en lugar de CFD en 150 metros de tubería.

Así, después de reuniones con el cliente, se puede establecer una estrategia que incluya:

- Establecer los puntos de medición de acuerdo con la viabilidad de la planta.

- Medir las temperaturas en esas secciones a lo largo de la línea en dos días típicos (de preferencia calurosos), junto con las temperaturas superficiales y el ambiente de referencia.

- Elaborar un modelo unidimensional de la línea.

- Extrapolar ese modelo para el día extremo (temperatura de proyecto ASHRAE o a pedido del cliente), con previsión de temperatura en cada sección de medición.

- Elaborar la estrategia de reducción de la transferencia de calor entre la tubería y el ambiente circundante.

- Especificar la solución y prever las temperaturas en el día extremo adoptado.

## El modelo

El modelo fue desarrollado con los conceptos básicos de Transferencia de Calor: se estableció un balance lineal en cada sección de medición:

$$
q_{sol} + q_{rad} + q_{conv} = q_{\text{líquido}}
$$

<figure class="figure-narrow">

<img src="/images/articles/post001-thermal-model/fig-section-balance.svg" alt="El balance, término a término, en la sección del tubo." width="601" height="635" loading="lazy" decoding="async"/>

<figcaption>El balance, término a término, en la sección del tubo.</figcaption>

</figure>

El coeficiente convectivo adopta el mayor valor entre la convección natural y la forzada. El modelo fue calibrado con las mediciones de superficie de campo, hechas con pirómetro de infrarrojo — que lee la temperatura aparente, dependiente de la emisividad de la superficie.

<figure>

<img src="/images/articles/post001-thermal-model/fig-calibration.svg" alt="El modelo contra la medición de campo, sección por sección." width="1229" height="691" loading="lazy" decoding="async"/>

<figcaption>El modelo contra la medición de campo, sección por sección.</figcaption>

</figure>

La marcha térmica del producto se integra en cada punto de medición sobre la base del balance de energía:

$$
\Delta T = \sum \frac{q \cdot L}{\dot{m} \cdot c_p}
$$

<figure>

<img src="/images/articles/post001-thermal-model/fig-thermal-march.svg" alt="La ganancia de cada metro acumulada a lo largo del producto." width="758" height="413" loading="lazy" decoding="async"/>

<figcaption>La ganancia de cada metro acumulada a lo largo del producto.</figcaption>

</figure>

Los datos de proceso del cliente no se divulgan: los resultados aparecen en temperatura y en ganancia de calor por metro. Quedan fuera del modelo el efecto del aire de transporte y las condiciones de humedad.

Se identificaron los puntos críticos: la ganancia de calor se concentra en los tramos sin sombra, y el pico está en la sección E, en el medio de la línea. En las secciones abrigadas el saldo cae, y una de ellas es negativa: la tubería pierde calor hacia el ambiente. La figura trae el saldo del modelo, sección por sección: de las 12 secciones instrumentadas, 10 entraron en la calibración — las secciones D y J quedaron en cuarentena (carga baja) y la E fue aceptada con la salvedad del sesgo del pirómetro.

<figure>

<img src="/images/articles/post001-thermal-model/fig-balance-per-section.svg" alt="El saldo del modelo, sección por sección." width="1229" height="690" loading="lazy" decoding="async"/>

<figcaption>El saldo del modelo, sección por sección.</figcaption>

</figure>

## El día extremo

El ASHRAE Handbook (edición SI de 2017) indica 28,8 °C como temperatura de proyecto (0,4 %) para la región. Debido al El Niño, el cliente nos solicitó un día extremo de 34,9 °C, por encima de la temperatura de proyecto indicada por la norma.

El modelo, desarrollado y calibrado en el día medido, ahora se extrapola para el día extremo: a 34,9 °C la ruta pasa a añadir 3,4 °C al producto.

Los resultados son promedios de 20 000 escenarios por tramo de tubería: en la carga de referencia la dispersión (p5–p95) es de aproximadamente ±0,3 °C y llega a ±0,6 °C en las cargas menores. El coeficiente convectivo interno adoptado fue 25 W/(m²·K), el más bajo de los tres evaluados.

<figure>

<img src="/images/articles/post001-thermal-model/fig-march-compare.svg" alt="El día medido y el día extremo, en las mismas secciones." width="922" height="518" loading="lazy" decoding="async"/>

<figcaption>El día medido y el día extremo, en las mismas secciones.</figcaption>

</figure>

## Las opciones de aislamiento

Después de una reunión con los ingenieros de planta, se evaluaron dos aislantes: poliuretano (PUR) y espuma elastomérica (FEF), de 1" a 3".

Para cada uno de estos aislantes, el modelo fue evaluado en cada espesor a la temperatura del día extremo:

- Para el PUR, con chapa de acero inoxidable.

- Para la FEF, con pintura blanca.

Las conductividades adoptadas son 0,032 W/(m·K) para el PUR y 0,038 W/(m·K) para la FEF.

<figure>

<img src="/images/articles/post001-thermal-model/fig-pur-insulation.svg" alt="Perfil de la línea sin aislante y con PUR en cuatro espesores, en el día extremo." width="1055" height="498" loading="lazy" decoding="async"/>

<figcaption>El perfil de la línea sin aislante y con PUR de 1", 1½", 2" y 3", en el día extremo.</figcaption>

</figure>

Sin embargo, la diferencia entre los dos aún es pequeña. Falta evaluar la variación de carga: la medición se hizo con la línea en la carga de referencia (100 %), y con menos producto en la línea el tiempo de residencia aumenta. En el sistema sin aislamiento, la elevación crece cuando la carga cae: en la menor carga evaluada, 20 %, el producto sale a 34,6 °C, contra 32,4 °C en la carga de referencia. Con el PUR de 1½" y esa misma carga, la salida queda en 32,8 °C, que es el peor caso de operación.

<figure>

<img src="/images/articles/post001-thermal-model/fig-pur-outlet.svg" alt="Temperatura de salida con PUR en cada espesor y carga." width="989" height="616" loading="lazy" decoding="async"/> <img src="/images/articles/post001-thermal-model/fig-fef-outlet.svg" alt="Temperatura de salida con FEF en cada espesor y carga." width="989" height="616" loading="lazy" decoding="async"/>

<figcaption>Comparación de cargas: salida con PUR (arriba) y con FEF (abajo).</figcaption>

</figure>

Nuevamente, los dos aislantes tienen un comportamiento similar para diferentes cargas; por lo tanto, utilizamos un criterio adicional para elegir la mejor opción.

Por el método del codo, se observa que los espesores donde la diferencia de temperatura residual aún es relevante están en torno a 1½" a 2" de aislante térmico. Con el PUR, de 1½" a 3" se gana menos de 0,3 °C en la carga de referencia, con el doble de material.

## Eligiendo el mejor aislante

En el desempeño térmico los dos conjuntos prácticamente empatan; la elección se decide por el mantenimiento. La FEF exige repintado periódico, mientras que la chapa de acero del PUR se lava y se inspecciona. Por eso el PUR de 1½" es el elegido.

<figure>

<img src="/images/articles/post001-thermal-model/pipe_insulation.avif" alt="La opción elegida: PUR de 1½ pulgadas con chapa de acero inoxidable." width="1024" height="559" loading="lazy" decoding="async"/>

<figcaption>La opción elegida: PUR de 1½" con chapa de acero inoxidable.</figcaption>

</figure>

Así, se define la mejor solución y se modela la temperatura del producto en cada sección de medición, para cada carga, ya con el aislamiento elegido.

<figure>

<img src="/images/articles/post001-thermal-model/fig-load-range.svg" alt="Con el PUR de 1½ pulgadas: temperatura del producto en cada sección de medición, para cada carga." width="1056" height="519" loading="lazy" decoding="async"/>

<figcaption>Con el PUR de 1½": temperatura del producto en cada sección de medición, para cada carga — la carga mínima (20 %) es el peor caso.</figcaption>

</figure>

Con el PUR de 1½" y la línea en la carga de referencia, la salida queda en 30,0 °C en el día extremo de 34,9 °C, contra 32,4 °C sin aislamiento. La salida continúa por encima del límite superior del rango, y ningún espesor cubre esa diferencia: para que la salida cruce el límite, la temperatura de entrada tendría que ser unos 7 °C más baja en la carga de referencia — y aún más en las cargas menores.

Cubrir los 4 tramos a cielo abierto, los únicos sin cobertura, es una medida adicional, de efecto menor que el del aislamiento.

## Conclusión

Hoy, sin aislamiento, la ruta suma 3,4 °C y el producto llega al silo a 32,4 °C en el día extremo. En la carga mínima de la envolvente, 20 %, llega a 34,6 °C.

Con el sistema propuesto, el PUR de 1½" con chapa de acero inoxidable en los tramos cubiertos, la ruta suma 1,0 °C y, en la carga de referencia, la salida queda en 30,0 °C: 2,4 °C menos que hoy. En la carga mínima, el peor caso de operación, la salida queda en 32,8 °C. Como alternativa, la FEF de 2" pintada de blanco sale a 30,1 °C.

El modelo entrega la temperatura prevista en cada sección de medición, y no solo la elección del material.

El aislamiento propuesto reduce la ganancia de la ruta de 3,4 °C a 1,0 °C, cerca de 70% menos, y lleva la salida, en el día extremo, de 32,4 °C a 30,0 °C. El modelo entrega la temperatura prevista en cada sección de medición, y no solo la elección del material: cada tramo se evaluó en 20 000 escenarios, con dispersión de ±0,3 °C (p5–p95) en la carga de referencia. La temperatura a la que el producto se apelmaza no se midió; el criterio adoptado es el rango de recepción. Actuar sobre la temperatura de entrada del insumo es otro proyecto: este estudio entrega lo que la tubería puede dar. Si su línea tiene ese perfil, el camino es el mismo: medir en campo y decidir con el número.
