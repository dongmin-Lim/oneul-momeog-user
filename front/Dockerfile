FROM node:18
ENV LANG ko_KR.UTF8
ENV LC_ALL ko_KR.UTF8
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
WORKDIR "/usr/src/app"
COPY package.json ./
COPY ./ ./
ENTRYPOINT [ "npm", "run", "start" ]