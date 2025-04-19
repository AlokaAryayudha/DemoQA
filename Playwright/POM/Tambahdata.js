



// NAMBAH , DELETE, SEARCH 

import { test, expect } from "@playwright/test"


export class Tambah{
    constructor(page){
        this.page = page

        this.tambahdataa = page.getByRole('button', { name: 'Add' })
        this.search = page.getByRole('textbox', { name: 'Type to search' })
        this.firstname = page.getByRole('textbox', { name: 'First Name' })
        this.lastname = page.getByRole('textbox', { name: 'Last Name' })
        this.email = page.getByRole('textbox', { name: 'name@example.com' })
        this.age = page.getByRole('textbox', { name: 'Age' })
        this.departement = page.getByRole('textbox', { name: 'Department' })
        this.salary = page.getByRole('textbox', { name: 'Salary' })
        this.savebtn = page.getByRole('button', { name: 'Submit' })
    

    }
    tambahdata = async(page) =>{
        await this.tambahdataa.click()
        await this.firstname.fill('aloka')
        await this.lastname.fill('aryayudha')
        await this.email.fill('aaloka@gmail.com')
        await this.age.fill('24')
        await this.salary.fill("222222222")
        await this.departement.fill('IT')
        await this.savebtn.click()

        console.log("Mencari data")
        await this.search.fill('aloka')
        await expect(this.search).toBeVisible()


    }
}