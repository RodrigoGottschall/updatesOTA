# Comandos custom-expo-update-server

SERVER
Após abrir o terminal em meu Mac, ir para a pasta:
cd Documents/source/expo-update-server

Rodar instância através do comando:
ssh -i "touchpay-mobile.pem" ec2-user@ec2-18-231-138-197.sa-east-1.compute.amazonaws.com
(Se não for possível rodar a instância, alterar o ip de entrada na AWS)

Acessar a pasta principal da instância:
cd /source/custom-expo-updates-server/expo-updates-server/

CLIENT
Abrir o repositório com o app a ser publicado;
Verificar se o app a ser publicado está setado no arquivo app.config.js
Rodar o comando:
npx expo export –experimental-bundle (verificar commando)
Copiar os arquivos do CLIENT para o SERVER através do comando:
sftp -i touchpay-mobile.pem ec2-user@ec2-18-231-138-197.sa-east-1.compute.amazonaws.com
put -r dist/ /source/custom-expo-updates-server/expo-updates-server/
put app.config.js /source/custom-expo-updates-server/expo-updates-server/


dnf install -y httpd
systemctl start httpd
systemctl enable httpd
pm2 start npm --name expo-updates-server -- run start -- -p 3000
pm2 kill



Comandos:
Remover pastas não vazias: rm -rf (pasta)
Ver o que está escrito no arquivo: cat (arquivo)
Alterar arquivo: nano (arquivo)



put app.config.js /teste/

Colocar logs tanto pages/api/manifest.js - pages/api/assets.js
