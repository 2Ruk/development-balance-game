import { Inter } from "next/font/google";
import Header from "@/components/home";
import MainContainer from "@/components/home/container";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { question: questionString } = router.query;
  const questionNumber = Number(questionString);

  return (
    <main className=" bg-white">
      <Header />
      <MainContainer key={questionNumber} />
    </main>
  );
}
