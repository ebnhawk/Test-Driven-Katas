const wrap = (string, maxLen) => {
	if (string.length <= maxLen) {
		return string
	} else {
		let newStr = ''
		while (string.length > maxLen) {
			if (string[maxLen - 1] === ' ') {
				newStr += string.slice(0, maxLen) + '\n'
				string = string.slice(maxLen)
			} else {
				const i = string.slice(0, maxLen).lastIndexOf(' ')
				if (i === -1) {
					const firstSpace = string.indexOf(' ')
					console.log(firstSpace)
					newStr += string.slice(0, firstSpace + 1) + '\n'
					string = string.slice(firstSpace + 1)
				} else {
					newStr += string.slice(0, i + 1) + '\n'
					string = string.slice(i + 1)
				}
			}
		}
		newStr += string
		return newStr
	}
}

module.exports = wrap
