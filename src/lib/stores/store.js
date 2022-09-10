
import { writable } from "svelte/store"

export const isHidden =writable(true)

export function toggleIsHidden(){
    let value = isHidden
    isHidden.set(!value)
}



export const showNavBar = writable(false)
export let tempNavValue = false

showNavBar.subscribe(value => {
    tempNavValue = value
})

export function toggleNavBar(){
    showNavBar.set(!tempNavValue)
}

