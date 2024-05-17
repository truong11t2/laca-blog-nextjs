# cd ./deploy
# docker compose down
# docker image rm truong11t2/laca-blog-nextjs:1.0.4
# docker network rm laca-net

# docker image pull truong11t2/laca-blog-nextjs:1.0.4
# docker compose up

docker build -t laca-blog-nextjs .
docker tag laca-blog-nextjs:latest truong11t2/laca-blog-nextjs:1.0.5
docker push truong11t2/laca-blog-nextjs:1.0.5


ssh root@192.227.234.198 "sh ./deploy.sh"


# certbot certonly --standalone -d laca.fun
# ls /etc/letsencrypt/live/
# certbot
# mv /etc/letsencrypt/live/laca.fun-0003/ /etc/letsencrypt/live/laca.fun
# ls /etc/letsencrypt/live/laca.fun/
# docker-compose up


# docker run --name mongodb --network laca-network -p 27017:27017 -d -v mongo-data:/data/db -e MONGO_INITDB_ROOT_USERNAME=truongt2 -e MONGO_INITDB_ROOT_PASSWORD=zV7tGaQPN1HVrcPp -e MONGO_INITDB_DATABASE=mydb mongo:latest
# docker run --name laca --network laca-network -d truong11t2/laca-blog:1.0.1
# docker network create laca-network