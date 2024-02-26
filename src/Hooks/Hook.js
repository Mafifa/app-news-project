import { useState } from 'react'
import response from '../api/response.json'

const key = 'f719cf731ef144f49fafc6ccefa4e26e'

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

  const getNews = () => {
    if (search) {
      fetch(`https://newsapi.org/v2/top-headlines?country=ve&apiKey=${key}`)
        .then(res => res.json())
        .then(json => {
          setResponseNews(json)
        })
    } else {
      setResponseNews(['Error en el resultado'])
    }
  }

  return { newsMapped, getNews }
}
