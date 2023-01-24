const blocksFilling = async () => {
  const articaleinfo = await getArticale();
  document.getElementById('titulo').innerText = articaleinfo[0].content;
  document.getElementById('articale-paragraph').innerText = articaleinfo[1].content;
  document.getElementById('articale-img').src = articaleinfo[2].content;
}

blocksFilling();

const editParagraph = document.getElementById('paragraph-btn');
const editImage = document.getElementById('imagem-btn');
const editionSectionBtn = document.getElementById('edition-section-btn');
const editditionSection = document.getElementById('edition-section');
const imageInput = document.getElementById('edit-image');
const paragraphInput = document.getElementById('edit-paragraph');
const edit = document.getElementById('edit');

const showEditionSection = () => {
  editditionSection.style.display = 'block';
}

const imageEdition = () => {
  imageInput.style.display = 'block';
  paragraphInput.style.display = 'none';
  editditionSection.style.display = 'none';
  edit.style.display = 'block';
}
const textEdition = () => {
  paragraphInput.style.display = 'block';
  imageInput.style.display = 'none';
  editditionSection.style.display = 'none';
  edit.style.display = 'block';
}

const blocksUpdating = async (event) => {
  if(imageInput) {
    await updateArticale({ type: 'paragraph', content: event.target.value })
  }
  if(paragraphInput) {
    await updateArticale({ type: 'img', content: event.target.value })
  }

  console.log(event.target.value);
}

editParagraph.addEventListener('click', textEdition);
editParagraph.addEventListener('change', textEdition);
editImage.addEventListener('click', imageEdition);
editionSectionBtn.addEventListener('click', showEditionSection);
edit.addEventListener('click', blocksUpdating);
