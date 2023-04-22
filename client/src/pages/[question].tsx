import { Inter } from "next/font/google";
import Header from "@/components/home";
import MainContainer from "@/components/home/container";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-white">
      <Header />
      <MainContainer />
    </main>
  );
}
