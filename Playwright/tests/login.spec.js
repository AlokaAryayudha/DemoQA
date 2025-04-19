import { test, expect } from '@playwright/test'
import { Tambah } from '../POM/Tambahdata'

test(" Select and tambahdata ", async ({ page }) => { 
    await page.goto('https://demoqa.com/webtables')

    console.log("Memasukan data")
    const tambah = new Tambah(page)
    await tambah.tambahdata()

    await page.pause()
    
})
