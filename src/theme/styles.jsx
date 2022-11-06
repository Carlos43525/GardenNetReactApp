import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
	colors: {
		gray: {
			700: '#1f2733'
		}, 
		redAccent: {
			600: "#FF2A18"
		}, 
		darkPurple: {
			800: "#281D43"
		}
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode('#EBEFF7', 'gray.800')(props),
				fontFamily: "'Manrope', sans-serif"
			},
			html: {
				fontFamily: "'Manrope', sans-serif"
			}
		})
	}
};

