import { test, expect } from '@playwright/test';

//Escenario 1: Iniciar con credenciales el login, validar el texto y guardar evidencia

test('Tarea 1 - Login', async ({ page },testInfo) => {

    await page.goto(process.env.url);
    await page.getByPlaceholder("Enter your email").first().fill("yerlin");
    await page.getByRole ('textbox',{name:'password'}).fill('1234');
    await page.locator('//*[@id="__next"]/div/div/div[1]/header/div/div[2]/div/form/button').click();

    const validar = await page.getByRole('heading', { name: 'Hello, PlayWright' });
    await expect(validar).toBeVisible;

    await testInfo.attach('evidencia',{
        body:await page.screenshot(),
        contentType:'image/png'
      })
    await page.screenshot({path:'evidencia/login.png'})

  //  await page.pause()
});

//Escenario 2: Iniciar sesión, ingresar a admin, presionar un botón y validar texto

test('Tarea 2 - Login_Admin', async ({ page },testInfo) => {

    await page.goto(process.env.url);
    await page.getByPlaceholder("Enter your email").first().fill("yerlin")
    await page.getByRole ('textbox',{name:'password'}).fill('1234');
    await page.locator('//*[@id="__next"]/div/div/div[1]/header/div/div[2]/div/form/button').click();
    await page.getByRole('link', { name: 'admin' }).click();
    await page.locator('#__next > div > div > div:nth-child(2) > main > ul > li:nth-child(2) > button').click();
   
    const validar = await page.locator('#__next > div > div > div:nth-child(2) > main > label');
    
    await expect(validar).toHaveText('User1');

    await testInfo.attach('evidencia',{
        body:await page.screenshot(),
        contentType:'image/png'
      })
    
    await page.screenshot({path:'evidencia/admin.png'})
    //await page.pause();
});

// Escenario 3: Iniciar sesión, ingresar a dashboard, acceder a una opción y validar

test('Tarea 3 - Login_Dashboard', async ({ page },testInfo) => {

    await page.goto(process.env.url);
    await page.getByPlaceholder("Enter your email").first().fill("yerlin")
    await page.getByRole ('textbox',{name:'password'}).fill('1234');
    await page.locator('//*[@id="__next"]/div/div/div[1]/header/div/div[2]/div/form/button').click();
    await page.getByRole('link', { name: 'dashboard' }).click();

    const catalogo = await page.locator('//*[@id=\"divlinks\"]').all();

    for(let div of catalogo){
        if((await div.innerText()).match("Multimax")){
            await page.locator('div').filter({hasText: /^Multimax$/ }).click();
            break
        }
        await expect(page).toHaveTitle(/Tienda Online de Tecnología/);
    }
    
    await testInfo.attach('evidencia',{
        body:await page.screenshot(),
        contentType:'image/png'
      })
      
    
    await page.screenshot({path:'evidencia/dashboard.png'})
   // await page.pause();
});

//Escenario 4: Iniciar sesión, ingresar a paises, recorrer la tabla y validar 

test('Tarea 4 - Login_Paises', async ({ page },testInfo) => {
    await page.goto(process.env.url);
    await page.getByPlaceholder("Enter your email").first().fill("yerlin")
    await page.waitForTimeout(3000);
    await page.getByRole ('textbox',{name:'password'}).fill('1234');
    await page.waitForTimeout(3000);
    await page.locator('//*[@id="__next"]/div/div/div[1]/header/div/div[2]/div/form/button').click();
    await page.getByRole('link', { name: 'paises' }).click();

    await page.waitForTimeout(3000);
    
    const columnas = await page.locator('#countries > tbody > tr').all();
   
        let paises: Pais[] = []
             for(let row of columnas){
                    let NombrePais = await row.locator("xpath=.//td[2]").innerText();
                    let CapitalPais = await row.locator("xpath=.//td[3]").innerText();
                    let MonedaPais = await row.locator("xpath=.//td[4]").innerText();
                    let IdiomaPais = await row.locator("xpath=.//td[5]").innerText();
        console.log(NombrePais)
        
        let pais: Pais = {
            nombrepais: NombrePais,
            capitalpais: CapitalPais,
            monedapais: MonedaPais,
            idiomapais: IdiomaPais,
        }
        paises.push(pais)
    }
    await page.waitForTimeout(3000);

        let paisavalidar:Pais = paises[0];
            expect(paisavalidar.nombrepais == 'Afghanistan').toBeTruthy();
            expect(paisavalidar.capitalpais =='Kabul').toBeTruthy();
            expect(paisavalidar.monedapais =='Afghani').toBeTruthy();
            expect(paisavalidar.idiomapais =='Dari Persian; Pashto').toBeTruthy();

    await testInfo.attach('evidencia',{
            body:await page.screenshot(),
            contentType:'image/png'
          })
        
    await page.screenshot({path:'evidencia/paises.png'})
// await page.pause();
});
export interface Pais{
    nombrepais: string,
    capitalpais: string,
    monedapais: string,
    idiomapais: string
}
