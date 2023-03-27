import os 
import sys
import time
from os import close
from selenium.webdriver.common.by import By
from selenium import webdriver  
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options  
from webdriver_manager.chrome import ChromeDriverManager 

#Instanciando as options para o webdriver
options = webdriver.ChromeOptions()

#options para manter conta do google logada com usuario principal
options.add_argument("--user-data-dir=C:/Users/promoda/AppData/Local/Google/Chrome/User Data") 
options.add_argument("--profile-directory=Profile 3")

#comando para executar o Chromedrive
driver = webdriver.Chrome(options=options,executable_path='C:/DEV/bots/whatsappEnvioDeArquivos/chromedriver.exe')



 #abre o site Whatsapp Web - Não pode haver janelas do chrome abertas
driver.get('https://web.whatsapp.com/')



#da um sleep de 15 segundos, tempo para scannear o QRCODE
time.sleep(15) 



#Comando para buscar contatos e grupos do wpp
contatosProducao = ['Nome do contato ou grupo']


#Mensagem - Mensagem que sera enviada
texto = 'mensagem que deseja mandar'
texto2 = 'para pular uma linha '
texto3 = ' Segunda mensagem que deseja enviar '

#Midia = imagem, pdf, documento, video (caminho do arquivo, lembrando que mesmo no windows o caminho deve ser passado com barra invertida */* ) 

arquivos = [
    "Caminho que a imagens esta salva",
    "C:/capturaDeTelas/Arquivo_2.png",
]
verificarSuccess = ""
cont = 0
qtdArquivos = len(arquivos)

#Funcao que pesquisa o Contato/Grupo
def buscar_contato(contato):
    campo_pesquisa = driver.find_element(By.XPATH,'//div[contains(@class,"Er7QU copyable-text selectable-text")]')
    time.sleep(1)
    campo_pesquisa.click()
    campo_pesquisa.send_keys(contato)
    time.sleep(5) 
    campo_pesquisa.send_keys(Keys.ENTER)
    time.sleep(5)

#Funcao que envia a mensagem
def Enviar_mensagem(mensagem):
    campo_mensagem = driver.find_element(By.XPATH,'//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]/p')
    time.sleep(1)
    campo_mensagem.click()
    campo_mensagem.send_keys(mensagem)
    campo_mensagem.send_keys(Keys.ENTER)

#Funcao que envia midia como mensagem
def enviar_midia(arquivo):
    driver.find_element(By.CSS_SELECTOR, "span[data-icon='clip']").click()
    attach = driver.find_element(By.CSS_SELECTOR, "input[type='file']")
    attach.send_keys(arquivo)
    time.sleep(2)
    send = driver.find_element(By.CSS_SELECTOR, "span[data-icon='send']") 
    send.click()   

#Verificando arquivo success para envio das mensagens 
try:
    verificarSuccess = open('C:\capturaDeTelas\success.txt')     
    verificarSuccess.close()
except:
    print(verificarSuccess)

if(verificarSuccess): 

    buscar_contato(contatosProducao)
    Enviar_mensagem(texto) 
     
    time.sleep(1)
    while (cont < qtdArquivos):
        enviar_midia(arquivos[cont])
        time.sleep(3)
        print(arquivos[cont])
        cont += 1
    cont = 0        
    print(contatosProducao)


#fechar google chorome 
    driver.close()
    driver.quit()
    sys.exit() 
