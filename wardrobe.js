let isRainy = true
let temperature = 17
let clothes = ''


if (isRainy) { clothes += 'umbrella + leather boots + trench coat' }

else if (temperature <= 15) { clothes += ' with pull-over + scarf' }

if (temperature <= 16 && temperature >= 20) { clothes += 'shirt and tshirt' }

console.log(`Je vous recommande de porter: ${clothes}`)

/* problème non résolu*/
