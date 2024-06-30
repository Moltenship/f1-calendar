import type { RaceEvent } from "@/types/raceEvent"
import type { DateTimeObject, EventJSON } from "ical-js-parser"
import { DateTime } from "luxon"

const DATE_FORMAT = "yyyyMMdd"
const TIME_FORMAT = "HHmmss"
const DATE_TIME_FORMAT = `${DATE_FORMAT}${TIME_FORMAT}`

function mapDate(date: DateTimeObject) {
	const formattedDate = date.value.replace(/T/g, "")
	if (/Z/g.test(formattedDate)) {
		return DateTime.fromFormat(
			formattedDate.replace(/Z/g, ""),
			DATE_TIME_FORMAT,
			{ zone: "utc" },
		).toJSDate()
	}
	return DateTime.fromFormat(formattedDate, DATE_TIME_FORMAT, {
		zone: date.timezone,
	}).toJSDate()
}

export function mapToRaceEvent(event: EventJSON): RaceEvent {
	const startDate = mapDate(event.dtstart)
	const endDate = mapDate(event.dtend)

	return {
		id: event.uid as string,
		title: event.summary?.replace(/\\/g, "").replace(/\r/g, "") as string,
		location: event.location
			?.replace(/\\n/g, "\n")
			.replace(/\\,/g, ",") as string,
		startDate,
		endDate,
	}
}
