import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useFilter } from "@/contexts/FilterContext";

interface FilterSortBarProps {
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
  itemCount: number;
}

const FilterSortBar = ({ filtersOpen, setFiltersOpen, itemCount }: FilterSortBarProps) => {
  const { filters, setCategories, setSortBy, clearAllFilters } = useFilter();
  const [localCategories, setLocalCategories] = useState(filters.categories);

  const categories = ["Earrings", "Bracelets", "Rings", "Necklaces"];

  const handleCategoryChange = (category: string, checked: boolean) => {
    let updated: string[];
    if (checked) {
      updated = [...localCategories, category];
    } else {
      updated = localCategories.filter((c) => c !== category);
    }
    setLocalCategories(updated);
  };

  const handleApplyFilters = () => {
    setCategories(localCategories);
    setFiltersOpen(false);
  };

  const handleClearAll = () => {
    setLocalCategories([]);
    clearAllFilters();
  };

  return (
    <>
      <section className="w-full px-6 mb-8 border-b border-border pb-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-light text-muted-foreground">
            {itemCount} items
          </p>
          
          <div className="flex items-center gap-6">
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="font-light border-border hover:bg-card hover:border-foreground/20 transition-all duration-300 text-foreground"
                >
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-96 bg-background border-l border-border/50 shadow-[0_20px_60px_-20px_hsl(25_30%_15%/0.3)]">
                <SheetHeader className="mb-6 border-b border-border pb-4">
                  <SheetTitle className="text-lg font-light text-foreground">Filters</SheetTitle>
                </SheetHeader>
                
                <div className="space-y-8 overflow-y-auto max-h-[calc(100vh-120px)] pr-4">
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-4 text-foreground tracking-wider uppercase">Category</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-3 group cursor-pointer">
                          <Checkbox 
                            id={category}
                            checked={localCategories.includes(category)}
                            onCheckedChange={(checked) =>
                              handleCategoryChange(category, checked as boolean)
                            }
                            className="border-border/60 group-hover:border-foreground/40 transition-colors data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                          />
                          <Label htmlFor={category} className="text-sm font-light text-foreground cursor-pointer group-hover:text-foreground/80 transition-colors">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-border/30" />

                  {/* Price Filter - Placeholder */}
                  <div>
                    <h3 className="text-sm font-medium mb-4 text-foreground tracking-wider uppercase">Price Range</h3>
                    <p className="text-xs font-light text-muted-foreground">Interactive price slider coming soon</p>
                  </div>

                  <Separator className="border-border/30" />

                  {/* Material Filter - Placeholder */}
                  <div>
                    <h3 className="text-sm font-medium mb-4 text-foreground tracking-wider uppercase">Material</h3>
                    <p className="text-xs font-light text-muted-foreground">Material selection coming soon</p>
                  </div>

                  <Separator className="border-border/30" />

                  <div className="flex flex-col gap-3 pt-6">
                    <Button 
                      onClick={handleApplyFilters}
                      className="w-full bg-foreground text-background hover:bg-foreground/90 font-light rounded-lg transition-all duration-300"
                    >
                      Apply Filters
                    </Button>
                    <Button 
                      onClick={handleClearAll}
                      variant="outline"
                      className="w-full border-border hover:bg-card font-light transition-all duration-300"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-background hover:border-foreground/20 transition-all duration-300 group">
              <span className="text-xs font-light text-muted-foreground group-hover:text-foreground/70 transition-colors">Sort</span>
              <Select value={filters.sortBy} onValueChange={(value) => setSortBy(value as any)}>
                <SelectTrigger className="w-auto border-none bg-transparent text-sm font-light shadow-none rounded-none p-0 h-auto gap-2 group-hover:text-foreground transition-colors [&>svg]:hidden">
                  <SelectValue />
                  <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </SelectTrigger>
                <SelectContent 
                  className="min-w-[200px] border border-border bg-background shadow-lg rounded-2xl overflow-hidden p-1"
                  align="end"
                >
                  <SelectItem value="featured" className="font-light cursor-pointer rounded-lg px-3 py-2 hover:bg-card data-[state=checked]:bg-foreground data-[state=checked]:text-background transition-colors flex justify-between [&>span:last-child]:order-2">Featured</SelectItem>
                  <SelectItem value="price-low" className="font-light cursor-pointer rounded-lg px-3 py-2 hover:bg-card data-[state=checked]:bg-foreground data-[state=checked]:text-background transition-colors flex justify-between [&>span:last-child]:order-2">Price: Low to High</SelectItem>
                  <SelectItem value="price-high" className="font-light cursor-pointer rounded-lg px-3 py-2 hover:bg-card data-[state=checked]:bg-foreground data-[state=checked]:text-background transition-colors flex justify-between [&>span:last-child]:order-2">Price: High to Low</SelectItem>
                  <SelectItem value="newest" className="font-light cursor-pointer rounded-lg px-3 py-2 hover:bg-card data-[state=checked]:bg-foreground data-[state=checked]:text-background transition-colors flex justify-between [&>span:last-child]:order-2">Newest</SelectItem>
                  <SelectItem value="name" className="font-light cursor-pointer rounded-lg px-3 py-2 hover:bg-card data-[state=checked]:bg-foreground data-[state=checked]:text-background transition-colors flex justify-between [&>span:last-child]:order-2">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default FilterSortBar;