const white = 'hsl(0, 0%, 100%)';
const black = 'hsl(0, 0%, 0%)';
const darkBlue = 'hsl(228, 41%, 27%)';
const blue = 'hsl(198, 60%, 32%)';
const red = 'hsl(0, 82%, 47%)';
const light = 'hsl(49, 85%, 87%)';
const yellow = 'hsl(60, 100%, 50%)';
const grey = 'hsl(0, 0%, 70%)';
const colorWithOpacity = (color, opacity) => `hsla(${color.replace(/hsl|[()]/g, '')}, ${opacity})`;

export { white, black, darkBlue, blue, red, light, yellow, grey, colorWithOpacity };
