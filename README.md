# Comandos custom-expo-update-server

Passo a passo para rodar expo update server:

SERVER

- Rodar instância através do comando:
  ssh -i "dados da instância"
  (Se não for possível rodar a instância, alterar o ip de entrada na AWS)
- Acessar a pasta principal da instância:

CLIENT

- Abrir o repositório com o app a ser publicado;
- Rodar o comando: 'npx expo export –experimental-bundle (verificar commando)'
- Copiar os arquivos do CLIENT para o SERVER através do comando: sftp -i "dados da instância"
- put -r dist/ /source/custom-expo-updates-server/expo-updates-server/
- put app.config.js /source/custom-expo-updates-server/expo-updates-server/

Mais informações, verificar em: https://github.com/expo/custom-expo-updates-server
