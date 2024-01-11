import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

function createRandomStory() {
  
  const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    return {
      _id: faker.string.uuid(),
      firstName,
      lastName,
      sex,
      avatar: faker.image.avatar(),
      title : faker.lorem.word(),
      description:faker.lorem.paragraph({ min: 1, max: 3 })
    };
  }

export type RandomStory = ReturnType<typeof createRandomStory>
export async function GET() {
    const res = faker.helpers.multiple(createRandomStory, { count: 10 })
    return NextResponse.json(res)
}