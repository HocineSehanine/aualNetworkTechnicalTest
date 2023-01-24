let getArticalInfo = [
  {
    "id": 0,
    "type": "title",
    "content": "Veja quem está aqui! Bem-vindo ao teste da Atual"
  },
  {
    "id": 1,
    "type": "paragraph",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies id nunc vitae malesuada. Nam quis lacus eu orci consectetur congue quis quis turpis. Ut nec nunc condimentum, venenatis ex vel, semper arcu. Suspendisse in orci id sapien euismod lobortis. Pellentesque ac tortor vitae lorem fermentum dignissim sit amet eget mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    "id": 2,
    "type": "img",
    "content": "https://atual.network/a54c57df2f849fb08c90f9214902aa5a/imgs/image-test.png"
  },
  {
    "id": 3,
    "type": "line"
  }
]

const updateArticalInfo = (body) => {
  const getInfoMustBeChanged = getArticalInfo.findIndex((obj => obj.type === body.type));
  getArticalInfo[getInfoMustBeChanged].content = body.content;

  return getArticalInfo[getInfoMustBeChanged];
}

module.exports = {
  getArticalInfo,
  updateArticalInfo,
}
