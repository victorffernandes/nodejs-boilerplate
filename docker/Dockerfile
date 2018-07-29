FROM node:latest
RUN mkdir -p /app/
WORKDIR /app/
RUN ls -la
COPY package.json .
COPY local_modules/ ./local_modules
RUN npm install
COPY . .
EXPOSE 8010
CMD npm start