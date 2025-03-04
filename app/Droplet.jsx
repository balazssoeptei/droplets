import { useDrag } from "react-dnd"

import { dropletColor } from "./DropletType"
import { ItemTypes } from "./ItemTypes"

const dropletStyle = (dropletType) => {
	return {
		position: "absolute",
		backgroundColor: dropletColor(dropletType),
		borderRadius: "100%",
		cursor: "move",
		width: "50px",
		height: "50px",
	}
}

export const Droplet = ({ id, left, top, type, remove }) => {
	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: ItemTypes.DROPLET,
			item: { id, left, top },
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
		[id, left, top],
	)

	const handleClick = (e) => {
		e.preventDefault()

		if (e.type === "contextmenu") {
			remove()
		}
	}

	if (isDragging) {
		return <div ref={drag} />
	}
	return (
		<div
			onClick={handleClick}
			onContextMenu={handleClick}
			className="droplet"
			ref={drag}
			style={{ ...dropletStyle(type), left, top }}
		>
		</div>
	)
}