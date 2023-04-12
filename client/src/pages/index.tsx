import { Inter } from "next/font/google";
import Header from "@/components/home";
import MainContainer from "@/components/home/container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-gray-300">
      <Header />
      <MainContainer />
    </main>
  );
}
