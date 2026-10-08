/**
 * i18n do site — duas camadas de leitura: PT (padrão, na raiz) e ES (em /es/).
 *
 * Regra de camadas já usada no projeto:
 *   - texto para o leitor  → português (arquivos em marketing/*.md)
 *   - texto para o leitor ES → espanhol (arquivos em marketing/es/*.md)
 *   - nomes de rota, arquivo e classe CSS → inglês (/articles, thumbnail.avif)
 */
export const LOCALES = ['pt', 'es'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = 'pt';

/** Tag BCP-47 de cada idioma (atributo lang, hreflang, schema.org). */
export const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', es: 'es' };
/** og:locale usa underscore no lugar do hífen. */
export const OG_LOCALE: Record<Lang, string> = { pt: 'pt_BR', es: 'es_ES' };
/** Formatação de data: o artigo em espanhol segue o uso peruano. */
export const DATE_LOCALE: Record<Lang, string> = { pt: 'pt-BR', es: 'es-PE' };

/** Outro idioma (para o seletor de bandeiras e o hreflang). */
export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'pt' : 'es');

/** id do entry na coleção `site`: o espanhol mora em marketing/es/<nome>.md */
export const entryId = (lang: Lang, name: string) => (lang === 'es' ? `es/${name}` : name);

/** Raiz das rotas de cada idioma. */
export const homeHref = (lang: Lang) => (lang === 'es' ? '/es/' : '/');

/**
 * Páginas que existem traduzidas. Qualquer link interno fora desta lista
 * continua apontando para a versão em português — nunca gera 404.
 * (Hoje: home e artigos. As páginas /prices, /methodology e /privacy-lgpd
 * são só em português.)
 */
const ROTAS_TRADUZIDAS = [/^\/$/, /^\/articles$/, /^\/articles\/[^/]+$/];

/** Converte um href vindo do conteúdo para a rota do idioma atual. */
export function localize(href: string | undefined, lang: Lang): string | undefined {
  if (!href || lang === DEFAULT_LANG) return href;
  if (!href.startsWith('/')) return href; // #âncora, http(s), mailto, whatsappCta
  const caminho = href.split(/[?#]/)[0];
  return ROTAS_TRADUZIDAS.some((rota) => rota.test(caminho)) ? `/es${href}` : href;
}

/** Texto de interface que não vive no conteúdo (coleção `site`). */
export const ui = {
  pt: {
    langSwitchAria: 'Idioma do site',
    langPt: 'Ver o site em português',
    langEs: 'Ver o site em español',
    /** Texto lido pelo leitor de tela no idioma que já está ativo. */
    langPtAtual: 'Português (idioma atual)',
    langEsAtual: 'Español (idioma atual)',
    navAria: 'Navegação principal',
    articlesListTitle: 'Artigos técnicos — Castillo Engenharia',
    articlesListDescription:
      'Casos reais de engenharia industrial: diagnóstico medido, modelado e verificado em campo.',
    articlesListHeading: 'Artigos técnicos',
    articlesListIntro:
      'Casos reais de engenharia industrial, do diagnóstico à solução: o que medimos, como modelamos e o que o número decidiu.',
    readArticle: 'Ler artigo',
    readArticleAria: 'Ler artigo',
    articleBreadcrumbHome: 'Início',
    articleBackAria: 'Voltar para a lista de artigos',
    articleBack: '← Todos os artigos',
    articleBy: 'Por',
  },
  es: {
    langSwitchAria: 'Idioma del sitio',
    langPt: 'Ver el sitio en portugués',
    langEs: 'Ver el sitio en español',
    langPtAtual: 'Portugués (idioma actual)',
    langEsAtual: 'Español (idioma actual)',
    navAria: 'Navegación principal',
    articlesListTitle: 'Artículos técnicos — Castillo Engenharia',
    articlesListDescription:
      'Casos reales de ingeniería industrial: diagnóstico medido, modelado y verificado en campo.',
    articlesListHeading: 'Artículos técnicos',
    articlesListIntro:
      'Casos reales de ingeniería industrial, del diagnóstico a la solución: lo que medimos, cómo modelamos y lo que decidió el número.',
    readArticle: 'Leer artículo',
    readArticleAria: 'Leer artículo',
    articleBreadcrumbHome: 'Inicio',
    articleBackAria: 'Volver a la lista de artículos',
    articleBack: '← Todos los artículos',
    articleBy: 'Por',
  },
} as const;
