import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

function createRandomUser() {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);
    
  
    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      description:faker.commerce.productDescription(),
      email,
      firstName,
      lastName,
      sex,
      subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
  }

  export type RandomUser = ReturnType<typeof createRandomUser>
  
export async function GET() {
    const res = faker.helpers.multiple(createRandomUser, { count: 10 })
    return NextResponse.json(res)
}8