FROM node:20
WORKDIR /usr/src/app
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start:prod"]