FROM nikolaik/python-nodejs:python3.13-nodejs20-alpine

WORKDIR /home/pn/app
COPY ["./package.json", "./package-lock.json*", "./python/python-requirements.txt", "./"]
RUN apk --update add gcc build-base
RUN pip install -r python-requirements.txt
RUN npm install -g @nestjs/cli
RUN npm install --verbose && mv node_modules ../
RUN chown -R pn /home/pn/app
USER pn
