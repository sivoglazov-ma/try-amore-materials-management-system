import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddClick: () => void;
}

export function SearchBar({ searchQuery, onSearchChange, onAddClick }: SearchBarProps) {
  return (
    <div className="bg-[#121212] py-4 px-4">
      <div className="max-w-[1800px] mx-auto flex gap-3 items-center">
        <div className="flex-1 bg-[#121212] border border-[#292929] rounded-[12px] px-3 py-2 flex items-center gap-2 transition-all duration-300 hover:border-[#8347eb] hover:shadow-[0_0_20px_rgba(131,71,235,0.3)]">
          <Search size={20} className="text-[#a5a5a5]" />
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 bg-transparent text-[#a5a5a5] text-[14px] outline-none placeholder:text-[#a5a5a5]"
          />
        </div>
        
        <button 
          onClick={onAddClick}
          className="bg-[#8347eb] hover:bg-[#26D9C7] transition-all duration-300 px-4 py-2 rounded-[12px] text-white text-[14px] whitespace-nowrap"
        >
          + Добавить расходник
        </button>
      </div>
    </div>
  );
}
