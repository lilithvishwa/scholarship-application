export function getInitials(name: string): string {
  if (!name.trim()) return "";

  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    const firstLetter = words[0][0].toUpperCase();
    const lastLetter = words[0][words[0].length - 1].toUpperCase();
    return firstLetter + lastLetter;
  }

  return words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase();
}
