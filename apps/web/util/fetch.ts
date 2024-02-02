async function getData<T>(url: string, count: number) : Promise<Array<T>> {
    const response = await fetch(`${url}?count=${count}`);
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return response.json();
  }

  export { getData}