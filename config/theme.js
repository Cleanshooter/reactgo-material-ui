import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fullWhite, white, grey200, darkBlack, grey900, black, grey500, blue800, blue900, blue600} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export const theme = (req = false) => {
	let theme = {
	  palette: {
	    primary1Color: grey900,
	    primary2Color: black,
	    primary3Color: grey500,
	    accent1Color: blue800,
	    accent2Color: blue900,
	    accent3Color: blue600,
	    textColor: darkBlack,
	    secondaryTextColor: fade(fullWhite, 0.12),
	    alternateTextColor: fullWhite,
	    canvasColor: grey200,
	    borderColor: fade(darkBlack, 0.12),
	    disabledColor: fade(darkBlack, 0.4),
	    pickerHeaderColor: fade(fullWhite, 0.12),
	    clockCircleColor: fade(fullWhite, 0.12),
	  },
	  borderRadius: 0,
	}
	if(req){
		theme.userAgent = req.headers['user-agent'];
	}
	return getMuiTheme(theme);
} 