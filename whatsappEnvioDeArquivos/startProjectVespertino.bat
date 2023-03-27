Echo off
C:
cd\
cd capturaDeTelas
del Arquivo_1.png
del Arquivo_2.png
del Arquivo_3.png
del Arquivo_4.png
del Arquivo_5.png
del Arquivo_6.png
del success.txt
cd\
cd DEV\bots\whatsappEstoqueRepresentantes
node index.js
cd..
cd whatsappEnvioDeArquivos
python botImgSmsVespertino.py
exit
