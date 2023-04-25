import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MaterialDetail from "@/components/MaterialDetail";
import { getMaterials } from "@/lib/materials";

const BookDetail = () => {
  const router = useRouter();
  const [materials, setMaterials] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    const fetchMaterials = async () => {
      const materialsData = await getMaterials();
      setMaterials(materialsData);
    };
    fetchMaterials();
  }, []);

  const filteredMaterials = materials.filter(
    (material) => material.id === id
  );

  return (
    <div>
      {filteredMaterials.map((material) => (
        <MaterialDetail key={material.id} material={material} />
      ))}
    </div>
  );
};

export default BookDetail;
