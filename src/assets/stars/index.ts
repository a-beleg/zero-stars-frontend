const smallStars = (require.context('.', false, /\.svg$/) as __WebpackModuleApi.RequireContext).keys()
    .map(key => key.replace('./', ''))
    .sort((a, b) => parseInt(a) - parseInt(b));

export default smallStars;
