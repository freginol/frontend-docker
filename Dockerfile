FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install
RUN npm install react-router-dom --save
COPY . .
CMD ["npm","start"]

#
# docker build -t sample:dev .

#docker run \
#    -it \
#    --rm \
#    -v ${PWD}:/app \
#    -v /app/node_modules \
#    -p 3001:3000 \
#    -e CHOKIDAR_USEPOLLING=true \
#   sample:dev
