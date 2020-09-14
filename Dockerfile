FROM node:10.20.1-slim@sha256:05d1d270480b6e99753076b6656bb5a37edb7ca31af20c008568a556bc82d2a8

RUN  apt-get update 

RUN  apt-get install -y wget gnupg ca-certificates \
     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' 

RUN  apt-get update \
     && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
     --no-install-recommends \
     && rm -rf /var/lib/apt/lists/* \
     && wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/sbin/wait-for-it.sh \
     && chmod +x /usr/sbin/wait-for-it.sh 


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH=/usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install pm2 -g
COPY . /usr/src/app

RUN npm run build
ENV NODE_ENV=production

RUN cd /usr/src/app
RUN find . -name '*.graphql' -exec cp --parents \{\} /usr/src/app/build/api \;

EXPOSE 4000

# CMD npm run dev
CMD ["pm2-runtime", "ecosystem.config.js"]