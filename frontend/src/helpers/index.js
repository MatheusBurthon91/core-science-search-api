const saveHistorySearch = (key, value) => {
  const getSearch = JSON.parse(localStorage.getItem(key));
  return getSearch ? localStorage.setItem(key, JSON.stringify([...getSearch, value]))
    : localStorage.setItem(key, JSON.stringify(value));
};

export default saveHistorySearch;
