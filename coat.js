/*exercice fait*/

// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false
let isCold = true

if (isRainy || isWindy || isCold) {
  console.log('Mettez votre manteau')
} else (!isRainy || !isWindy || !isCold)
console.log('Vous n avez pas besoin de manteau today')
