FROM node:18-alpine
WORKDIR /laca-blog

COPY ./package.json ./package.json
COPY ./*config* ./

COPY ./app ./app
COPY ./components ./components
COPY ./css ./css
COPY ./data ./data
COPY ./layouts ./layouts
COPY ./public ./public
COPY ./scripts ./scripts

EXPOSE 3000

RUN ["npm", "install"]

RUN ["npm", "run", "build"]

CMD ["npm", "run", "serve"]
