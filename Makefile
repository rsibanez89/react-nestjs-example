

runClient:
	@echo "Running Client App ..."
	cd client && yarn start

runServer:
	@echo "Running Server App ..."
	cd server && yarn start:dev

# make run -j
run: runClient runServer
