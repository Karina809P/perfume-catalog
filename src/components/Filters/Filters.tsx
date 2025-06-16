// src/components/Filters/Filters.tsx
import React from 'react';
import {
  FilterSection,
  CheckboxList,
  Label,
  ButtonsWrapper,
  Button,
  ResetButton,
} from './styles';

export interface FiltersType {
  gender: string[];
  brand: string[];
}

interface FiltersProps {
  availableGenders: string[];
  availableBrands: string[];
  selectedFilters: FiltersType;
  onFilterChange: (filters: FiltersType) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  availableGenders,
  availableBrands,
  selectedFilters,
  onFilterChange,
  onApplyFilters,
  onResetFilters,
}) => {
  const handleCheckboxChange = (type: 'gender' | 'brand', value: string) => {
    if (type === 'brand' && value === 'all') {
      // Вибрали "Всі бренди" - очищуємо вибір брендів
      onFilterChange({ ...selectedFilters, brand: [] });
      return;
    }

    if (type === 'brand') {
      const current = selectedFilters.brand;
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      onFilterChange({ ...selectedFilters, brand: updated });
      return;
    }

    // Для статі — звичайна логіка
    const current = selectedFilters[type];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    onFilterChange({ ...selectedFilters, [type]: updated });
  };

  return (
    <div>
      <FilterSection>
        <Label>Стать</Label>
        <CheckboxList>
          {availableGenders.map((gender) => (
            <label key={gender}>
              <input
                type="checkbox"
                checked={selectedFilters.gender.includes(gender)}
                onChange={() => handleCheckboxChange('gender', gender)}
              />
              {gender}
            </label>
          ))}
        </CheckboxList>
      </FilterSection>

      <FilterSection>
        <Label>Бренд</Label>
        <CheckboxList>
          <label key="all">
            <input
              type="checkbox"
              checked={selectedFilters.brand.length === 0}
              onChange={() => handleCheckboxChange('brand', 'all')}
            />
            Всі бренди
          </label>
          {availableBrands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={selectedFilters.brand.includes(brand)}
                onChange={() => handleCheckboxChange('brand', brand)}
              />
              {brand}
            </label>
          ))}
        </CheckboxList>
      </FilterSection>

      <ButtonsWrapper>
        <Button onClick={onApplyFilters}>Застосувати</Button>
        <ResetButton onClick={onResetFilters}>Скинути всі фільтри</ResetButton>
      </ButtonsWrapper>
    </div>
  );
};

export default Filters;
