function passValidator(pass) {
  function passLength(str) {
    if (str.length >= 6 && str.length <= 10) {
        return ''
    } else {
      return `Password must be between 6 and 10 characters`;
    }
  }

  function onlyLetterDigits(str){
      let isLetterDigin = true
      for (const char of str) {
          let code = char.charCodeAt
      }
  }
}
