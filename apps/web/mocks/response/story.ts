import { faker } from '@faker-js/faker';
import { MAX_FEED_IMAGE_COUNT } from 'app/api/feed/constants';

function createRandomStory() {
  
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    return {
      _id: faker.string.uuid(),
      nickname:firstName + lastName,
      avatar: faker.image.avatar(),
      images: faker.helpers.multiple(()=>faker.image.urlLoremFlickr({category:'dog'}), {count :Math.ceil( Math.random()* MAX_FEED_IMAGE_COUNT) }),
      title : faker.lorem.word(),
      description:faker.lorem.paragraph({ min: 1, max: 3 })
    };
  }

export type RandomStory = ReturnType<typeof createRandomStory>
export const getRandomStory = ()=>faker.helpers.multiple(createRandomStory, { count: 10 })