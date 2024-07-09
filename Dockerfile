FROM golang:1.22 AS build

WORKDIR /usr/src/hrms

COPY go.mod ./

RUN go mod download
RUN go mod verify

COPY . .

ENV GOOS=linux
RUN make build


FROM debian:bookworm

COPY --from=build /usr/src/hrms /usr/local/bin

EXPOSE 3000
CMD ["hrms"]
