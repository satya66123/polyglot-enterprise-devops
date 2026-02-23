# Polyglot Enterprise DevOps Platform

Enterprise-grade polyglot microservices system demonstrating multi-language backends, multi-database architecture, advanced queries, and full DevOps container orchestration.

## Architecture

Python, Node.js, Spring Boot, and PHP services connect to both MySQL and MongoDB.

Features:
- SQL joins across relational data
- MongoDB aggregation pipelines
- Polyglot microservices
- Docker Compose orchestration
- Kubernetes deployment manifests
- Multi-database integration

## Tech Stack

- Python (Flask)
- Node.js (Express)
- Spring Boot
- PHP
- MySQL
- MongoDB
- Docker
- Kubernetes

## Services

| Service | Port | Endpoints |
|--------|------|-----------|
Python | 5000 | /mysql/join, /mongo/aggregation |
Node | 3000 | /mysql/join, /mongo/aggregation |
Spring | 8080 | /mysql/join, /mongo/aggregation |
PHP | 8000 | ?type=mysql, ?type=mongo |

## Run with Docker


docker compose up --build

Run with Kubernetes
kubectl apply -f k8s/
Project Structure

python-service

node-service

springboot-service

php-service

database

docker

k8s

docker-compose.yml

Purpose

Demonstrates enterprise backend engineering skills:

Polyglot development

SQL and NoSQL mastery

Advanced querying

Containerization

Orchestration

Microservices architecture


---

# 🚀 GITHUB PUSH STEPS
From project root:


git init
git add .
git commit -m "polyglot enterprise devops platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/polyglot-enterprise-devops.git
git push -u origin main
✅ BUILD DOCKER IMAGES (for K8s)

Before Kubernetes:

docker build -t polyglot-python -f docker/python.Dockerfile .
docker build -t polyglot-node -f docker/node.Dockerfile .
docker build -t polyglot-spring -f docker/springboot.Dockerfile .
docker build -t polyglot-php -f docker/php.Dockerfile .

