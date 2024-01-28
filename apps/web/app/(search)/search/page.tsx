import ListWithObserver from "./_component/ListWithObserver";

const getImage = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/search`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("error");
  return response.json();
};

async function Search() {
  const images = await getImage();

  return (
    <>
      <ListWithObserver initailImages={images} />
    </>
  );
}

export default Search;
