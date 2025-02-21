"use client"

import update from "immutability-helper"
import { useCallback, useState } from "react"
import { useDrop } from "react-dnd"

import { Droplet } from "./Droplet"
import { ItemTypes } from "./ItemTypes"
import { AddNew } from "./AddNew"
import styles from "./Container.module.css"

export const Container = () => {
	const [droplets, setDroplets] = useState([])

	const moveDroplet = useCallback(
		(id, left, top) => {
			setDroplets(
				update(droplets, {
					[id]: {
						$merge: { left, top },
					},
				}),
			)
		},
		[droplets, setDroplets],
	)

	const [_, drop] = useDrop(
		() => ({
			accept: ItemTypes.DROPLET,
			drop(item, monitor) {
				const delta = monitor.getDifferenceFromInitialOffset()
				const left = Math.round(item.left + delta.x)
				const top = Math.round(item.top + delta.y)
				moveDroplet(item.id, left, top)
				return undefined
			},
		}),
		[moveDroplet],
	)

	const removeDroplet = (index) => {
		setDroplets(droplets.filter((_, i) => index != i))
	}

	return (
		(<div>
			<div ref={drop} className={styles.container}>
				{droplets.map((droplet, i) => {
					const { top, left, type } = droplet
					return (
						<Droplet key={`item_${i}`} id={i} left={left} top={top} type={type} remove={() => removeDroplet(i)} />
					)
				})}
			</div>
			<div>
				<AddNew onClick={(newItem) => { setDroplets([...droplets, newItem]) }} />
			</div>
		</div>)
	)
}