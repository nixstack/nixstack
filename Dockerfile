# FROM ubuntu:latest

FROM heroku/heroku:18-build

RUN  sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list
RUN  apt-get clean

# RUN alias /bin/sh /bin/bash
RUN apt-get update
RUN apt-get install iptables sudo -y
# # RUN apt-get install -y wget curl gnupg2  libcurl4 build-essential
# # RUN apt-get install -y zlib1g-dev libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt-dev

# # Install ruby
# # RUN cd /tmp
# # RUN wget  http://ftp.ruby-lang.org/pub/ruby/2.5/ruby-2.5.0.tar.gz
# # RUN tar -xvzf ruby-2.5.0.tar.gz
# # RUN cd ruby-2.5.0/ && ./configure --prefix=/usr/local; make; make install
# # RUN ruby -v
# # RUN which erb

# Install node
# RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN node -v

# RUN rm /bin/sh && ln -s /bin/bash /bin/sh


# # Expose is NOT supported by Heroku
# # EXPOSE 5000 
EXPOSE 80
EXPOSE 81
EXPOSE 5000
EXPOSE 20385

ENV APP_HOME /app

RUN mkdir $APP_HOME

# Run the image as a non-root user
# none root stuff follows
RUN useradd -m heroku
RUN usermod -d $APP_HOME heroku
RUN chown heroku $APP_HOME
RUN chown -R heroku $APP_HOME
USER root

ADD . $APP_HOME

# ENV STACK 18
# WORKDIR $APP_HOME/buildpack-nginx
# RUN bin/compile $APP_HOME

WORKDIR $APP_HOME

# CMD bin/start-nginx node start.js
# RUN npm install
# RUN npx lerna bootstrap
# ENV PORT 80

# RUN bin/start-nginx node start.js
# CMD ["bash", "-c", "bin/start-nginx node start.js"]