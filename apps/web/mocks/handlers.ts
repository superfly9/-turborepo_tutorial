import {http , HttpResponse} from 'msw'
import { SUCCESS } from './code';
import { getFeedList,getSearchList,getRandomStory} from './response'

export const handlers = [
    http.get(`/api/feed`, ()=>{
        const feedList = getFeedList();
        return HttpResponse.json(feedList, {status:SUCCESS})
    }),
    http.get(`/api/search`, ()=>{
        const searchList = getSearchList()
        return HttpResponse.json(searchList, {status:SUCCESS})
    }),
    http.get(`/api/story`, ()=>{
        const stroyList = getRandomStory();
        return HttpResponse.json(stroyList, {status:SUCCESS})
    })
]