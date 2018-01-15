FROM node
MAINTAINER Ronalds Sovas <sovas@dosje.in>

#https://gist.github.com/julionc/7476620

RUN npm install -g nightmarejs && \
	apt-get update && \
	apt-get install -y xvfb build-essential chrpath libssl-dev libxft-dev libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev && \
	wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-x86_64.tar.bz2 && \
	tar xvjf phantomjs-1.9.8-linux-x86_64.tar.bz2 && \
	mv phantomjs-1.9.8-linux-x86_64 /usr/local/share && \
	ln -sf /usr/local/share/phantomjs-1.9.8-linux-x86_64/bin/phantomjs /usr/local/bin

EXPOSE 8686