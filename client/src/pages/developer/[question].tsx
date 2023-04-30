import { Inter } from "next/font/google";
import Header from "@/components/home";
import MainContainer from "@/components/home/container";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { question: questionString } = router.query;
  if (questionString === "end") {
    return (
      <main className=" bg-white">
        <Header />
        <div className="max-w-lg mx-auto shadow-2xl bg-gray-300">
          <div className=" rounded-2xl bg-gray-200 shadow-2xl">
            <div>
              <div className=" h-12 flex items-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <div className="text-gray-700 mr-auto">
                  Question
                  <span className="animate-pulse">_</span>
                </div>
                <div className="flex items-center opacity-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-1 px-3">
              <button className="min-w-full text-left opacity-75 px-3 pb-5 py-3 font-content h-48 rounded flex flex-col justify-between">
                <p>준비된 페이지가 없습니다.ㅠ_ㅠ</p>
              </button>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <div className="divide-red-50 h-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  const questionNumber = Number(questionString);

  return (
    <main className=" bg-white">
      <Header />
      <MainContainer key={questionNumber} />
    </main>
  );
}
