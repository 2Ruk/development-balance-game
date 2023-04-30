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

  const nextQuestion = () => {
    const random = Math.floor(Math.random() * 32 + 1);
    router.push(`/developer/${random}`);
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
      <div className=" py-8 px-4  lg:px-6 lg:py-8">
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

      <div className="bg-white mx-auto px-6 pt-10 flex flex-col">
        몬가 채워질 부분
        {/*  <Divider text={"Reply"} />*/}
        {/*  <ReplyWrite />*/}
        {/*  <ReplyList />*/}
      </div>
    </div>
  );
}
