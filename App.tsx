import { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { MaterialCard } from "./components/MaterialCard";
import { MaterialForm } from "./components/MaterialForm";
//import imgReciepPhoto from "figma:asset/20f579316b47d397eec5b77e8ce9d50586daef08.png";
//import imgReciepPhoto1 from "figma:asset/a09f180d105ee3e3b7e9b928c9dd68abe792a5ad.png";
//import imgReciepPhoto2 from "figma:asset/3424b96eb19833fec7cdff843bcfa73635c87b50.png";
//import imgReciepPhoto3 from "figma:asset/9d1de1ff8fe8afcea7c6de8a55678e9bb19c2343.png";
//import imgReciepPhoto4 from "figma:asset/bca7858586759f09d39c14d27ed18e898939fa81.png";

import imgReciepPhoto from "./images/e57fcc3a-76ad-480e-9173-bafc7cf1256b.png";
import imgReciepPhoto1 from "./images/e57fcc3a-76ad-480e-9173-bafc7cf1256b.png";
import imgReciepPhoto2 from "./images/e57fcc3a-76ad-480e-9173-bafc7cf1256b.png";
import imgReciepPhoto3 from "./images/e57fcc3a-76ad-480e-9173-bafc7cf1256b.png";
import imgReciepPhoto4 from "./images/e57fcc3a-76ad-480e-9173-bafc7cf1256b.png";

interface Material {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
  supplier: string;
  unit: string;
  link?: string;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<Material | null>(null);
  const [materials, setMaterials] = useState<Material[]>([
    {
      id: 1,
      image: imgReciepPhoto,
      name: "Соевой воск KeraSoy Container",
      description: "Соевой воск KeraSoy Container",
      category: "Воск",
      supplier: "greenwax.ru",
      unit: "кг",
      link: "https://greenwax.ru/product/kerasoy-container"
    },
    {
      id: 2,
      image: imgReciepPhoto1,
      name: "Дой пак пакет 14х20 см для воска",
      description: "Дой пак пакет 14х20 см для воска",
      category: "Упаковочные материалы",
      supplier: "greenwax.ru",
      unit: "штуки",
      link: "https://greenwax.ru/product/doy-pack"
    },
    {
      id: 3,
      image: imgReciepPhoto,
      name: "Кокосовый воск Kerax Coconut Container",
      description: "Кокосовый воск Kerax Coconut Container",
      category: "Воск",
      supplier: "greenwax.ru",
      unit: "кг",
      link: "https://greenwax.ru/product/kerax-coconut"
    },
    {
      id: 4,
      image: imgReciepPhoto2,
      name: "Zip-lock пакеты для грунта и керамзита",
      description: "Zip-lock пакеты для грунта и керамзита",
      category: "Воск",
      supplier: "greenwax.ru",
      unit: "штуки",
      link: "https://greenwax.ru/product/ziplock"
    },
    {
      id: 5,
      image: imgReciepPhoto3,
      name: "Масло Лаванда",
      description: "Масло Лаванда",
      category: "Ароматическое масло",
      supplier: "aromausa.ru",
      unit: "гр",
      link: "https://aromausa.ru/lavender"
    },
    {
      id: 6,
      image: imgReciepPhoto4,
      name: "Масло Белый дуб и ваниль",
      description: "Масло Белый дуб и ваниль",
      category: "Ароматическое масло",
      supplier: "aromausa.ru",
      unit: "гр",
      link: "https://aromausa.ru/oak-vanilla"
    }
  ]);

  const handleSubmitMaterial = (materialData: any) => {
    // Обработка изображения
    let imageUrl = imgReciepPhoto;
    if (materialData.image instanceof File) {
      imageUrl = URL.createObjectURL(materialData.image);
    } else if (typeof materialData.image === 'string') {
      imageUrl = materialData.image;
    }

    if (editingMaterial) {
      // Редактирование существующего
      setMaterials(materials.map(m => 
        m.id === editingMaterial.id 
          ? { 
              ...m, 
              name: materialData.name,
              category: materialData.category,
              unit: materialData.unit,
              link: materialData.link,
              supplier: materialData.supplier,
              description: materialData.name,
              image: materialData.image instanceof File || typeof materialData.image === 'string' ? imageUrl : m.image
            }
          : m
      ));
      setEditingMaterial(null);
    } else {
      // Добавление нового
      const material: Material = {
        id: materials.length + 1,
        image: imageUrl,
        name: materialData.name,
        description: materialData.name,
        category: materialData.category,
        supplier: materialData.supplier,
        unit: materialData.unit,
        link: materialData.link
      };
      setMaterials([...materials, material]);
    }
    setShowForm(false);
  };

  const handleDeleteMaterial = (id: number) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  const handleDuplicateMaterial = (id: number) => {
    const material = materials.find(m => m.id === id);
    if (material) {
      const duplicate: Material = {
        ...material,
        id: materials.length + 1,
        name: material.name + " (копия)"
      };
      setMaterials([...materials, duplicate]);
    }
  };

  const handleEditMaterial = (id: number) => {
    const material = materials.find(m => m.id === id);
    if (material) {
      setEditingMaterial(material);
      setShowForm(true);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingMaterial(null);
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <div className="max-w-[1800px] mx-auto">
        {/* Шапка */}
        <Header />

        {/* Заголовок страницы */}
        <div className="bg-[#121212] pt-6 pb-4 px-4">
          <h2 className="text-neutral-50 text-[28px]">Расходники</h2>
          <p className="text-[#a5a5a5] text-[16px] mt-1">
            Каталог расходников используемых в производстве продукции
          </p>
        </div>

        {/* Поиск и кнопка добавления */}
        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery}
          onAddClick={() => {
            setEditingMaterial(null);
            setShowForm(true);
          }}
        />

        {/* Сетка карточек */}
        <div className="px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1800px] mx-auto">
            {materials
              .filter((material) => {
                const query = searchQuery.toLowerCase();
                return (
                  material.name.toLowerCase().includes(query) ||
                  material.description.toLowerCase().includes(query) ||
                  material.supplier.toLowerCase().includes(query)
                );
              })
              .map((material) => (
                <MaterialCard 
                  key={material.id} 
                  {...material}
                  onDelete={() => handleDeleteMaterial(material.id)}
                  onDuplicate={() => handleDuplicateMaterial(material.id)}
                  onEdit={() => handleEditMaterial(material.id)}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Модальное окно формы */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <MaterialForm 
            onClose={handleCloseForm}
            onSubmit={handleSubmitMaterial}
            editingMaterial={editingMaterial}
          />
        </div>
      )}
    </div>
  );
}
