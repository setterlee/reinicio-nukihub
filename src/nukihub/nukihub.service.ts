import puppeteer from 'puppeteer';
import 'dotenv/config';

export async function rebotNukihub() {
    
    
    console.log('Iniciando proceso...');

    const browser = await puppeteer.launch({
        headless: process.env.ENV === 'dev' ? false : true,
        slowMo: 50,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try{

        const page = await browser.newPage();
        console.log("Abriendo pagina de nukihub en configuracion de mqtt");        
        await page.goto(`${process.env.HOST}${process.env.PAGE}` ?? (() => { throw new Error('Host/Page no definido en las variables de entorno'); })());
        const reference = 'input[name="submit"]'
        console.log("Esperando que aparezca el boton de guardar...")
        await page.waitForSelector(reference);
        const boton = await page.$(reference);
        if (!boton) {
            throw new Error('No se encontro el botón en reference: ' + reference);
        }
        console.log("Haciendo click en el boton de guardar...")
        await boton.click()

        console.log("Esperando que el nukihub se reinicie...")
        await page.waitForSelector("td#mqttState")
        console.log("Listo...")

        return "Nukihub reiniciado correctamente"

        
    }finally{
        await browser.close();
    }
    

}