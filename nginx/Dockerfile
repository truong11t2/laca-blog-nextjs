# FROM alpine:latest
FROM nginx:latest

RUN apt-get update
RUN yes | apt-get install certbot
RUN yes | apt-get install python3-certbot-nginx

# COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf .
COPY run.sh .
RUN ["chmod", "+x", "./run.sh"]
ENTRYPOINT [ "./run.sh" ]
# docker exec -it laca-blog sh
#RUN /bin/sh -c printf 'truong11t2@gmail.com\nyes\nno\n' | certbot --nginx

#RUN /bin/sh -c ./script.sh
#CMD [ "certbot --nginx" ]
#ENTRYPOINT ["certbot --nginx", "truong11t2@gmail.com", "yes", "no"]

# COPY certbot /etc/cron.d/

EXPOSE 80 443
