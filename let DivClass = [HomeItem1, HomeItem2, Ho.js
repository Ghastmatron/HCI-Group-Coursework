let DivClass = [HomeItem1, HomeItem2, HomeItem3, HomeItem4, HomeItem5, HomeItem6, HomeItem7, HomeItem8, HomeItem9];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const randomizedArray = shuffleArray(DivClass);
 
  
