import ListWithObserver from "./_component/ListWithObserver";
import { SearchTabImage } from "app/api/search/route";

const getImage = async <T,>(): Promise<T> => {
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
      <ListWithObserver fetchCallback={getImage} initialList={images} />
    </>
  );
}

export default Search;
