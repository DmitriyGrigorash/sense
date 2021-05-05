# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /economics

# add `/app/node_modules/.bin` to $PATH
ENV PATH /economics/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
