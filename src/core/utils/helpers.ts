export function limitText(text: string, count: number) {
  return text.slice(0, count) + (text.length > count ? "..." : "")
}

export function limitMiddleText(fullStr: string, strLen: number, separator: string) {
  if (fullStr.length <= strLen) return fullStr

  separator = separator || "..."

  var sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2)

  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars)
}

export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getNameRarity = (type: number) => {
  if (type > 6) throw new Error("Rarity does not exist.")

  const indexRarity = type > 0 ? type - 1 : type

  const rarities: string[] = ["Common", "Uncommon", "Unique", "Rare", "Epic", "SpaceX"]
  return rarities[indexRarity]
}

export const getColorRarity = (type: number) => {
  if (type > 6) throw new Error("Rarity does not exist.")

  const indexRarity = type > 0 ? type - 1 : type

  const rarities: string[] = ["#d8d8d8", "#80e220", "#618ffc", "#ae21e2", "#fd8209", "#b89400"]
  return rarities[indexRarity]
}
