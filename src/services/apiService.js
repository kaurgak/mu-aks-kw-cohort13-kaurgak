const API_URL = window.__ENV__.API_URL;

const handleFetchResponse = (res) => {
  if (res.status >= 400 && res.status < 600) {
    throw new Error(JSON.stringify(res));
  }
  return res.json();
};

const getAllEmployees = () => {
  return fetch(`${API_URL}/employees`).then(handleFetchResponse);
};

const getDetailsById = async (id) => {
  return fetch(`${API_URL}/details/${id}`).then(handleFetchResponse);
};

export { getAllEmployees, getDetailsById };
