import BalanceContentCard from "@/components/balance/content";
import ReplyWrite from "@/components/reply/reply-write";
import ReplyList from "@/components/reply/reply-list";
import Divider from "@/components/common/divider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@util/api";
import NextModal from "@/components/common/modal";

const balanceContent = [
  {
    content: "...",
    value: 1,
    percent: 0,
  },
  {
    content: "...",
    value: 2,
    percent: 0,
  },
];
export default function MainContainer() {
  const router = useRouter();

  const [questionData, setQuestionData] =
    useState<{ content: string; value: number; percent: number }[]>(
      balanceContent
    );
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVote, setIsVote] = useState(false);

  const { question: questionString } = router.query;
  const questionNumber = Number(questionString);
  const getQuestion = async () => {
    if (!questionNumber) return;
    const { data } = await api.get(`/balance/question/${questionNumber}`);
    const content = [
      { content: data.questionA, value: 1, percent: 0 },
      { content: data.questionB, value: 2, percent: 0 },
    ];
    setQuestionData(content);
    setIsLoaded(true);
  };
  const questionVote = async (value: number) => {
    const { data } = await api.post(`/balance/answer`, {
      tbq_id: questionNumber,
      tba_answer: value,
    });
    const content = [
      {
        content: questionData[0].content,
        value: 1,
        percent: data.tba_answer_1,
      },
      {
        content: questionData[1].content,
        value: 2,
        percent: data.tba_answer_2,
      },
    ];
    setQuestionData(content);
    setIsVote(true);
  };

  const getRandomPage: any = () => {
    const maxQuestion = 67;
    const random = Math.floor(Math.random() * maxQuestion + 1);
    return random;
  };

  const nextQuestion = async () => {
    const maxQuestion = 67;
    const { data } = await api.get(`/balance/answer`);
    if (data.length === maxQuestion || data.length >= maxQuestion) {
      router.push(`/developer/end`);
    } else {
      let random = Math.floor(Math.random() * maxQuestion + 1);
      while (data.includes(random)) {
        random = Math.floor(Math.random() * maxQuestion + 1);
      }
      router.push(`/developer/${random}`);
    }
    setQuestionData(() => balanceContent);
    setIsLoaded(false);
    setIsVote(false);
  };

  useEffect(() => {
    if (questionNumber && !isLoaded) {
      getQuestion();
    }
  }, [isVote]);

  return (
    <div
      className="max-w-lg mx-auto shadow-2xl bg-gray-300"
      key={questionNumber}
    >
      <div className=" py-1 px-4  lg:px-6 lg:py-4">
        <div className="py-1 lg:mb-4">
          <p className="p-3 text-xl font-bold text-gray-800">
            둘 중 선호하는 것을 선택해주세요
          </p>
        </div>
        <section aria-labelledby="details-heading" className="relative">
          <NextModal open={isVote} nextQuestion={nextQuestion} />

          <div className=" grid grid-rows-2 gap-y-5">
            {questionData.map(({ content, value, percent }, index) => {
              return (
                <BalanceContentCard
                  key={index}
                  content={content}
                  value={value}
                  percent={percent}
                  isVote={isVote}
                  vote={questionVote}
                />
              );
            })}
          </div>
        </section>
      </div>
      <div className="bg-white mx-auto px-6 p-10 flex flex-col">
        <div className="bg-white">
          <div className="px-6 py-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                댓글 기능 개발 중
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                댓글 기능은 개발 중입니다.
                <br />
                감사합니다.
              </p>
            </div>
          </div>
        </div>
        {/*<Divider text={"Reply"} />*/}
        {/*<ReplyWrite />*/}
        {/*<ReplyList />*/}
      </div>
    </div>
  );
}
