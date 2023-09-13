import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    data: '25.01',
    viewed: false,
  },
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    data: '15.01',
    viewed: true,
  },
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    data: '25.01',
    viewed: false,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post-list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post-viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post-header')

    const categoryList = createElement(
      'div',
      'post-category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post-category post-category-${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    const dataSpan = createElement(
      'span',
      'post-data',
      postData.data,
    )

    postHeader.append(categoryList, dataSpan)

    const infoParagraph = createElement(
      'p',
      'post-info',
      postData.info,
    )

    post.append(postHeader, infoParagraph)

    postList.append(post)
  })

  return postList
}

const post = createPost()
page.append(post)
