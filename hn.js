const puppeteer = require('puppeteer');
const url = 'file:///C:/Users/John/folder/index.html';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.pdf({path: 'Curriculum_Vitae.pdf', format: 'A4'});

  await browser.close();
})();