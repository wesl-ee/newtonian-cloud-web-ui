set dotenv-path := ".env.local"

api_url := env("API_URL")
dev_port := env("DEV_PORT")

default:
  @just --list

# install js deps
install:
  npm install

# regenerate protobuf bindings from backend proto
proto:
  npm run proto:gen

# install + regenerate proto
bootstrap: install proto

# run next dev with local backend api
dev:
  NEXT_PUBLIC_API_URL={{api_url}} npm run dev -- --port {{dev_port}}

# production build
build:
  npm run build

# local frontend checks
check: proto build
