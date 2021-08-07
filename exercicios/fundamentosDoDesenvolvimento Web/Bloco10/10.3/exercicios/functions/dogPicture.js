const dogPictures = async () => {
  try {
    return await (await fetch('https://dog.ceo/api/breeds/image/random')).json();
  } catch(error) {
     alert(error);
  }
}

module.exports = { dogPictures }