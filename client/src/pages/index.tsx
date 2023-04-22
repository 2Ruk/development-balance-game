import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-white h-screen ">
      <div className="bg-gray-300 flex  shadow flex-col text-center h-screen max-w-lg justify-center gap-5 mx-auto">
        <div>
          <Image
            className="mx-auto shadow-2xl rounded-2xl"
            src="/common/undraw_Coffee_Time_1a47.png"
            alt="drink coffee"
            width={300}
            height={300}
          />
          <div className=" mx-auto px-6 pt-10 flex justify-center">
            <span className="slide-in-left text-gray-700 bg-gray-200 rounded-lg py-2 px-4">
              당연히 <b>A</b>아니야?
            </span>
          </div>
        </div>
        <div className="lg:p-20 flex justify-center slide-in-bck-center">
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-xl ">
            둘다 틀렸어, 내 답은...
          </button>
        </div>
        <div>
          <div className=" mx-auto px-6 pb-10 flex justify-center">
            <span className="slide-in-right text-gray-700 bg-gray-200 rounded-lg py-2 px-4">
              모라는거야, <b>B</b>지!
            </span>
          </div>
          <Image
            className="mx-auto shadow-2xl rounded-2xl"
            src="/common/undraw_Drink_coffee_4nib.png"
            alt="drink coffee"
            width={300}
            height={300}
          />
        </div>
      </div>
    </main>
  );
}
