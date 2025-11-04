import { useState } from "react";
import { Upload, X, ChevronDown } from "lucide-react";
import svgPaths from "../imports/svg-isb758qp2k";

interface AddMaterialFormProps {
  onClose: () => void;
  onSubmit: (material: any) => void;
}

function UploadIcon() {
  return (
    <div className="relative size-[40px]">
      <div className="absolute inset-[11.45%_15.63%_11.46%_15.63%]">
        <div className="absolute inset-[-1.62%_-1.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 32">
            <g>
              <path d={svgPaths.p16350e80} stroke="#A5A5A5" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.pff5dc00} stroke="#A5A5A5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.25 13.4167V24.7067" stroke="#A5A5A5" strokeLinecap="round" strokeMiterlimit="10" />
              <path d={svgPaths.p1304080} stroke="#A5A5A5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function AddMaterialForm({ onClose, onSubmit }: AddMaterialFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Ароматическое масло",
    unit: "штуки",
    link: "",
    supplier: "",
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="bg-[#121212] border border-[#333333] rounded-[12px] p-6 w-[480px] max-h-[90vh] overflow-y-auto relative">
      {/* Крестик закрытия */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 p-1 hover:bg-[#292929] rounded-md transition-colors"
      >
        <X size={20} className="text-[#a5a5a5]" />
      </button>

      <form onSubmit={handleSubmit}>
        {/* Заголовок */}
        <div className="mb-5">
          <h2 className="text-white text-[18px] mb-1">Новый расходник</h2>
          <p className="text-[#a5a5a5] text-[14px]">Добавьте новый расходник в каталог</p>
        </div>

        {/* Наименование */}
        <div className="mb-4">
          <label className="text-white text-[15px] block mb-2">Наименование</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Масло Роза и кардамон"
            className="w-full bg-[#121212] border border-[#292929] rounded-[11px] px-4 py-2.5 text-[#a5a5a5] text-[15px] outline-none transition-all duration-300 focus:border-[#8347eb] focus:shadow-[0_0_20px_rgba(131,71,235,0.3)]"
          />
        </div>

        {/* Категория и Единица измерения */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-white text-[15px] block mb-2">Категория</label>
              <div className="relative">
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#121212] border border-[#292929] rounded-[11px] px-4 py-2.5 pr-10 text-[#a5a5a5] text-[15px] outline-none appearance-none transition-all duration-300 hover:border-[#8347eb] focus:border-[#8347eb] focus:shadow-[0_0_20px_rgba(131,71,235,0.3)] [&>option:checked]:bg-[#26D9C7] [&>option:checked]:text-white"
                  style={{
                    colorScheme: 'dark'
                  }}
                >
                  <option value="Ароматическое масло">Ароматическое масло</option>
                  <option value="Воск">Воск</option>
                  <option value="Упаковочные материалы">Упаковочные материалы</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a5a5a5] pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="text-white text-[15px] block mb-2">Единица измерения</label>
              <div className="relative">
                <select
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  className="w-full bg-[#121212] border border-[#292929] rounded-[11px] px-4 py-2.5 pr-10 text-[#a5a5a5] text-[15px] outline-none appearance-none transition-all duration-300 hover:border-[#8347eb] focus:border-[#8347eb] focus:shadow-[0_0_20px_rgba(131,71,235,0.3)] [&>option:checked]:bg-[#26D9C7] [&>option:checked]:text-white"
                  style={{
                    colorScheme: 'dark'
                  }}
                >
                  <option value="штуки">штуки</option>
                  <option value="кг">кг</option>
                  <option value="гр">гр</option>
                  <option value="л">л</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a5a5a5] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Ссылка на магазин */}
        <div className="mb-4">
          <label className="text-white text-[15px] block mb-2">Ссылка на магазин</label>
          <input
            type="text"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            placeholder="https://aromausa.ru/fragrance/tproduct/3977123..."
            className="w-full bg-[#121212] border border-[#292929] rounded-[11px] px-4 py-2.5 text-[#a5a5a5] text-[15px] outline-none transition-all duration-300 focus:border-[#8347eb] focus:shadow-[0_0_20px_rgba(131,71,235,0.3)]"
          />
        </div>

        {/* Поставщик */}
        <div className="mb-4">
          <label className="text-white text-[15px] block mb-2">Поставщик</label>
          <input
            type="text"
            value={formData.supplier}
            onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
            placeholder="aromausa.ru"
            className="w-full bg-[#121212] border border-[#292929] rounded-[11px] px-4 py-2.5 text-[#a5a5a5] text-[15px] outline-none transition-all duration-300 focus:border-[#8347eb] focus:shadow-[0_0_20px_rgba(131,71,235,0.3)]"
          />
        </div>

        {/* Фото расходника */}
        <div className="mb-6">
          <label className="text-white text-[15px] block mb-2">Фото расходника</label>
          <div className="w-full bg-[#121212] border border-dashed border-[#a5a5a5] rounded-[11px] h-[80px] flex flex-col items-center justify-center cursor-pointer hover:border-[#8347eb] transition-colors">
            <UploadIcon />
            <p className="text-[#a5a5a5] text-[14px] mt-1">Загрузить файл</p>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-[#121212] border border-[#292929] rounded-[12px] py-2.5 text-white text-[15px] text-center hover:bg-[#26D9C7] hover:border-[#26D9C7] transition-all duration-300"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="flex-1 bg-[#8347eb] rounded-[12px] py-2.5 text-white text-[15px] text-center transition-all duration-300"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}
