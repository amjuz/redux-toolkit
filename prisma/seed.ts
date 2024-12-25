import { prisma } from "@/app/db";
import { Prisma } from "@prisma/client";
import { error } from "console";

const main = () => {
  try {
    const data = prisma.todo.create({
      data: {
        title: "first todo",
        status: true,
      },
    });

    if (!data) {
      throw new Error("something went wrong, failed to seed initial data");
      process.exit();
    }

    console.log("Seeding completed successfully");
    process.exit();
  } catch (error) {
    console.error(
      "something went, please make sure docker container is up and running",
      error
    );
  }
};

main();
