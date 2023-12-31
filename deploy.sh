cd ./deploy
docker compose down
docker image rm truong11t2/laca-blog-nextjs:1.0.4
docker network rm laca-net

docker image pull truong11t2/laca-blog-nextjs:1.0.4
docker compose up