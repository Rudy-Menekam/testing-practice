 const stringLength = (string) => {

    let index = 0;
  
    while (string.slice(index) !== '') {
      index++;
    }
  
    return index;
  }

  export default stringLength;