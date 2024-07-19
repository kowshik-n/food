const Shimmer =()=>{
    return (
        <div className="bg-white pt-3">
      <div className="p-3 w-[100%px] h-14 md:h-20 bg-slate-400 rounded-md animate-pulse m-4"></div>
      <div className="flex flex-wrap justify-center items-center m-4">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="flex flex-wrap m-4 p-4 h-[350px] w-[300px] shadow-lg
                bg-white rounded-md"
            >
              <div className="w-[300px] h-[180px] bg-slate-400  animate-pulse rounded-md"></div>
              <h3 className="w-full h-6 bg-slate-500 my-3 rounded-md"></h3>
              <h4 className="w-3/4 h-8 bg-slate-400 rounded-md"></h4>
              <div className="w-full mt-4 mb-2 h-8 grid grid-cols-3 gap-4">
                <div className="h-6 bg-slate-500 rounded col-span-1"></div>
                <div className="h-6 bg-slate-500 rounded col-span-1"></div>
                <div className="h-6 bg-slate-500 rounded col-span-1"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Shimmer;