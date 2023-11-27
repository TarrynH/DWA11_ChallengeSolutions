import { store } from './store.js'
import { increment, decrement, resetCount } from './actions.js'
import { MIN_NUMBER,MAX_NUMBER } from './reducers.js'

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset"]')
const resetMessage = document.querySelector('#resetMessage')

const updateUI = () => {
    const currentValue = store.getState()
    number.value = currentValue

    subtract.disabled = currentValue <= MIN_NUMBER
    add.disabled = currentValue >= MAX_NUMBER
}


const unsubscribe = store.subscribe(updateUI)

const subtractHandler = () => {
    store.dispatch(decrement())
}

const addHandler = () => {
    store.dispatch(increment())
}

const resetCounter = () => {
    store.dispatch(resetCount())
    number.value = 0
    alert('Counter has been reset to zero!')
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)
reset.addEventListener('click', resetCounter)

// addHandler()
// addHandler()

// subtractHandler()

// resetCounter()

// unsubscribe()
updateUI()