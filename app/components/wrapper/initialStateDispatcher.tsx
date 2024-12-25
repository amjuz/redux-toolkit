import { StoreProvider } from "@/app/StoreProvider";
import { prisma } from "@/db";
import React from "react";

export async function InitialStateDispatcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const todos = await getTodos();
  if(!todos) return null;
  return <StoreProvider todos={todos}>
    {children}
  </StoreProvider>
}

async function getTodos() {
  const data = await prisma.todo.findMany();
  return data;
}
