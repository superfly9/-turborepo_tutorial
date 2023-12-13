import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
    const res = faker.helpers.multiple(faker.person.firstName, { count: 10 })
    return NextResponse.json({res})
}