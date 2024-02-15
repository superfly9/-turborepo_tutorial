import {http , HttpResponse} from 'msw'
import { SUCCESS } from './code';
import { getFeedList } from './response/feed'
import { getSearchList } from './response/searchList';
import { getRandomStory } from './response/story';

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