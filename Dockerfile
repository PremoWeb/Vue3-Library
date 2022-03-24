FROM ghcr.io/premoweb/alpine-nginx-php7.3:latest

USER root
COPY backend/ /var/www/html/
RUN chown -R nobody.nobody /var/www/html

ENV NODE_ENV production

USER nobody

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]