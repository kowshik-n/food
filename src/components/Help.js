import { FAQdata } from "../utils/constents";
import FawCard from "./FawCard";
const Help = () => {
  const handleClick = (e) => {
    e.currentTarget.classList.toggle("collapse-close");
  };

  return (
    <div className="flex flex-col bg-white items-center pb-9">
      <h1 className="mt-12 mb-6 text-2xl text-cyan-900 font-bold">FAQs</h1>
      <h1 className="text-6xl font-serif font-bold text-black">
        Frequently Asked Questions
      </h1>
      <h1 className="text-3xl mt-6 mb-14 text-gray-400">
        Have Questions? We are here to help
      </h1>
      {FAQdata.map((data) => {
        return (
          <div>
            <FawCard ONClicker={handleClick} que={data.que} info={data.ans} />
          </div>
        );
      })}
      <div className="flex flex-col mt-6 items-center bg-slate-100 py-8 px-[450] rounded-3xl">
        <div className=" text-black text-3xl mb-4">Still Have Questions?</div>
        <div className="text-slate-400">
          Contact nkowshik2001@gmail.com for further queries
        </div>
      </div>
    </div>
  );
};

export default Help;
