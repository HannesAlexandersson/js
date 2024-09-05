const emojis = {
  joy: '😂',
  rage: '😡',
  scream: '😱',
  poop: '💩',
  smirk: '😏',
  sunglasses: '😎',
  thumbsdown: '👎',
  thumbsup: '👍',
  unicorn: '🦄',
};



// Function to replace emoji names with emoji characters in the Markdown text
function replaceEmoji(text) {
  // Iterate over each emoji name in the emoji array to find the match
  for (let emojiName in emojis) {
    // Create a regular expression to match the emoji name surrounded by colons
    const regex = new RegExp(emojiName, "g");
    // Replace all occurrences of the emoji name with the corresponding emoji character
    text = text.replace(regex, emojis[emojiName]);
  }
  return text;
}

export { replaceEmoji };