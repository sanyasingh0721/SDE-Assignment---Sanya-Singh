function processData(data) {

  const isLetter = (ch) => {
    const c = ch.charCodeAt(0);
    return (c >= 65 && c <= 90) || (c >= 97 && c <= 122); // A‑Z or a‑z
  };

  const isDigit = (ch) => {
    const c = ch.charCodeAt(0);
    return c >= 48 && c <= 57; // 0‑9
  };

  // Ensure the last‑4 digits are in non‑decreasing order
  const digitsNonDecreasing = (code) => {
    for (let i = 3; i < 6; i++) {
      if (code[i] > code[i + 1]) return false;
    }
    return true;
  };

  /* ----------  main validation routine  ---------- */

  const validCodes = [];

  for (const rawCode of data) {
    // 1. length
    if (rawCode.length !== 7) continue;

    // 2. first 3 letters
    let ok = true;
    for (let i = 0; i < 3; i++) {
      if (!isLetter(rawCode[i])) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    // 3. last 4 digits
    for (let i = 3; i < 7; i++) {
      if (!isDigit(rawCode[i])) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    // 4. digits non‑decreasing
    if (!digitsNonDecreasing(rawCode)) continue;

    // Passed every rule → normalise and keep
    const normalised = rawCode.slice(0, 3).toUpperCase() + rawCode.slice(3);
    validCodes.push(normalised);
  }

  // Sort alphabetically
  validCodes.sort();

  /* ----------  final summary object  ---------- */

  return {
    totalCodes: data.length,
    validCodes: validCodes.length,
    invalidCodes: data.length - validCodes.length,
    normalizedValidCodes: validCodes,
  };
}

module.exports = { processData };
