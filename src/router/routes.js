import Services from '../components/header/NavMenuLinks/Services'
import Studio from '../components/header/NavMenuLinks/Studio'
import Team from '../components/header/NavMenuLinks/Team'
import Portfolio from '../components/header/NavMenuLinks/Portfolio'
import Blog from '../components/header/NavMenuLinks/Blog'
import Reviews from '../components/header/NavMenuLinks/Reviews'
import Contacts from '../components/header/NavMenuLinks/Contacts'
import Home from '../components/header/NavMenuLinks/Home'
import Seo from '../components/header/NavMenuLinks/NavSubMenu/Seo'

export const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Home,
  },
  {
    path: '/services',
    name: 'Услуги',
    component: Services,
  },

  {
    path: '/studio',
    name: 'Студия',
    component: Studio
  },
  {
    path: '/team',
    name: 'Наша команда',
    component: Team
  },
  {
    path: '/portfolio',
    name: 'Портфолио',
    component: Portfolio
  },
  {
    path: '/blog',
    name: 'Блог',
    component: Blog
  },
  {
    path: '/reviews',
    name: 'Отзывы',
    component: Reviews
  },
  {
    path: '/contacts',
    name: 'Контакты',
    component: Contacts
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/seo',
    name: 'SEO(Продвижение)',
    component: Seo
  },
];
