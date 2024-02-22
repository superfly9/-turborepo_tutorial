import {http , HttpResponse} from 'msw'
import { SUCCESS } from './code';
import { apiRoutes } from '@/apiRoute';
import response from '@/mocks/response/api'

const API_DOMAIN = 'http://localhost:3000';

export const handlers = [
    http.get(`/api/feed`, ()=>{
        const feedList = response[apiRoutes.feed];
        return HttpResponse.json(feedList, {status:SUCCESS})
    }),
    http.get(`/api/search`, ()=>{
        const searchList = response[apiRoutes.search]
        return HttpResponse.json(searchList, {status:SUCCESS})
    }),
    http.get(`/api/story`, ()=>{
        const stroyList = response[apiRoutes.story]
        return HttpResponse.json(stroyList, {status:SUCCESS})
    })
]