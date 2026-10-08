import { getEntry } from 'astro:content';
import { DEFAULT_LANG, entryId, type Lang } from './index';

/**
 * Configuração do site no idioma pedido.
 *
 * Valores de máquina (URL do site, número do WhatsApp, endpoint do Formspree,
 * CNPJ, contatos) vêm SEMPRE da versão em português: o arquivo espanhol só
 * sobrescreve o que é texto para o leitor. Assim, mudar o número do WhatsApp
 * em marketing/settings.md vale para os dois idiomas de uma vez.
 */
export async function siteSettings(lang: Lang) {
  const base = (await getEntry('site', entryId(DEFAULT_LANG, 'settings')))!.data;
  if (lang === DEFAULT_LANG) return base;

  const localizado = (await getEntry('site', entryId(lang, 'settings')))?.data;
  if (!localizado) return base;

  const mesclar = (chave: string) => ({ ...base[chave], ...localizado[chave] });

  return {
    ...base,
    ...localizado,
    a11y: mesclar('a11y'),
    header: mesclar('header'),
    meta: mesclar('meta'),
    whatsapp: mesclar('whatsapp'),
    whatsappButton: mesclar('whatsappButton'),
    contato: mesclar('contato'),
    institucional: mesclar('institucional'),
    schemaOrg: mesclar('schemaOrg'),
  };
}
