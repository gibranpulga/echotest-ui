FROM node:latest
EXPOSE 4200/tcp
WORKDIR /app
COPY . /app
RUN npm ci
CMD node_modules/.bin/ng serve --port 4200 --host 0.0.0.0
