"use client";
import {
  Container,
  InputSearch,
  Pagination,
  Select,
  CountryList,
} from "@/components";
import { ICountryItem } from "@/types";
import { usePagination ,useAppContext, useThemeContext} from "@/hooks";
import { itemsPerPage } from "@/context/AppContext";

export default function Home() {
  const {theme} = useThemeContext();
  console.log(theme);
  const { error,loading, filteredCountries } =
    useAppContext();

  const { currentPage, currentItems, pagesCount, setCurrentPage } =
    usePagination<ICountryItem>({
      items: filteredCountries,
      itemsPerPage,
    });
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0,0);
  }
  return (
    <Container>
      <div className="actions">
        <InputSearch/>
        <Select />
      </div>
      <CountryList
        error={error}
        loading={loading}
        countries={filteredCountries}
        currentItems={currentItems}
      />
      {!error && (
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </Container>
  );
}
