import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

type ImageOption = {
    category?:string;
    width?:number;
    height?:number;
}


function createRandomImage(option:ImageOption) {
    return {
        _id: faker.string.uuid(),
        url :faker.image.urlLoremFlickr(option)
    };
}

export type SearchTabImage = ReturnType<typeof createRandomImage>

export async function GET () {
    const res = faker.helpers.multiple(()=>createRandomImage({category:'animal' }), { count: 30 })
    return NextResponse.json(res)
}