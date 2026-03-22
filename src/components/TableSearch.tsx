import Image from "next/image";

const TableSearch = ({ onSearch }: { onSearch: (term: string) => void }) => {
  return (
    <div className="neo-panel flex w-full items-center gap-2 rounded-xl border border-black/10 bg-white/80 px-2.5 py-1.5 text-xs sm:w-auto sm:gap-2.5 sm:px-3 sm:text-sm">
      <Image
        src="/search.png"
        alt="Search"
        width={14}
        height={14}
        className="flex-shrink-0 opacity-80"
      />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-2 bg-transparent py-1 text-xs text-gray-700 outline-none placeholder:text-gray-400 sm:w-[140px] sm:text-sm md:w-[180px] lg:w-[220px]"
      />
    </div>
  );
};

export default TableSearch;
