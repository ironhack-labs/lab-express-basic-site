const {assert} = require('chai');
const puppeteer = require('puppeteer');
let browser;




// describe('Array', function () {
//    describe('#indexOf()', function () {
//       it('Solo es probar que corren los test', function () {
//          assert(1, 1, "dummy");
//       });
//    });
// });




before(async () => {
   browser = await puppeteer.launch();
   page = await browser.newPage();
});

after(async () => {
   await browser.close()
});

let listaUrlRel = ['index.html', 'about.html', 'fotos.html'];
const urlSite = 'http://localhost:3005';

let fnTestPage= urlRel=>{

   describe(`Test Pagina  ${urlRel}`, () => {

      it('verificar pagina OK ' + urlRel, async () => {

         let urlAbs = urlSite + '/' + urlRel;

         page.on('response', response => {

            const req = response.request();
            if (req.url() === urlAbs) {
               response.buffer().then(
                   b => {
                      let statusActual = response.status();
                      assert(200, statusActual , `no devolvio un 200 ${urlRel} - devolvio ${statusActual}`);
                      console.log(`${response.status()} ${response.url()} ${b.length} bytes`);
                   },
                   e => {
                      assert(200, statusActual , `${urlRel} - error fatal ${response.url()} , ${e}`);
                   }
               );
            }


         });


         await page.goto(urlAbs, {waitUntil: 'networkidle2'});


         await page.screenshot({path: 'test/screen/' + urlRel + '.png'});

      }).timeout(6000)
   });
};


listaUrlRel.forEach( urlRel=>{

   fnTestPage(urlRel);
});



