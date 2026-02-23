FROM php:8.2-apache
RUN pecl install mongodb && docker-php-ext-enable mongodb
COPY php-service/ /var/www/html/