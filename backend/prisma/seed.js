import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create sample users
    const user1 = await prisma.user.create({
        data: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.doe@example.com',
        },
    });

    const user3 = await prisma.user.create({
        data: {
            firstName: 'Alice',
            lastName: 'Smith',
            email: 'alice.smith@example.com',
        },
    });

    console.log('Seeding complete.');
}

// Call the main function and handle any errors
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
