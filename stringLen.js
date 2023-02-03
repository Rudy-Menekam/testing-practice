 const stringLength = (string) => {
    if (string.length > 10) {
        throw new Error('Invalid string');
    }
    return string.length;
  }

  export default stringLength;