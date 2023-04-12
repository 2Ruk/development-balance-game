import BalanceContentCard from "@/components/balance/content";
import ReplyWrite from "@/components/reply/reply-write";
import ReplyList from "@/components/reply/reply-list";
import Divider from "@/components/common/divider";

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
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className=" grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
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
      <div className="bg-white mx-auto max-w-2xl py-12 sm:px-20 sm:py-16 lg:max-w-5xl lg:px-6 px-6 flex flex-col rounded-t-2xl">
        <Divider text={"Reply"} />
        <ReplyWrite />
        <ReplyList />
      </div>
    </div>
  );
}
