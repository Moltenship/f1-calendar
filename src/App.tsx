import { Calendar } from "@/components/Calendar/Calendar"
import { useQuery } from "@tanstack/react-query"
import { getEvents } from "./api/calendarApi"

function App() {
	const { data = [] } = useQuery({
		queryFn: getEvents,
		queryKey: ["events"],
	})

	return (
		<main className="pt-4 h-screen">
			<Calendar events={data} />
		</main>
	)
}

export default App
