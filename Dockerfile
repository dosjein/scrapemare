FROM node
MAINTAINER Ronalds Sovas <sovas@dosje.in>

#https://gist.github.com/julionc/7476620

RUN mkdir /opt/scrapemare

ADD src /opt/scrapemare/src
ADD readme.md /opt/scrapemare/readme.md
ADD run.sh /opt/scrapemare/run.sh
ADD run_debug.sh /opt/scrapemare/run_debug.sh

RUN npm install -g nightmarejs && \
	apt-get update && \
	apt-get install -y xvfb build-essential chrpath libssl-dev libxft-dev libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev && \
	apt install -y libgtk2.0-0 libxss1 libasound2  && \
	apt-get install -y libxtst6 libgconf-2-4 libnss3-dev && \
	wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-x86_64.tar.bz2 && \
	tar xvjf phantomjs-1.9.8-linux-x86_64.tar.bz2 && \
	mv phantomjs-1.9.8-linux-x86_64 /usr/local/share && \
	ln -sf /usr/local/share/phantomjs-1.9.8-linux-x86_64/bin/phantomjs /usr/local/bin && \
	npm install -g express-generator@4 && \
	cd /opt/scrapemare/src && \
	npm install

EXPOSE 8686