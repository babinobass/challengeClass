
class Helper {

    multiply(a, b) {
        return " ".repeat(a).repeat(b).length
    }

    numMayor = (arr) => {
        let num = -Infinity
        arr.forEach(n => {
            if (n > num) num = n
        })
        return num
    }

    falsyFilter = (arr) => {
        return arr.filter(Boolean)
    }

    unnester = (arr) => {
        let newArr = []
        arr.forEach(a => Array.isArray(a) ? newArr.push(...this.unnester(a)) : newArr.push(a))
        return newArr
    }

    mostRepeatedWord = (str) => {
        let words = {}
        let word
        let num = 0
        str.split(" ").forEach(s => {
            if (isNaN(words[s])) words[s] = 1
            else words[s] = words[s] + 1
        })
        for (const [key, value] of Object.entries(words)) {
            if (value > num) {
                num = value
                word = { [key]: value }
            }
        }
        return word
    }

    isPalindrome = (str) => {
        const strReversed = str.split("").reverse().join("")
        return strReversed === str
    }

    getMayorNum = (...arg) => {
        return Math.max(...arg)
    }

}

module.exports = Helper;