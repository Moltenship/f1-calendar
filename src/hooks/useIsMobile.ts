import { useMediaQuery } from "usehooks-ts"

export const useIsMobile = () => {
	const isMobile = useMediaQuery("(max-width: 1024px)")
	return isMobile
}
