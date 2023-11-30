FROM node:18.16.1
LABEL authors="camil"

COPY . .


CMD ["npm" ,"install" ,"next" ,"npm", "run", "dev"]
