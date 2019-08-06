import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    navigationMenu: [
      {
        id: 1,
        title: 'Студия',
        url: '/studio',
      },
      {
        id: 2,
        title: 'Наша команда',
        submenu: [
          {
            title: 'item1',
          },
          {
            title: 'item2',
          },
          {
            title: 'item3',
          },
          {
            title: 'item4',
          },
          {
            title: 'item5',
          },
        ]
      },
      {
        id: 3,
        title: 'Портфолио',
        url: '/portfolio',
      },
      {
        id: 4,
        title: 'Услуги',
        // url: '/services',
        submenu: [
          {
            title: 'SEO (продвижение в поисковых системах)',
            url: '/seo'
          },
          {
            title: 'item1',
          },
          {
            title: 'item2',
          },
          {
            title: 'item3',
          }
        ]
      },
      {
        id: 5,
        title: 'Блог',
        url: '/blog',
      },
      {
        id: 6,
        title: 'Отзывы',
        url: '/reviews',
      },
      {
        id: 7,
        title: 'Контакты',
        url: '/contacts',
      },
    ],
    articles: [
      {
        id: '1',
        topic: 'Что такое SEO продвижение и почему вам оно НУЖНО?',
        bg: 'background: url("/static/img/bg_seo.png")',
        url: '#!'
      },
      {
        id: '2',
        topic: 'Почему важна внутренняя оптимизация сайта?',
        bg: 'background: url("/static/img/bg_optimization.png")',
        url: '#!'
      },
      {
        id: '3',
        topic: 'Что дает раскрутка сайта в основных поисковых системах?',
        bg: 'background: url(/static/img/bg_searching.png)',
        url: '#!'
      },
      {
        id: '4',
        topic: 'Почему мы не указываем точную стоимость продвижения сайта?',
        bg: 'background: url(/static/img/bg_price.png)',
        url: '#!'
      },
    ],
    ourWorks: [
      {
        id: 1,
        title: 'Пироэффект',
        description: 'Интернет-магазин фейерверков',
        url: '#!',
        bg: 'background: url(/static/img/bg_our_works.png) 0 0 no-repeat'
      }, {
        id: 2,
        title: 'Восточный Экспресс Банк',
        description: 'Сайт для услуги Восточного Экспресс Банка',
        url: '#!',
        bg: 'background: url(/static/img/bg_our_works.png) -287px 0 no-repeat'
      }, {
        id: 3,
        title: 'Запас Прочности',
        description: 'Магазин по продаже грузоподъемного и строительного оборудования',
        url: '#!',
        bg: 'background: url(/static/img/bg_our_works.png) -572px 0 no-repeat'
      }, {
        id: 4,
        title: 'Пеинтбол-парк',
        description: 'Сайт для спортивно-развлекательного комплекса',
        url: '#!',
        bg: 'background: url(/static/img/bg_our_works.png) -857px 0 no-repeat'
      },
    ]
  }
})
