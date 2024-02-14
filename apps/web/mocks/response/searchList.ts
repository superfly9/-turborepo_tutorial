import { faker } from '@faker-js/faker';

type ImageOption = {
    category:string;
}

function createRandomSearchList(option:ImageOption) {
    const {category} = option;
    const _id = faker.string.uuid()
    return {
      _id,
      url: faker.image.urlLoremFlickr({category}),
      feedLink: `/${category}/${_id}`
    };
}

export const getSearchList = ()=>faker.helpers.multiple(()=>createRandomSearchList({category:'dog' }), { count: 30 })