import { Home, Package, ChefHat } from "lucide-react";

export function Header() {
  return (
    <div className="bg-[#161616] border-b border-[#333333] rounded-tl-[12px] rounded-tr-[12px] px-4 py-4">
      <div className="flex items-center justify-between max-w-[1800px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-[12px] bg-gradient-to-b from-[#785ae6] to-[#32c6cb]" />
          <h1 className="text-neutral-50 text-[18px]">Materials Management System</h1>
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-[#161616] hover:bg-[#26D9C7] transition-all duration-300 px-3 py-2 rounded-[12px] text-[#a5a5a5] hover:text-white">
            <Home size={18} />
            <span className="text-[16px]">Главная</span>
          </button>
          
          <button className="flex items-center gap-2 bg-[#161616] hover:bg-[#26D9C7] transition-all duration-300 px-3 py-2 rounded-[12px] text-[#a5a5a5] hover:text-white">
            <Home size={18} />
            <span className="text-[16px]">История</span>
          </button>
          
          <button className="flex items-center gap-2 bg-[#8347eb] hover:bg-[#26D9C7] transition-all duration-300 px-3 py-2 rounded-[12px] text-white">
            <Package size={18} />
            <span className="text-[16px]">Расходники</span>
          </button>
          
          <button className="flex items-center gap-2 bg-[#161616] hover:bg-[#26D9C7] transition-all duration-300 px-3 py-2 rounded-[12px] text-[#a5a5a5] hover:text-white">
            <ChefHat size={18} />
            <span className="text-[16px]">Рецепты</span>
          </button>
        </div>
      </div>
    </div>
  );
}
