import '../styles/modern-normalise.css'
import '../styles/style.css'
import '../styles/header.css'
import '../styles/hero.css'
import '../styles/about.css'
import '../styles/featured.css'
import '../styles/work.css'
import '../styles/contact.css'
import '../styles/footer.css'
import '../styles/mobile-nav.css'
import '../styles/utilis.css'
import { inject } from "@vercel/analytics"


import mobile_menu_load from   './utils/mobile-nav'
import mode_toggler from    './utils/theme-toggle'
import lazyLoading from './utils/lazy-loading'

mobile_menu_load();
mode_toggler();
lazyLoading();

inject()
