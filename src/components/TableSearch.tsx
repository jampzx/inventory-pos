import Image from "next/image";

const TableSearch = ({ onSearch }: { onSearch: (term: string) => void }) => {
  return (
    <div className="w-full sm:w-auto flex items-center gap-2 text-xs sm:text-sm rounded-full ring-[1.5px] ring-gray-300 px-2 sm:px-3 py-1 bg-white">
      <Image
        src="/search.png"
        alt="Search"
        width={14}
        height={14}
        className="flex-shrink-0"
      />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full sm:w-[140px] md:w-[180px] lg:w-[200px] py-1 bg-transparent outline-none text-xs sm:text-sm placeholder:text-gray-400"
      />
    </div>
  );
};

export default TableSearch;
