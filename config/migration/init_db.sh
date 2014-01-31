#!/bin/sh

database='mean'

if [ ${NODE_ENV:-undefined} != 'production' ] ; then
	database='mean-dev'
fi

# remove all collections
mongo localhost:27017/${database} ./config/migration/drop.js

# load default data
mongoimport -d ${database} -c users -type json ./config/migration/guestusers.json
mongoimport -d ${database} -c keyvaluestores -type json ./config/migration/currentquestion.json
mongoimport -d ${database} -c questions -type json ./config/migration/question.json
