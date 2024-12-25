import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";

export default async function IndexPage() {
  return <Counter />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
