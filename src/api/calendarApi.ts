import ICalParser from "ical-js-parser"
import wretch from "wretch"
import { mapToRaceEvent } from "./raceEventMapper"

export async function getEvents() {
	const data = await wretch().get("/basic.ics").text()

	const jsonData = ICalParser.toJSON(data)
	return jsonData.events.map(mapToRaceEvent)
}
