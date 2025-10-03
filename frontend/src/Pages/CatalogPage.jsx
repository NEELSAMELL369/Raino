import { useState } from "react";
import {
  useDepartments,
  useCategories,
  useProducts,
  useBrands,
} from "../hooks/useCatalog";
import DepartmentSelect from "../components/DepartmentSelect";
import CategorySelect from "../components/CategorySelect";
import BrandSelect from "../components/BrandSelect";
import RatingSelect from "../components/RatingSelect";
import PriceFilter from "../components/PriceFilter";
import DiscountFilter from "../components/DiscountFilter";
import ProductList from "../components/ProductList";

export default function CatalogPage() {
  const { data: departmentsData } = useDepartments();
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [discountRange, setDiscountRange] = useState({ min: "", max: "" });

  const { data: categoriesData } = useCategories(selectedDept);
  const { data: brandsData } = useBrands(selectedDept, selectedCat);

  const { data: productsData } = useProducts(
    selectedDept,
    selectedCat,
    selectedBrand,
    selectedRating,
    priceRange,
    discountRange
  );

  return (
    <div>
      <h1>Catalog</h1>

      <DepartmentSelect
        departments={departmentsData?.departments}
        selectedDept={selectedDept}
        onChange={(dept) => {
          setSelectedDept(dept);
          setSelectedCat("all");
          setSelectedBrand("all");
          setSelectedRating("all");
          setPriceRange({ min: "", max: "" });
          setDiscountRange({ min: "", max: "" });
        }}
      />

      <CategorySelect
        categories={categoriesData?.categories}
        selectedCat={selectedCat}
        onChange={(cat) => {
          setSelectedCat(cat);
          setSelectedBrand("all");
          setSelectedRating("all");
        }}
      />

      <BrandSelect
        brands={brandsData?.brands || []}
        selectedBrand={selectedBrand}
        onChange={setSelectedBrand}
      />

      <RatingSelect
        selectedRating={selectedRating}
        onChange={setSelectedRating}
      />

      <PriceFilter priceRange={priceRange} onChange={setPriceRange} />

      <DiscountFilter
        discountRange={discountRange}
        onChange={setDiscountRange}
      />

      <h2>Products</h2>
      <ProductList products={productsData?.products} loading={false} />
    </div>
  );
}
