export enum DropletType {
  Black = "Black",
  Blue = "Blue",
  Green = "Green",
  Red = "Red",
}

type ColorString = string

export function dropletColor(dropletType: DropletType): ColorString {
  switch (dropletType) {
    case DropletType.Black:
      return "rgba(0, 0, 0, 0.5)"
    case DropletType.Blue:
      return "rgba(0, 0, 250, 0.5)"
    case DropletType.Green:
      return "rgba(0, 250, 0, 0.5)"
    case DropletType.Red:
      return "rgba(250, 0, 0, 0.5)"
    default:
      const _exhaustiveCheck: never = dropletType
      return _exhaustiveCheck
  }
}