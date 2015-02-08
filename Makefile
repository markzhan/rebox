test:
	./node_modules/.bin/mocha --reporter list

cov test-cov:
	./node_modules/.bin/istanbul cover _mocha

.PHONY: test cov test-cov
