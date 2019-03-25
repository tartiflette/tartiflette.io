FROM node:8.11.4

WORKDIR /app/website

EXPOSE 3000 35729

# RUN apt-get update && apt-get install -y git

# RUN mkdir -p ./tmp/tartiflette.io
# RUN git clone https://github.com/dailymotion/tartiflette.io.git ./tmp/tartiflette.io
# RUN ln -s ./docs ./tmp/tartiflette.io/docs

COPY ./docs /app/website
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]
