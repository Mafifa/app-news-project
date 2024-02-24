import { useState } from 'react'
import response from '../api/response.json'

export function useNews ({ search }) {
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
      setResponseNews(response)
    } else {
      setResponseNews([])
    }
  }

  return { News: newsMapped, getNews }
}
