FROM node:slim
WORKDIR /app
EXPOSE 3000
COPY . .
# COPY ./package.json .
# COPY ./package-lock.json .
# COPY ./public .
# COPY ./next.config.json .
# COPY ./.env.local .
RUN npm install
RUN npm run build
CMD ["npm", "start"]