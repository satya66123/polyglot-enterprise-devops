# Polyglot Enterprise DevOps Platform

![Stars](https://img.shields.io/github/stars/satya66123/polyglot-enterprise-devops)
![Forks](https://img.shields.io/github/forks/satya66123/polyglot-enterprise-devops)
![Issues](https://img.shields.io/github/issues/satya66123/polyglot-enterprise-devops)
![License](https://img.shields.io/github/license/satya66123/polyglot-enterprise-devops)
![Last Commit](https://img.shields.io/github/last-commit/satya66123/polyglot-enterprise-devops)
![Repo Size](https://img.shields.io/github/repo-size/satya66123/polyglot-enterprise-devops)

[![Tech Stack](https://skillicons.dev/icons?i=java,spring,react,nodejs,mongodb,mysql,docker,kubernetes,aws,git,github)](https://skillicons.dev)

![Architecture](https://img.shields.io/badge/architecture-microservices-blue)
![DevOps](https://img.shields.io/badge/devops-enterprise-orange)
![Status](https://img.shields.io/badge/status-active-success)

# Polyglot Enterprise DevOps

Enterprise-grade polyglot microservices platform demonstrating multi-language backends, multi-database integration, advanced querying, and full DevOps orchestration.**Polyglot Enterprise DevOps Platform | Docker, Kubernetes, Helm, Python, Node.js, Spring Boot, PHP, MySQL, MongoDB**
Designed and developed an enterprise-grade polyglot microservices platform integrating Python, Node.js, Spring Boot, and PHP services with both MySQL and MongoDB databases. Implemented advanced SQL JOIN queries and MongoDB aggregation pipelines to demonstrate multi-database access patterns. Containerized all services using Docker and orchestrated deployments via Kubernetes with Helm charts. Configured Nginx API Gateway for unified routing across microservices and automated container builds using GitHub Actions CI/CD. Demonstrates expertise in microservices architecture, DevOps orchestration, and multi-language backend engineering.


---

## 🚀 Overview

This project implements a production-style polyglot microservices architecture using:

- Python (Flask)
- Node.js (Express)
- Spring Boot
- PHP
- MySQL (Relational)
- MongoDB (NoSQL)
- Docker & Docker Compose
- Kubernetes
- Nginx API Gateway
- Helm Charts
- GitHub Actions CI/CD

Each backend service connects to **both MySQL and MongoDB**, demonstrating real enterprise multi-database patterns.

---

## 🏗 Architecture

Client → Nginx API Gateway → Polyglot Services → MySQL & MongoDB

Services:
- Python Service
- Node Service
- Spring Boot Service
- PHP Service

Databases:
- MySQL (users, orders relational schema)
- MongoDB (users, orders collections)

---

## 📂 Project Structure


polyglot-enterprise-devops/
│
├── python-service/
├── node-service/
├── springboot-service/
├── php-service/
│
├── database/
├── docker/
├── gateway/
├── k8s/
├── helm/
│
├── docker-compose.yml
├── README.md
└── PLANNER.md


---

## 🗄 Database Design

### MySQL
Tables:
- users
- orders

Features:
- Foreign keys
- Relational JOIN queries

### MongoDB
Collections:
- users
- orders

Features:
- $lookup aggregation
- Total spend calculation

---

## 🔌 API Endpoints (via Gateway)

Python  
- `/python/mysql/join`  
- `/python/mongo/aggregation`

Node  
- `/node/mysql/join`  
- `/node/mongo/aggregation`

Spring  
- `/spring/mysql/join`  
- `/spring/mongo/aggregation`

PHP  
- `/php?type=mysql`  
- `/php?type=mongo`

---

## ▶️ Run Locally (Docker)

docker compose up --build

Gateway test:

http://localhost/python/mysql/join
http://localhost/node/mongo/aggregation
http://localhost/spring/mysql/join
http://localhost/php?type=mysql
☸️ Kubernetes Deployment

Apply manifests:

kubectl apply -f k8s/
⛵ Helm Deployment

Install chart:

helm install polyglot helm/polyglot

Upgrade:

helm upgrade polyglot helm/polyglot
🌐 API Gateway

Single entry routing via Nginx:

gateway/nginx.conf

Routes:

/python/*

/node/*

/spring/*

/php/*

⚙️ CI/CD

GitHub Actions builds Docker images on push.

Workflow:

.github/workflows/docker-build.yml
🎯 DevOps Features Demonstrated

Polyglot backend engineering

SQL + NoSQL integration

Advanced queries & aggregations

Microservices architecture

Docker containerization

Kubernetes orchestration

API Gateway routing

Helm packaging

CI/CD automation

📅 Build Plan

See:

PLANNER.md

7-day structured implementation schedule.

👨‍💻 Author

Polyglot Enterprise DevOps Portfolio Project
Designed to demonstrate enterprise backend and DevOps engineering skills.


```🏗 Architecture Diagram
4

Architecture explanation (for interviews):

Client requests enter Nginx API Gateway

Gateway routes to polyglot services (Python, Node, Spring, PHP)

Each service connects to both MySQL and MongoDB

Docker Compose runs locally

Kubernetes deploys in cluster

Helm packages deployment

CI/CD builds images automatically

📄 Recruiter-Friendly Project Description

Use in GitHub About / LinkedIn / Portfolio:

Writing

Polyglot Enterprise DevOps Platform is a production-style microservices system built using Python, Node.js, Spring Boot, and PHP services connected to both MySQL and MongoDB databases. The platform demonstrates advanced SQL JOIN queries, MongoDB aggregation pipelines, multi-database access patterns, and polyglot backend design.

The system is fully containerized with Docker, orchestrated using Kubernetes, routed through an Nginx API Gateway, packaged with Helm charts, and automated via GitHub Actions CI/CD.

This project showcases enterprise-grade backend engineering and DevOps capabilities including microservices architecture, multi-language integration, database interoperability, and cloud-ready deployment.

📑 Resume Bullet Points

Use under Projects section:

Writing

Polyglot Enterprise DevOps Platform
• Designed and implemented polyglot microservices architecture using Python, Node.js, Spring Boot, and PHP
• Integrated relational (MySQL) and NoSQL (MongoDB) databases with SQL JOIN queries and MongoDB aggregation pipelines
• Built multi-service containerized platform using Docker Compose and Kubernetes deployments
• Implemented Nginx API Gateway for unified routing across services
• Created Helm charts for Kubernetes packaging and reusable deployments
• Automated container builds using GitHub Actions CI/CD pipeline
• Demonstrated enterprise DevOps practices including microservices orchestration, multi-database integration, and cloud-ready deployment

