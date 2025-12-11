import { useEffect, useState } from 'react'

/**
 * Hook to get CSS variable value from :root
 * Automatically updates when theme changes
 */
export const useCSSVariable = (variableName: string): string => {
	const [value, setValue] = useState<string>(() => {
		if (typeof window !== 'undefined') {
			return getComputedStyle(document.documentElement)
				.getPropertyValue(variableName)
				.trim()
		}
		return ''
	})

	useEffect(() => {
		const updateValue = () => {
			const newValue = getComputedStyle(document.documentElement)
				.getPropertyValue(variableName)
				.trim()
			setValue(newValue)
		}

		// Update on theme change
		const observer = new MutationObserver(updateValue)
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		})

		return () => observer.disconnect()
	}, [variableName])

	return value
}
