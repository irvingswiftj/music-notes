const FLAT_SIGN = '♭';
const SHARP_SIGN = '♯';

exports.noteVarientToUTF8 = (str) => {
  const neutralString = '';
  const flatStrings = [FLAT_SIGN, 'b', 'flat'];
  const sharpStrings = [SHARP_SIGN, '#', 'sharp'];

  if (!str) {
    return neutralString;
  }

  if (flatStrings.indexOf(str) >= 0) {
    return FLAT_SIGN;
  }

  if (sharpStrings.indexOf(str) >= 0) {
    return SHARP_SIGN;
  }

  return neutralString;
};
