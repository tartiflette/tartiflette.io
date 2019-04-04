workflow "push tartiflette.io docker image" {
  on = "push"
  resolves = ["push"]
}

action "docker registry" {
  uses = "actions/docker/login@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  secrets = ["DOCKER_USERNAME", "GITHUB_TOKEN", "DOCKER_PASSWORD"]
}

action "build" {
  uses = "./actions-shell/"
  needs = ["docker registry"]
  runs = "make"
  args = "import-docs"
}

action "build docker image" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["build"]
  args = "build -t dailymotion/tartiflette.io:latest ."
}

action "is master" {
  uses = "actions/bin/filter@master"
  needs = ["build docker image"]
  args = "branch master"
}

action "push" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  needs = ["is master"]
  args = "push dailymotion/tartiflette.io:latest"
}

