export function generateRandomUser() {
  const adjectives = [
    "Happy",
    "Lucky",
    "Creative",
    "Adventurous",
    "Silly",
    "Clever",
    "Mysterious",
    "Gentle",
    "Vibrant",
  ];
  const nouns = [
    "Penguin",
    "Star",
    "Explorer",
    "Phoenix",
    "Wizard",
    "Dreamer",
    "Jazz",
    "Trailblazer",
    "Pioneer",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  const randomNumber = Math.floor(Math.random() * 1000); // You can adjust the range as needed

  const id = `${randomAdjective.toLowerCase()}-${randomNoun.toLowerCase()}-${randomNumber}@example.com`;
  const name = `${randomAdjective} ${randomNoun}`;
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generate a random hex color
  const avatar = "https://liveblocks.io/avatars/avatar-1.png";

  const user = {
    id: id,
    info: {
      name: name,
      color: color,
      avatar: avatar,
    },
  };

  return user;
}

// Example usage:
const randomUser = generateRandomUser();
console.log(randomUser);
