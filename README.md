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

### Kubernetes

#### Minikube

Start minikube:
```bash
$ minikube start
```

Ensure that your `kubectl` are configured to Minikube context (`$HOME/.kube/config`):
```bash
$ kubectl config use-context minikue
```

#### Kubernetes simple recipes

Let's create a namespace:
```bash
$ kubectl apply -f simple/namespace.yaml
```
check namespace's list with: `kubectl get ns`,`kubectl get namespace` or `kubectl get namespaces`


Let's create a service to application:
```bash
$ kubectl apply -f simple/app-service.yaml
```
run `kubectl get svc -n simple` to see the list of services and `kubectl describe svc devops-service -n simple` to see details.

Let's deploy the application:
```bash
$ kubectl apply -f simple/app-deployment.yaml
```
now you can run:
1. `kubectl get deploy -n simple` to see the deployment's list
2. `kubectl get pods -n simple` to see the pod's list
3. `kubectl describe deploy devops-deployment -n simple` to see the deployment's details

Run `minikube service list` to see available services' ip and then, make a request to `${ip_address}/info`.
