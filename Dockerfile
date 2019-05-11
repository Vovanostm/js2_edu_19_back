FROM node:carbon

# Создать директорию app
WORKDIR /

# Установить зависимости приложения
# Используется символ подстановки для копирования как package.json, так и package-lock.json,
# работает с npm@5+
COPY ./ /

RUN npm install
# Используется при сборке кода в продакшене
# RUN npm install --only=production

# Скопировать исходники приложения
EXPOSE 3000
CMD [ "node", "./bin/www" ]