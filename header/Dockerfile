FROM node:14

RUN mkdir -p /code
WORKDIR /code

COPY package.json /code/
COPY package-lock.json /code/
RUN npm install

COPY ./src /code/src
COPY ./images /code/images

EXPOSE 3001
CMD [ "npm", "start" ]