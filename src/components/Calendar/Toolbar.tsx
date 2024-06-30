import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { DateTime } from "luxon"
import type { ToolbarProps } from "react-big-calendar"

import { Button } from "@/components/ui/button"

import { useIsMobile } from "@/hooks/useIsMobile"
import { cn } from "@/lib/utils"
import type { RaceEvent } from "@/types/raceEvent"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select"

export const Toolbar = ({
	date,
	localizer,
	onNavigate,
	onView,
	view,
	views,
}: ToolbarProps<RaceEvent>) => {
	const luxonDate = DateTime.fromJSDate(date)
	const monthLabel = luxonDate.toFormat("MMMM")
	const yearLabel = luxonDate.toFormat("yyyy")
	const isMobile = useIsMobile()

	return (
		<div className="flex justify-between px-4 items-center">
			<div className="flex gap-2 items-center">
				<Button
					onClick={() => onNavigate("PREV")}
					size="icon"
					variant="outline"
				>
					<ArrowLeftIcon className="h-4 w-4" />
				</Button>
				<Button
					onClick={() => onNavigate("NEXT")}
					size="icon"
					variant="outline"
				>
					<ArrowRightIcon className="h-4 w-4" />
				</Button>
				{!isMobile && (
					<Button onClick={() => onNavigate("TODAY")}>
						{localizer.messages.today}
					</Button>
				)}
			</div>
			<div className="text-xl">
				<span className="font-extrabold">{monthLabel}</span>{" "}
				<span className="font-light">{yearLabel}</span>{" "}
			</div>
			<Select onValueChange={onView} value={view}>
				<SelectTrigger
					className={cn({
						"w-[100px]": isMobile,
						"w-[200px]": !isMobile,
					})}
				>
					<SelectValue placeholder="Select view" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{Array.isArray(views) &&
							views.map((v) => (
								<SelectItem key={v} value={v}>
									{localizer.messages[v]}
								</SelectItem>
							))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
