# devops-days-bh-kubernetes-introduction
Kubernetes Introduction Workshop

#### Installation

First, if you want to run the commands in your machine, follow [this](https://kubernetes.io/docs/tasks/tools/install-minikube/) tutorial and install all parts.

#### Application

I've implemented a simple NodeJS application. See `/app` folder to more details.
Just run `docker-compose up` to start NodeJS server.

I've generated two Docker images(versions) of the application, I've just changed the version value from `v1` to `v2`.
```bash
$ docker build -t jeanpsv/devops-days-bh-kubernetes-introduction:v1 --build-arg APP_VERSION=v1 --build-arg INSTANCE_NAME=only-child --build-arg SECRET_KEY=my-awesome-secret-key --build-arg PORT=4000 .
$ docker build -t jeanpsv/devops-days-bh-kubernetes-introduction:v2 --build-arg APP_VERSION=v2 --build-arg INSTANCE_NAME=only-child --build-arg SECRET_KEY=my-awesome-secret-key --build-arg PORT=4000 .
```

ps: I've pushed the images to [this](https://hub.docker.com/r/jeanpsv/devops-days-bh-kubernetes-introduction/) Docker Registry.

if you want to run it on Docker, just do:
```
$ docker pull jeanpsv/devops-days-bh-kubernetes-introduction:v1
$ docker run --rm -p 4000:4000 jeanpsv/devops-days-bh-kubernetes-introduction:v1 npm start
```

