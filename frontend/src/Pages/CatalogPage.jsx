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
import Layout from "../components/Layout";

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
    <Layout>
      <div className="p-6">
        <div className="flex gap-6">
          {/* Left Sidebar Filters */}
          <aside className="w-64 bg-white shadow-md rounded-xl p-4 space-y-6 sticky top-6 h-fit">
            <div>
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
            </div>

            <div>
              <CategorySelect
                categories={categoriesData?.categories}
                selectedCat={selectedCat}
                onChange={(cat) => {
                  setSelectedCat(cat);
                  setSelectedBrand("all");
                  setSelectedRating("all");
                }}
              />
            </div>

            <div>
              <BrandSelect
                brands={brandsData?.brands || []}
                selectedBrand={selectedBrand}
                onChange={setSelectedBrand}
              />
            </div>

            <div>
              <RatingSelect
                selectedRating={selectedRating}
                onChange={setSelectedRating}
              />
            </div>

            <div>
              <PriceFilter priceRange={priceRange} onChange={setPriceRange} />
            </div>

            <div>
              <DiscountFilter
                discountRange={discountRange}
                onChange={setDiscountRange}
              />
            </div>
          </aside>

          {/* Right Side Products */}
          <main className="flex-1">
            <ProductList products={productsData?.products} loading={false} />
          </main>
        </div>
      </div>
    </Layout>
  );
}
