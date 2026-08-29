#!/bin/bash

echo "🚀 Gerando build..."
npm run build

echo "📦 Enviando arquivos para o servidor..."
scp -r dist/* fernando@192.168.18.25:/home/fernando/

echo "🔐 Entrando no servidor e movendo com sudo..."
ssh fernando@192.168.18.25 "echo 'C@rroVelh0!' | sudo -S cp -r /home/fernando/* /var/www/castilloeng/html/ && sudo -S systemctl reload nginx"

echo "✅ Deploy concluído!"
