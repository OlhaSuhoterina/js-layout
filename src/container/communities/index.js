import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const MAIN_LIST = [
  {
    category: [
      { text: 'База знань', viewed: true },
      { text: 'Інформація', viewed: false },
    ],
    src: '/img/communities.png',
    info: {
      title: 'Що таке база знань?',
      description:
        'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
    },
  },
]

const createMain = () => {
  const mainList = createElement('main', 'main')

  MAIN_LIST.forEach((mainData) => {
    const createNav = () => {
      const navList = createElement('div', 'nav')

      mainData.category.forEach((category) => {
        const nav = createElement(
          'div',
          category.viewed
            ? 'nav button nav-viewed'
            : 'nav button',
        )

        const datalink = createElement(
          'a',
          'nav-link',
          category.text,
        )

        nav.append(datalink)

        navList.append(nav)
      })
      return navList
    }
    const nav = createNav()
    page.append(nav)

    mainList.append(nav)

    const mainImage = createElement('div', 'image')

    const img = createElement('img')

    Object.entries(mainData).forEach(([key, value]) => {
      img[key] = value
    })
    mainImage.append(img)

    mainList.append(mainImage)

    const mainInfo = createElement(
      'div',
      'communities-info',
    )
    const mainInfoTitle = createElement(
      'h2',
      'communities-title',
      mainData.info.title,
    )

    const mainInfoDesc = createElement(
      'p',
      'communities-desc',
      mainData.info.description,
    )

    mainInfo.append(mainInfoTitle, mainInfoDesc)

    mainList.append(mainInfo)

    const mainButton = createElement(
      'button',
      'button button-link',
      `Перейти до ком'юніті у Телеграм`,
    )

    mainList.append(mainButton)
  })

  return mainList
}
const main = createMain()
page.append(main)
