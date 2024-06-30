import { DateTime } from "luxon"
import "./Calendar.scss"

import { cn } from "@/lib/utils"
import type { RaceEvent } from "@/types/raceEvent"
import { useCallback } from "react"
import {
	type Components,
	type DateRange,
	type EventPropGetter,
	type Messages,
	Calendar as ReactCalendar,
	type View,
	luxonLocalizer,
} from "react-big-calendar"
import { DayEvent } from "./DayEvent"
import { DayHeader } from "./DayHeader"
import { Toolbar } from "./Toolbar"

const localizer = luxonLocalizer(DateTime, {
	firstDayOfWeek: 1,
})

type Props = {
	events: RaceEvent[]
}

const components: Components<RaceEvent> = {
	event: DayEvent,
	header: DayHeader,
	toolbar: Toolbar,
}

export const Calendar = ({ events }: Props) => {
	const a = ""

	const getEventStyles = useCallback<EventPropGetter<RaceEvent>>(
		(e) => ({
			className: cn("bg-pink-600"),
		}),
		[],
	)

	return (
		<ReactCalendar
			events={events}
			eventPropGetter={getEventStyles}
			formats={{
				timeGutterFormat: "HH:mm",
				eventTimeRangeFormat: ({ start, end }, _, localizer) =>
					`${localizer?.format(start, "HH:mm")} - ${localizer?.format(end, "HH:mm")}`,
			}}
			startAccessor="startDate"
			endAccessor="endDate"
			components={components}
			titleAccessor="title"
			defaultView="week"
			localizer={localizer}
		/>
	)
}
