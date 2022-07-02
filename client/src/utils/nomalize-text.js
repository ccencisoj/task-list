const normalizeText = (text)=> {
  return text.replace(/\n/g, '').replace(/  +/g, ' ');
}

module.exports = normalizeText;