const puppeteer = require('puppeteer');

jest.setTimeout(30000);

describe('Page start', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            timeout: 30000
        });
        page = await browser.newPage();
        page.setDefaultTimeout(30000);
    });

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });

    test('test card mir', async () => {
        await page.goto('http://localhost:9000', { 
            waitUntil: 'networkidle0',
            timeout: 30000 
        });
        
        await page.waitForSelector('#user-card', { timeout: 5000 });
        
        await page.type('#user-card', '2200 0206 0581 8196', { delay: 100 });
        await page.click('.button_validate');

        await new Promise(resolve => setTimeout(resolve, 2000));

        const hasActiveClass = await page.$eval('#mir', el => 
            el.classList.contains('card_active')
        );

        expect(hasActiveClass).toBe(true);
    });

    test('test card mastercard', async () => {
        await page.goto('http://localhost:9000', { 
            waitUntil: 'networkidle0',
            timeout: 30000 
        });
        
        await page.waitForSelector('#user-card', { timeout: 5000 });
        
        await page.type('#user-card', '5062 8212 3456 7892', { delay: 100 });
        await page.click('.button_validate');

        await new Promise(resolve => setTimeout(resolve, 2000));

        const hasActiveClass = await page.$eval('#mastercard', el => 
            el.classList.contains('card_active')
        );

        expect(hasActiveClass).toBe(true);
    });
});