# tallinn_photo_stream
post Tallinn photos to instagram

# Installation

## Install composer

```
wget https://getcomposer.org/installer -O composer-setup.php
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

## install the rest of the stuff

```
npm i
composer require mgp25/instagram-php
```

## add to cron

```
0 */3 * * * cd /root/www/tallinn_photo_stream && npm run download && USERNAME=tallinn_photo_stream PASSWORD=**** php index.php >> log.txt 2>&1
```
