const useItemFilter = (finalData, searchInput) => {
  const filteredData = finalData?.filter((item) => {
    const itemName = item?.name?.toLowerCase()?.replace(/\s+/g, "");
    const searchTerm = searchInput?.toLowerCase()?.replace(/\s+/g, "");
    return itemName?.includes(searchTerm);
  });
  return { filteredData };
};

export default useItemFilter;
