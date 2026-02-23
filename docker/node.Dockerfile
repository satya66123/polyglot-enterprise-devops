FROM node:18
WORKDIR /app
COPY node-service/ .
RUN npm install
CMD ["node","server.js"]