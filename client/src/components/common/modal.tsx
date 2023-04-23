import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function NextModal({ open = false, nextQuestion }: any) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleNextQuestion = () => {
    nextQuestion();
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <div
          className="bg-gray-500 h-full w-full absolute z-10 grid justify-center items-center rounded-2xl n "
          style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
        >
          <button
            className="bg-violet-400  px-6 py-2 mx-auto rounded"
            onClick={handleNextQuestion}
          >
            다음문제_
          </button>
        </div>
      </Transition>
    </>
  );
}
