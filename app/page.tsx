"use client";
import {
  Container,
  InputSearch,
  Pagination,
  Select,
  CountryList,
} from "@/components";
import { useAppContext, usePagination} from "@/hooks";

export default function Home() {
  const { error,loading } = useAppContext();
  const { currentItems,setCurrentPage,currentPage } = usePagination();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        currentItems={currentItems}
      />
      {!error && (
        <Pagination onPageChange={onPageChange} currentPage={currentPage}/>
      )}
    </Container>
  );
}
