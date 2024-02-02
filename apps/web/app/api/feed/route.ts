import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

function createRandomFeed() {
  
  const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    return {
      _id: faker.string.uuid(),
      firstName,
      lastName,
      sex,
      image: faker.image.urlLoremFlickr({category:'city'}),
      title : faker.lorem.word(),
      description:faker.lorem.paragraph({ min: 1, max: 3 })
    };
  }

export type RandomFeed = ReturnType<typeof createRandomFeed>
export async function GET() {
    const res = faker.helpers.multiple(createRandomFeed, { count: 10 })
    return NextResponse.json(res)
}