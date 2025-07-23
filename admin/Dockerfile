FROM node:18

WORKDIR /admin

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5174

CMD ["npm", "run", "dev", "--", "--host"]
