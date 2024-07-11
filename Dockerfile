FROM node:20 AS building

WORKDIR /usr/src/hrms

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN make built


FROM node:20-slim

WORKDIR /opt/hrms

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY --from=building /usr/src/hrms/dist ./

CMD ["node", "./bin/http.js"]