const getArticale = async () => {
  const request = await fetch('http://localhost:3001/api/getArticle?id=123');
  const requestJson = await request.json();
  return requestJson;
};