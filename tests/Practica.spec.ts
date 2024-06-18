import { test, expect } from '@playwright/test';

test('Practica', async ({ page }) => {
  
  await page.goto('https://dev.banesco.com.pa');
 // await page.locator("#navbar > ul > li:nth-child(1) > #departmentsCO").nth(1).hover()
  await page.getByRole('link', { name: 'Personas' }).hover();
  await page.getByRole('link', { name: 'Tarjetas',exact:true }).click();
  await page.waitForTimeout(2000)
  await page.mouse.wheel(0,1200);
  await page.getByRole('heading',{ name: 'Mastercard Air Europa'}).click();
  await page.getByRole('link',{ name: 'Quiero que me contacten'}).click();
  await page.locator('#page > div.sidebars > div.sidebar.active > div.sidebar__body > div > section > div > div > div > h2');
  await page.getByRole ('textbox',{name:'Nombre'}).fill('SELENA');
  await page.getByRole('textbox',{name:'Apellido'}).fill("SANTANA");
  await page.waitForTimeout(2000)
 // const select = await page.locator('#input_27_5').selectOption({ value: "Cédula Panameña" });
 // await select.selectOption({ value: "Cédula Panameña" });
 await page.getByLabel('Tipo de tarjeta:*')
  await page.pause()


});


test('Practica1', async ({ page },testInfo) => {
  
  await page.goto(process.env.url);
  await testInfo.attach('evidencia',{
    body:await page.screenshot(),
    contentType:'image/png'
    
  })
  await page.screenshot({path:'evidencia/logic.png'})
  await page.pause()
});


test('Tarea 3 - Login_Dashboard', async ({ page },testInfo) => {

  await page.goto(process.env.url);
  const loginPage = new LoginPage(page)
  await loginPage.UserName();
  await loginPage.PassWord();
  await loginPage.ButtonLogin();
 

  const catalogo = await page.locator('//*[@id=\"divlinks\"]').all();

  for(let div of catalogo){
      if((await div.innerText()).match("Multimax")){
          await page.locator('div').filter({hasText: /^Multimax$/ }).click();
          break
      }
      
  }
  await testInfo.attach('evidencia',{
      body:await page.screenshot(),
      contentType:'image/png'
    })
  
  await page.screenshot({path:'evidencia/dashboard.png'})
  await page.pause();
});