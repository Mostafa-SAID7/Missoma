import { useFilter } from "@/contexts/FilterContext";
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface PaginationProps {
  totalItems?: number;
}

const Pagination = ({ totalItems = 24 }: PaginationProps) => {
  const { filters, setCurrentPage } = useFilter();
  const { currentPage, itemsPerPage } = filters;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate page range for display
  const getPageRange = () => {
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return { startPage, endPage };
  };

  const { startPage, endPage } = getPageRange();

  if (totalPages <= 1) return null;

  return (
    <div className="w-full flex justify-center py-8">
      <PaginationRoot>
        <PaginationContent className="gap-1">
          {/* Previous button */}
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`cursor-pointer ${
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "hover:bg-card"
              }`}
            />
          </PaginationItem>

          {/* First page and ellipsis */}
          {startPage > 1 && (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={() => {
                    setCurrentPage(1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="cursor-pointer"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              {startPage > 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}

          {/* Page numbers */}
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(
            (page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          {/* Last page and ellipsis */}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  onClick={() => {
                    setCurrentPage(totalPages);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="cursor-pointer"
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          {/* Next button */}
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`cursor-pointer ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "hover:bg-card"
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationRoot>
    </div>
  );
};

export default Pagination;