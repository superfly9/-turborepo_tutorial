import { faker } from '@faker-js/faker';

export async function GET() {
    const res = faker.helpers.multiple(faker.person.firstName, { count: 10 }) // [ 'Santos', 'Lavinia', 'Lavinia' ]
    console.log('[res]:',res);
    return new Response('Hello, Next.js!', {
        status: 200,
      })
}