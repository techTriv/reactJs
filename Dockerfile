FROM node:20
WORKDIR /app
COPY package*json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173
CMD [ "npm","run","preview"]
#docker build -t vite-app .
#docker run -it node:20 sh
#docker run -p 4173:4173 vite-app
#Remove everything (containers, images, networks, cache)
#docker system prune -a --volumes
#Remove all containers
#docker rm -f $(docker ps -aq)

#Remove all images
#docker rmi -f $(docker images -aq)