
let cats = ["Milo", "Otis", "Garfield"]

let destructivelyAppendCat = (name) => {
        return cats.push(name)
}
destructivelyAppendCat("Ralph")

let destructivelyPrependCat = (name) => {
        return cats.unshift(name)
}
destructivelyPrependCat("Bob")

let destructivelyRemoveLastCat = () => {
    return cats.pop()
}
destructivelyRemoveLastCat()

let destructivelyRemoveFirstCat = () => {
     return cats.shift()
    
}
destructivelyRemoveFirstCat()

let appendCat = (name) => {
     let copycat = [...cats, name]
     return copycat

}
appendCat("Broom")

let prependCat = (name) => {
    let copycat = [name, ...cats]
    return copycat
}
appendCat("Arnold")

let removeLastCat = () => {
    let copycat = cats.slice(0, -1)
    //console.log(copycat)
    return copycat
}
removeLastCat()

let removeFirstCat = () => {
    let copycat = cats.slice(1)
    return copycat
}
removeFirstCat()


