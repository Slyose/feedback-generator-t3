import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.feedback.deleteMany({});
    await prisma.aspect.deleteMany({});
    await prisma.task.deleteMany({});
    await prisma.sprint.deleteMany({});
    await prisma.sprintCategory.deleteMany({});
    await prisma.user.deleteMany({});

    await prisma.user.create({
      data: { name: "testAdmin", email: "admin@test.com" },
    });
    await prisma.sprintCategory.create({
      data: {
        categoryName: "Front-End",
        sprints: {
          create: [
            {
              sprintName: "nc-news",
              repoLink: "https://github.com/your-github-account/nc-news",
              lmsLink: "https://l2c.northcoders.com/courses/fe/fe-nc-news",
              tasks: {
                create: [
                  {
                    taskName: "Create a React project and a public repo",
                    taskNumber: 1,
                    advanced: false,
                    aspects: {
                      create: [
                        {
                          description: "Should have the repo set as public",
                          importance: "must",
                          feedbacks: {
                            create: [
                              {
                                whatWentWell:
                                  "Successfully set the repo as public",
                                evenBetterIf:
                                  "The repo is currently set to private, try make it public instead",
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });

    await prisma.sprintCategory.create({
      data: {
        categoryName: "Back-End",
      },
    });

    console.log("Test data seeded successfully!");
  } catch (error) {
    console.error("Error seeding test data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
