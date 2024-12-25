import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
async function addTodo() {
  const data = await prisma.todo.create({
    data:{
      title: "First todo",
      status: true
    }
  })

  if(!data) console.log("something went wrong, please make sure docker is running");

  console.log(data);
  
}

addTodo();