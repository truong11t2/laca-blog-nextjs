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