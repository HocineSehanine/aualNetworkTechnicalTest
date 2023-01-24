const updateArticalInfo = async (body) => {
  const getArticalInfo = await getArticale();
  const getInfoMustBeChanged = getArticalInfo.findIndex((obj => obj.type === body.type));
  getArticalInfo[getInfoMustBeChanged].content = body.content;

  return getArticalInfo[getInfoMustBeChanged];
}