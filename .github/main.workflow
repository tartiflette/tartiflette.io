workflow "Push tartiflette.io Docker Image" {
  on = "push"
  resolves = ["Push"]
}

action "Docker Registry" {
  uses = "actions/docker/login@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  secrets = ["DOCKER_USERNAME", "GITHUB_TOKEN", "DOCKER_PASSWORD"]
}

action "Build" {
  uses = "./actions-shell/"
  needs = ["Docker Registry"]
  runs = "make"
  args = "import-docs"
}

action "Build Docker Image" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Build"]
  args = "build -t dailymotion/tartiflette.io:latest ."
}

action "Push" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["Build Docker Image"]
  args = "push dailymotion/tartiflette.io:latest"
}

