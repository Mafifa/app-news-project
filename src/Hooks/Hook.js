import response from '../api/response.json'

const news = response.articles

export function useNews () {
  const newsMapped = news?.map((news, index) => ({
    ID: index,
    autor: news.author,
    title: news.title,
    url: news.url,
    date: news.publishedAt
  }))
  return { News: newsMapped }
}
