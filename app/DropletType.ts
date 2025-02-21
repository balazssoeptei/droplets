export enum DropletType {
  Black = "Black",
  Blue = "Blue",
  Green = "Green",
  Red = "Red"
}

type ColorString = string

export function dropletColor(dropletType: DropletType): ColorString {
  if (dropletType === DropletType.Black) {
    return "rgba(0, 0, 0, 0.5)"
  }

  if (dropletType === DropletType.Blue) {
    return "rgba(0, 0, 250, 0.5)"
  }

  if (dropletType === DropletType.Green) {
    return "rgba(0, 250, 0, 0.5)"
  }

  if (dropletType === DropletType.Red) {
    return "rgba(250, 0, 0, 0.5)"
  }
}