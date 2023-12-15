import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

interface User {
    [key:string] : string | number | Date;
}

function createRandomUser(): User {
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
      email,
      firstName,
      lastName,
      sex,
      subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
  }
  
export async function GET() {
    const res = faker.helpers.multiple(createRandomUser, { count: 10 })
    return NextResponse.json(res)
}