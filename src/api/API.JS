const fetch = require('node-fetch')
const key = 'f719cf731ef144f49fafc6ccefa4e26e'

const country = 've'
const category = 'business'

const searchByCountryAndCanteogires = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}`

const globalSearchByCategories = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${key}`

const globalSearchByContry = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`
