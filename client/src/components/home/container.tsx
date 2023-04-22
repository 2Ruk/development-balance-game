import BalanceContentCard from "@/components/balance/content";
import ReplyWrite from "@/components/reply/reply-write";
import ReplyList from "@/components/reply/reply-list";
import Divider from "@/components/common/divider";
import { useRouter } from "next/router";

const balanceContent = [
  {
    content: "천재 바퀴벌레 사수에게 배우기",
    value: 1,
    percent: 60,
  },
  {
    content: "평범한 사수에게 배우기",
    value: 2,
    percent: 40,
  },
];
export default function MainContainer() {
  const router = useRouter();
  const { question: questionString } = router.query;
  const question = Number(questionString);

  return (
    <div className="max-w-lg mx-auto shadow-2xl bg-gray-300">
      <div className=" py-8 px-4  lg:px-6 lg:py-8">
        <section aria-labelledby="details-heading">
          <div className=" grid grid-rows-2 gap-y-5 ">
            {balanceContent.map(({ content, value, percent }, index) => {
              return (
                <BalanceContentCard
                  key={index}
                  content={content}
                  value={value}
                  percent={percent}
                />
              );
            })}
          </div>
        </section>
      </div>
      <div className="bg-white mx-auto px-6 pt-10 flex flex-col">
        <Divider text={"Reply"} />
        <ReplyWrite />
        <ReplyList />
      </div>
    </div>
  );
}
