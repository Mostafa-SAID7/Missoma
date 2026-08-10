import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  materials: string[];
  sortBy: "featured" | "price-low" | "price-high" | "newest" | "name";
  currentPage: number;
  searchQuery: string;
  itemsPerPage: number;
}

interface FilterContextType {
  filters: FilterState;
  setCategories: (categories: string[]) => void;
  setPriceRange: (range: [number, number]) => void;
  setMaterials: (materials: string[]) => void;
  setSortBy: (sort: FilterState["sortBy"]) => void;
  setCurrentPage: (page: number) => void;
  setSearchQuery: (query: string) => void;
  setItemsPerPage: (items: number) => void;
  clearAllFilters: () => void;
}

const defaultFilters: FilterState = {
  categories: [],
  priceRange: [0, 5000],
  materials: [],
  sortBy: "featured",
  currentPage: 1,
  searchQuery: "",
  itemsPerPage: 12,
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const setCategories = useCallback((categories: string[]) => {
    setFilters((prev) => ({ ...prev, categories, currentPage: 1 }));
  }, []);

  const setPriceRange = useCallback((range: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: range, currentPage: 1 }));
  }, []);

  const setMaterials = useCallback((materials: string[]) => {
    setFilters((prev) => ({ ...prev, materials, currentPage: 1 }));
  }, []);

  const setSortBy = useCallback((sort: FilterState["sortBy"]) => {
    setFilters((prev) => ({ ...prev, sortBy: sort, currentPage: 1 }));
  }, []);

  const setCurrentPage = useCallback((page: number) => {
    setFilters((prev) => ({ ...prev, currentPage: page }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query, currentPage: 1 }));
  }, []);

  const setItemsPerPage = useCallback((items: number) => {
    setFilters((prev) => ({ ...prev, itemsPerPage: items, currentPage: 1 }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setCategories,
        setPriceRange,
        setMaterials,
        setSortBy,
        setCurrentPage,
        setSearchQuery,
        setItemsPerPage,
        clearAllFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter must be used within a FilterProvider");
  return context;
};
