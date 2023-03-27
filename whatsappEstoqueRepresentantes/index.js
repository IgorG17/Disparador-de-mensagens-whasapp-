const puppeteer = require('puppeteer');

const now = new Date;

var dataAtual = new Date();

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let name = month[now.getMonth()];

//criando arquivos .png logo após a coleta da pagina na web **/
gold = 'Arquivo_1' /**  + now.getDate()  + name + now.getFullYear()  + now.getHours() + now.getMinutes() **/ + '.png';
veneza = 'Arquivo_2' /**  + now.getDate()  + name + now.getFullYear() + now.getHours() + now.getMinutes() + **/ + '.png';
silver = 'Arquivo_3' /**  + now.getDate()  + name + now.getFullYear() + now.getHours() + now.getMinutes() + **/ + '.png';
jaguar = 'Arquivo_4' /**  + now.getDate()  + name + now.getFullYear() + now.getHours() + now.getMinutes() + **/ + '.png';
confort = 'Arquivo_5' /**  + now.getDate()  + name + now.getFullYear() + now.getHours() + now.getMinutes() + **/ + '.png';
veludinho = 'Arquivo_6' /**  + now.getDate()  + name + now.getFullYear() + now.getHours() + now.getMinutes() + **/ + '.png';
istambul = 'Arquivo_7' /**  + now.getDate()  + name + now.getFullYear() + now.getHours() + now.getMinutes() + **/ + '.png';
contadorScreenshot = 0;
log = '';
success = '';

// coletando dados da pagina web **//
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  try {
    await page.goto('URL DO SITE QUE DESEJA FAZER OS PRINTS');// Acessando pagina web para coleta dos dados **//
    await page.screenshot({ path: '../../../capturaDeTelas/' + gold, fullPage:true }); // tirando screenshot com escala fullpage **/ -  // '../../capturaDeTelas/' + setando pastas para salvar screenshots **/
    contadorScreenshot = contadorScreenshot + 1; 
    success = contadorScreenshot; 
  } catch (err) {
      console.log(err);
      log = log + err + ' | ';
      await browser.close()
    }
  
  try {
    await page.goto('URL DO SITE QUE DESEJA FAZER OS PRINTS');
    await page.screenshot({ path: '../../../capturaDeTelas/' + veneza, fullPage:true });
    contadorScreenshot = contadorScreenshot + 1;
    success = contadorScreenshot; 
  } catch (err) {
      console.log(err);
      log = log + err + ' | ';
      await browser.close()
    }

  try {        
    await page.goto('URL DO SITE QUE DESEJA FAZER OS PRINTS');
    await page.screenshot({ path: '../../../capturaDeTelas/' + silver, fullPage:true });
    contadorScreenshot = contadorScreenshot + 1; 
    success = contadorScreenshot; 
  } catch (err) {
      console.log(err);
      log = log + err + ' | ';
      await browser.close()
    }

  try {        
    await page.goto('URL DO SITE QUE DESEJA FAZER OS PRINTS');
    await page.screenshot({ path: '../../../capturaDeTelas/' + jaguar, fullPage:true });
    contadorScreenshot = contadorScreenshot + 1; 
    success = contadorScreenshot; 
  } catch (err) {
      console.log(err);
      log = log + err + ' | ';
      await browser.close()
    }

  try {      
    await page.goto('URL DO SITE QUE DESEJA FAZER OS PRINTS');
    await page.screenshot({ path: '../../../capturaDeTelas/' + confort, fullPage:true });
    contadorScreenshot = contadorScreenshot + 1; 
    success = contadorScreenshot; 
  } catch (err) {
      console.log(err);
      log = log + err + ' | ';
      await browser.close()
    }

  try {       
    await page.goto('URL DO SITE QUE DESEJA FAZER OS PRINTS');
    await page.screenshot({ path: '../../../capturaDeTelas/' + veludinho, fullPage:true });
    contadorScreenshot = contadorScreenshot + 1; 
    success = contadorScreenshot; 
  } catch (err) {
      console.log(err);
      log = log + err + ' | ';
      await browser.close()
    }
	
  try {       
    await page.goto('URL DO SITE QUE DESEJA FAZER OS PRINTS');
    await page.screenshot({ path: '../../../capturaDeTelas/' + istambul, fullPage:true });
    contadorScreenshot = contadorScreenshot + 1; 
    success = contadorScreenshot; 
  } catch (err) {
      console.log(err);
      log = log + err + ' | ';
      await browser.close()
    }
 
  if (log) { // criando aquivo quando erro .txt
    var fs = require('fs');
    
    fs.writeFile("C://capturaDeTelas//log.txt", now.getDate()  + name + now.getFullYear()  + now.getHours() + now.getMinutes() + log + ' | ', function(erro) {
      if(erro) {
        throw erro;
      }
      console.log("Arquivo de log salvo");
    }); 

    // criar código para apagar arquivo success.txt e .png 
   
   /*
   var fs = require('fs');
   var filePath = 'C://capturaDeTelas//success.txt'; 
       fs.unlinkSync(filePath);
       filePath = 'C://capturaDeTelas//Arquivo_1.png';
       fs.unlinkSync(filePath); 
       filePath = 'C://capturaDeTelas//Arquivo_2.png'; 
       fs.unlinkSync(filePath);
       filePath = 'C://capturaDeTelas//Arquivo_3.png'; 
       fs.unlinkSync(filePath);
       filePath = 'C://capturaDeTelas//Arquivo_4.png'; 
       fs.unlinkSync(filePath);
       filePath = 'C://capturaDeTelas//Arquivo_5.png'; 
       fs.unlinkSync(filePath);
       filePath = 'C://capturaDeTelas//Arquivo_6.png'; 
       fs.unlinkSync(filePath);
  */  


  } else { // criando aquivo quando success .txt
    var fs = require('fs');
    
    fs.writeFile("c://capturaDeTelas//log.txt", now.getDate()  + name + now.getFullYear()  + now.getHours() + now.getMinutes() +' | ' + ' success ' + ' | ', function(erro) {
      if(erro) {
        throw erro;
      }
      console.log("Arquivo de log salvo");
    }); 
    
    fs.writeFile("c://capturaDeTelas//success.txt", now.getDate()  + name + now.getFullYear()  + now.getHours() + now.getMinutes() +' | ' + contadorScreenshot + ' | ', function(erro) {
      if(erro) {
        throw erro;
      }
      console.log("Arquivo de success salvo");
    });
    
  }

   
 
await browser.close();

})();