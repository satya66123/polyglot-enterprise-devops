FROM maven:3.9-eclipse-temurin-17
WORKDIR /app
COPY springboot-service/ .
RUN mvn clean package -DskipTests
CMD ["java","-jar","target/*.jar"]