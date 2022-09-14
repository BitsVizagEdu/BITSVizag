
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

export const showNavBar2 = writable(false)
export let tempNavValue2 = false

showNavBar2.subscribe(value => {
    tempNavValue2 = value
})

export function toggleNavBar2(){
    showNavBar2.set(!tempNavValue2)
}

export const activeTab = writable("")
export let tempTabValue = ""

activeTab.subscribe(value =>{
    tempTabValue = value
})

export function setActiveTabValue(value) {
    activeTab.set(value)
}

export const isActiveTabSet = writable(false)
export let tempIsActiveTabSet = false

isActiveTabSet.subscribe(value => {
    tempIsActiveTabSet = value
})

export function toggleIsActiveTab(value){
    isActiveTabSet.set(value)
}
