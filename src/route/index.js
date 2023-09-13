// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const communities = require('./communities')

// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/communities', communities)

// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
