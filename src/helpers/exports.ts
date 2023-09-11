export const smallStars = Object.keys(import.meta.glob("../assets/stars/*"))
    .map((star) => ({
        filename: star,
        number: parseInt(star.match(/\d+/)?.[0] || '0', 10)
    }))
    .sort((a, b) => a.number - b.number)
    .map((star) => star.filename);
