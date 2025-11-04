import { MoreVertical } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface MaterialCardProps {
  image: string;
  name: string;
  description: string;
  category: string;
  supplier: string;
  unit: string;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onEdit?: () => void;
}

export function MaterialCard({ image, name, description, category, supplier, unit, onDelete, onDuplicate, onEdit }: MaterialCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const handleEdit = () => {
    onEdit?.();
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333333] rounded-[12px] p-5 flex flex-col gap-4 transition-all duration-300 hover:border-[#8347eb] hover:shadow-[0_0_20px_rgba(131,71,235,0.3)] relative">
      {/* Верхняя часть с изображением, категорией и меню */}
      <div className="flex items-start gap-3">
        <img
          src={image}
          alt={name}
          className="w-[50px] h-[50px] rounded-[12px] object-cover flex-shrink-0"
        />
        <div className="flex-1 flex items-center justify-end gap-2 min-w-0">
          <div className="bg-[#1a1a1a] border border-[#333333] rounded-[36px] px-3 py-1 flex items-center justify-center flex-shrink-0">
            <span className="text-[#fafaef] text-[13px] whitespace-nowrap">{category}</span>
          </div>
          <div className="relative flex-shrink-0" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 hover:bg-[#292929] rounded-md transition-colors"
            >
              <MoreVertical size={18} className="text-[#a5a5a5]" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-1 bg-[#1a1a1a] border border-[#333333] rounded-[8px] py-1 w-[150px] z-10 shadow-lg">
                <button
                  onClick={() => {
                    onDuplicate?.();
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 text-[14px] text-[#fafaef] hover:bg-[#292929] transition-colors"
                >
                  Копировать
                </button>
                <button
                  onClick={() => {
                    onDelete?.();
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 text-[14px] text-[#ff6b6b] hover:bg-[#292929] transition-colors"
                >
                  Удалить
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Название */}
      <div>
        <h3 className="text-[#fafaef] text-[20px] truncate">{name}</h3>
        <p className="text-[#a5a5a5] text-[14px] mt-1">{description}</p>
      </div>

      {/* Информация */}
      <div className="space-y-2">
        <div className="flex justify-between text-[14px]">
          <span className="text-[#a5a5a5]">Поставщик:</span>
          <span className="text-white">{supplier}</span>
        </div>
        <div className="flex justify-between text-[14px]">
          <span className="text-[#a5a5a5]">Единицы измерения</span>
          <span className="text-white">{unit}</span>
        </div>
      </div>

      {/* Кнопка редактирования */}
      <button
        onClick={handleEdit}
        className="bg-[#121212] hover:bg-[#26D9C7] transition-all duration-300 border border-[#292929] rounded-[12px] py-3 text-[#fafaeb] text-[14px] text-center"
      >
        Изменить расходник
      </button>
    </div>
  );
}
