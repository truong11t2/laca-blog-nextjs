docker build -t laca-blog-nextjs .
docker tag laca-blog-nextjs:latest truong11t2/laca-blog-nextjs:1.0.5
docker push truong11t2/laca-blog-nextjs:1.0.5


ssh root@192.227.234.198 "sh ./deploy.sh"

@REM cd ./deploy

@REM docker compose down
@REM docker image pull truong11t2/laca-blog-nextjs:1.0.3
@REM docker compose up