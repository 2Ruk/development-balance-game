import { Inter } from "next/font/google";
import Header from "@/components/home";
import MainContainer from "@/components/home/container";
import { useRouter } from "next/router";
import NoContent from "@/components/balance/no-content";
import Footer from "@/components/home/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { question: questionString } = router.query;
  if (questionString === "end") {
    return <NoContent />;
  }
  const questionNumber = Number(questionString);

  return (
    <main className=" bg-white">
      <Header />
      <MainContainer key={questionNumber} />
      <Footer />
    </main>
  );
}
