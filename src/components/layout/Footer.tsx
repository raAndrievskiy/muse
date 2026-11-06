import { useLanguage } from '../../i18n';
export function Footer(){const {t}=useLanguage();return <footer><a className="logo" href="#top">MUSE<span>/</span></a><p>{t.footer.description}</p><div><a href="#">{t.footer.instagram}</a><a href="#">{t.footer.x}</a><a href="mailto:hello@muse.studio">{t.footer.contact}</a></div><small>{t.footer.copyright}</small></footer>}
