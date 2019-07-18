reverseCase = str => [...str].map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
