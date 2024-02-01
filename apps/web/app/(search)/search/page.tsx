import ListWithObserver from "./_component/ListWithObserver";
import { SearchTabImage } from "app/api/search/route";
import SearchInput from "components/Input/SearchInput";

const getImage = async <T,>(): Promise<T> => {
  "use server";
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/search`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("error");
  return response.json();
};

async function Search() {
  const images = await getImage<SearchTabImage[]>();

  return (
    <>
      <SearchInput />
      <ListWithObserver
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
          marginTop: "10px",
        }}
        fetchCallback={getImage}
        initialList={images}
      />
    </>
  );
}

export default Search;
