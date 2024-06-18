import { test, expect } from '@playwright/test';
test('Prueba', async ({ page }) => {
    await page.goto('https://www.novey.com.pa/');
    await page.waitForTimeout(3000);
    //await page.locator("#searchText").fill("silla plasticas");
    await page.locator("/html/body/div[1]/header/div/div[2]/div/div[1]/div[1]/div[2]/div/div[1]/div/input").fill("Sillas plasticas");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Enter");
  
  });
  
  test('Prueba2', async ({ page }) => {
    await page.goto('https://www.doitcenter.com.pa/');
    await page.waitForTimeout(3000);
    await page.locator("//*[@id=\"navbar\"]/div[1]/nav/ul/li[1]/div/div/form/input").fill("silla plasticas");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Enter");
    //await page.mouse.wheel(0,1200);
    await page.locator("//*[@id=\"contentarea\"]/div[2]/div[2]/div[3]/div[2]/div[2]/button").click;
  
  });
  
  test('test novey', async ({ page }) => {
    await page.goto('https://www.novey.com.pa/');
    await page.locator('//*[@placeholder="¿Qué estás buscando?"]').first().fill("azadores")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Enter")
    //await page.pause()
  });
  
  // Clase nueva 12/06/24
  
  test('test novey2', async ({ page }) => {
    await page.goto('https://www.novey.com.pa/');
    await page.getByPlaceholder("¿Qué estás buscando?").first().fill("azadores")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Enter")
    //await page.pause()
  });
  
  test('test wiki', async ({ page }) => {
    await page.goto('https://es.wikipedia.org/wiki/DD');
    await page.getByPlaceholder("Buscar en Wikipedia").fill("Pedro")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Enter")
   // await page.pause()
    
  });
  
  test('test naturgy', async ({ page }) => {
    await page.goto('https://www.naturgy.com.pa/');
    await page.getByAltText('Naturgy – Panamá').first().click()
    //await page.pause()
  });
  
  test('test gmail', async ({ page }) => {
    await page.goto('https://www.gmail.com');
    await page.getByRole('button', { name: 'Create account' }).click();
   // await page.pause()
  });
  
  
  // Clase nueva 13/06/24
  test('Naturgy', async ({ page }) => {
    await page.goto('https://www.naturgy.com.pa/');
    await expect(page).toHaveTitle(/Inicio - Naturgy - Panamá/);
    await page.getByAltText('Naturgy – Panamá').first().click()
    await page.getByRole('link', { name: 'Atención al cliente' }).click();
    await page.waitForTimeout(2000)
    await page.keyboard.press("Enter")
    await page.locator('//*[@id="content"]/div/div[1]/div[1]/div/div[1]/div[2]/div/h1')
    await page.mouse.wheel(0,1400);
    await page.locator('#elementor-tab-title-6502').click();
   // await page.pause()
  });
  
  // Clase  140624
  
  test('check', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
   
    await page.waitForTimeout(2000)
    await page.locator("#my-check-1").uncheck()
    await page.waitForTimeout(2000)
    await page.locator("#my-check-2").check()
   
    //await page.pause()
  });
  test('RadioButon', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
   
    await page.waitForTimeout(2000)
    await page.locator("#my-radio-2").check()
   
    //await page.pause()
  });
  test('RadioButonByLabel', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
   
    await page.waitForTimeout(2000)
    await page.getByLabel("Default radio").check();
   
   // await page.pause()
  });
   
  test('getByText', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
   
    await page.waitForTimeout(2000)
    await page.getByText("Textarea").fill("HOLA MUNDO");
   
    //await page.pause()
  });
   
   
  test('Dropdown', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.waitForTimeout(2000)
    const select = await page.locator("body > main > div > form > div > div:nth-child(2) > label:nth-child(1) > select")
    await page.waitForTimeout(2000)
    await select.selectOption({ label: "Two" })
    //await page.pause()
   
  });
  test('hover', async ({ page }) => {
   
    await page.goto('https://www.cochezycia.com/');
   
    // const rowLocator = page.getByRole('listitem');
    // await rowLocator.filter({ hasText: 'Departamentos' }) .hover()
    await page.locator("#navbar > ul > li:nth-child(1) > #departmentsCO").nth(1).hover()
    await page.getByRole('link', { name: 'Construcción' }).nth(1).hover();
    await page.getByRole('link', { name: 'Alambres' }).nth(1).click();
   
   // await page.pause()
  });
  
  test('Drag and Drop', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/mouse_interaction.html');
    await page.waitForTimeout(2000)
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
   
   // await page.pause()
  });
  test('Upload file', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.waitForTimeout(2000)
    await page.getByLabel('Default checkbox').setInputFiles([]);
    await page.locator('//input[@name="my-file"]').setInputFiles({
      name: 'file.txt',
      mimeType: 'text/plain',
      buffer: Buffer.from('this is test')
    });
   
   // await page.pause()
  });
  
  //---Práctica
  
  test('PracticaDropdown', async ({ page }) => {
   
    await page.goto('https://reportar-luminaria.ensa.com.pa/');
  
    await expect(page).toHaveTitle(/Reportar Luminaria Defectuosa/);
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0,1400);
    const select = await page.locator("#ddlroad1")
    await page.waitForTimeout(2000)
    await select.selectOption({ label: "VIA PRINCIPAL" })
   
    
   // await page.pause()
  });

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
   // await page.pause()
  
  });
  
  
  test('Practica1', async ({ page },testInfo) => {
    
    await page.goto(process.env.url);
    await testInfo.attach('evidencia',{
      body:await page.screenshot(),
      contentType:'image/png'
      
    })
    await page.screenshot({path:'evidencia/logic.png'})
  //  await page.pause()
  });
  
  