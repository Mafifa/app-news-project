import { useState } from 'react'
import response from '../api/response.json'

export function useNews({ search }) {
  const [responseNews, setResponseNews] = useState([])
  const news = responseNews.articles

  const newsMapped = news?.map((news, index) => ({
    ID: index,
    autor: news.author,
    title: news.title,
    url: news.url,
    date: news.publishedAt
  }))

  getNews(setResponseNews, search)

  return { News: newsMapped }
}

export function getNews(setResponseNews, search) {
  if (search) {
    return setResponseNews(response)
  } else {
    return setResponseNews(['Error en el resultado'])
  }
}
