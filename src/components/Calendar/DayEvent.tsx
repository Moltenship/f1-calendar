import type { RaceEvent } from "@/types/raceEvent"
import type { EventProps } from "react-big-calendar"

export const DayEvent = ({ event }: EventProps<RaceEvent>) => (
	<div>
		<div className="font-semibold text-xs">{event.title}</div>
	</div>
)
