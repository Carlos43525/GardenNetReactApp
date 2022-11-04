import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
	colors: {
		gray: {
			700: '#1f2733'
		}, 
		teal: 
		{
			300: '#68D391'
		}
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode('gray.50', 'gray.800')(props),
				fontFamily: "'Manrope', sans-serif"
			},
			html: {
				fontFamily: "'Manrope', sans-serif"
			}
		})
	}
};

