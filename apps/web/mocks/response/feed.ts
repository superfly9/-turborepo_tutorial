import { faker } from '@faker-js/faker';
import { MAX_LIKE,MAX_COUNT,MAX_FEED_IMAGE_COUNT } from 'app/api/feed/constants';


function createRandomFeed() {
  
  const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    return {
      _id: faker.string.uuid(),
      firstName,
      lastName,
      sex,
      images: faker.helpers.multiple(()=>faker.image.urlLoremFlickr({category:'city'}), {count :Math.ceil( Math.random()* MAX_FEED_IMAGE_COUNT) }),
      title : faker.lorem.word(),
      description:faker.lorem.paragraph({ min: 1, max: 3 }),
      likeCount :  Math.ceil(Math.random() * MAX_LIKE),
      commentCount : Math.ceil(Math.random() * MAX_COUNT)
    };
}

export const getFeedList = ()=>faker.helpers.multiple(createRandomFeed, { count: 10 })