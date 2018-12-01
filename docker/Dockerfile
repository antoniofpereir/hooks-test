# Create build image from node
FROM node:11-alpine as build

# Create app dir and set it as working dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN ls
# Copy the package files to the workdir
COPY package*.json ./

# Install npm packages
RUN npm install

RUN ls
# Copy installation files into directory
COPY . ./

RUN npm run-script build

RUN ls

# Init server
FROM nginx:1.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]