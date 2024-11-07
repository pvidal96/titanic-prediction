PROJECT_NAME="titanic-prediction"
DOCKER_FILE="docker-compose.yml"


#### DOCKER COMMANDS ####
# Docker up
db:
	docker compose -f $(DOCKER_FILE) up -d --build
# Docker down
dd: 
	docker compose -f $(DOCKER_FILE) down 
#Docker restart
dr:
	make dd && make db
# Docker start
du:
	docker compose --file $(DOCKER_FILE) --project-name $(PROJECT_NAME) start
# Docker stop
ds:
	docker compose --file $(DOCKER_FILE) --project-name $(PROJECT_NAME) stop
# Docker show logs
dl:
	docker compose --file $(DOCKER_FILE) --project-name $(PROJECT_NAME) logs
# Docker show logs and follow
dlf:
	docker compose --file $(DOCKER_FILE) --project-name $(PROJECT_NAME) logs -f

#### NODE COMMANDS ####
# Enter node command line
deb:
	docker exec -it titanic-prediction-backend-1 sh
# Enter react command line
def:
	docker exec -it titanic-prediction-frontend-1 sh