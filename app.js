//1
let styles = ['Джас', 'Блюз']
styles.push('Рок-н-ролл')
styles[Math.floor((styles.length - 1) / 2)] = 'Классика'
alert(styles.shift())
styles.unshift('Рэп', 'Регги')
alert(styles)

//2
let arr = ['a', 'b']
arr.push(function () {
  alert(this)
})
arr[2]()

//3
function sumInput() {
  let numbers = []

  while (true) {
    let value = prompt('Введите число', 0)

    // Прекращаем ввод?
    if (value === '' || value === null || !isFinite(value)) break

    numbers.push(+value)
  }

  let sum = 0
  for (let number of numbers) {
    sum += number
  }
  return sum
}

alert(sumInput())
