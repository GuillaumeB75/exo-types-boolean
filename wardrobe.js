let isRainy = false
let temperature = 17
let clothes = ''

if (isRainy) {
  clothes += 'umbrella, + leather boots, + hat,'
}
else if (temperature < 15) {
  clothes = 'pull-over, + scarf,'
}
else if (temperature >= 15 && temperature <= 20) {
  clothes = 'sweater, + tshirt, + shirt,'
}
else if (temperature > 20) {
  clothes = 't-shirt, + baggy'
}
else { }
console.log(`Je vous recommande de porter: ${clothes}`)