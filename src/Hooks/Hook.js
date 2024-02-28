import { useState } from 'react'

const key = 'f719cf731ef144f49fafc6ccefa4e26e'

export function useNews({ topic, country }) {
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
    // setResponseNews(response)

    if (topic || country) {
      fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${topic}&apiKey=${key}`)
        .then(res => res.json())
        .then(json => {
          console.log(`Topic is: ${topic}`)
          console.log(`Country is: ${country}`)
          setResponseNews(json)
        })
    } else {
      setResponseNews(['Error en el resultado'])
    }
  }

  return { newsMapped, getNews }
}
