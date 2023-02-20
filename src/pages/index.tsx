import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import WesteropsLogo from "@/assets/WesteropsLogo";
import TodoMainPage from "@/components/TodoMainPage";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ToDoList App</title>
        <meta name="description" content="To Do List App by WesterOps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          background: "linear-gradient(116.82deg, #85A1BA 0%, #194591 65.92%)",
        }}
        className="h-screen max-w-full "
      >
        <WesteropsLogo className="align-middle " />
        <TodoMainPage />
      </main>
    </>
  );
}
