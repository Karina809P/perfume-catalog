

// src/containers/CatalogPage/CatalogPage.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Perfume } from '../../types/perfume';  // імпортуємо тип із types
import { fetchPerfumes } from '../../redux/perfumes/perfumeAPI';
import PerfumeCard from '../../components/PerfumeCard/PerfumeCard'; // перевір правильний шлях
import Filters from '../../components/Filters/Filters'; // якщо є компонент фільтрів
import Pagination from '../../components/Pagination/Pagination'; // якщо є компонент пагінації
import { Search as SearchIcon } from 'react-feather'; // якщо використовуєш іконки

const ITEMS_PER_PAGE = 8;

type FiltersType = {
  gender: string[];
  brand: string[];
};

const CatalogPage: React.FC = () => {
  const [perfumesData, setPerfumesData] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FiltersType>({ gender: [], brand: [] });
  const [tempFilters, setTempFilters] = useState<FiltersType>({ gender: [], brand: [] });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPerfumes = async () => {
      try {
        const data = await fetchPerfumes();
        setPerfumesData(data);
      } catch (error) {
        console.error('Error loading perfumes:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPerfumes();
  }, []);

  // Фільтрація
  let filteredPerfumes = perfumesData.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filters.gender.length > 0) {
    filteredPerfumes = filteredPerfumes.filter(p => filters.gender.includes(p.gender));
  }

  if (filters.brand.length > 0) {
    filteredPerfumes = filteredPerfumes.filter(p => filters.brand.includes(p.brand));
  }

  const totalPages = Math.ceil(filteredPerfumes.length / ITEMS_PER_PAGE);
  const paginatedPerfumes = filteredPerfumes.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const uniqueGenders = Array.from(new Set(perfumesData.map(p => p.gender)));
  const uniqueBrands = Array.from(new Set(perfumesData.map(p => p.brand)));

  const handleTempFilterChange = (newFilters: FiltersType) => {
    setTempFilters(newFilters);
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
    setPage(1);
  };

  const handleResetFilters = () => {
    const reset = { gender: [], brand: [] };
    setFilters(reset);
    setTempFilters(reset);
    setPage(1);
  };

  if (loading) return <p>Завантаження...</p>;

  return (
    <>
      <CenterWrapper>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Пошук за назвою..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <IconWrapper>
            <SearchIcon size={18} />
          </IconWrapper>
        </SearchContainer>
      </CenterWrapper>

      <PageWrapper>
        <FiltersWrapper>
          <Filters
            availableGenders={uniqueGenders}
            availableBrands={uniqueBrands}
            selectedFilters={tempFilters}
            onFilterChange={handleTempFilterChange}
            onApplyFilters={handleApplyFilters}
            onResetFilters={handleResetFilters}
          />
        </FiltersWrapper>

        <CatalogWrapper>
          <PerfumesGrid>
            {paginatedPerfumes.length > 0 ? (
              paginatedPerfumes.map(perfume => (
                <PerfumeCard key={perfume.id} perfume={perfume} />
              ))
            ) : (
              <p>Нічого не знайдено</p>
            )}
          </PerfumesGrid>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </CatalogWrapper>
      </PageWrapper>
    </>
  );
};

export default CatalogPage;

// --- Styled Components ---
const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 32px 8px 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #888;
`;

const PageWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 2rem;
`;

const FiltersWrapper = styled.div`
  flex-basis: 23%;
`;

const CatalogWrapper = styled.div`
  flex: 1;
`;

const PerfumesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
`;
