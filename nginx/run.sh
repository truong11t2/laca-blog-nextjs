#!/bin/bash
# printf 'truong11t2@gmail.com\nyes\nno\n' | certbot --nginx --non-interactive --agree-tos --no-eff-email 

certbot --nginx --non-interactive --agree-tos --email truong11t2@gmail.com --domains laca.fun

cp ./nginx.conf /etc/nginx/nginx.conf

certbot install --cert-name laca.fun