import { DateTime } from "luxon"
import type { HeaderProps } from "react-big-calendar"

import { useIsMobile } from "@/hooks/useIsMobile"
import { cn } from "@/lib/utils"

export const DayHeader = ({ date }: HeaderProps) => {
	const isMobile = useIsMobile()
	const currentDate = DateTime.now().startOf("day")
	const luxonDate = DateTime.fromJSDate(date)
	const formattedWeekDay = luxonDate.toFormat(isMobile ? "ccc" : "cccc")
	const formattedDay = luxonDate.toFormat("d")
	const isToday = luxonDate.startOf("day").equals(currentDate)
	return (
		<div
			className={cn("flex py-2 items-center justify-center", {
				"gap-1": isMobile,
				"gap-2": !isMobile,
			})}
		>
			<div className="font-semibold">{formattedWeekDay}</div>
			<div
				className={cn({
					"bg-red-500 px-2 rounded font-bold text-white": isToday,
					"px-1": isToday && isMobile,
				})}
			>
				{formattedDay}
			</div>
		</div>
	)
}
