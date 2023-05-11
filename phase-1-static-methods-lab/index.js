class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^\w\s'-]+/g, "");
  }
  static titleize(string) {
    const words = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const senteceWords = string.toLowerCase().split(" ");
    const titleizedWords = [];

    for (let i = 0; i < senteceWords.length; i++) {
      const word = senteceWords[i];
      if (i === 0 || !words.includes(word)) {
        titleizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
      } else {
        titleizedWords.push(word);
      }
    }
    return titleizedWords.join(" ");
  }
}
