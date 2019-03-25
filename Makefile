.PHONY: import-docs
import-docs:
	rm -rf ./tmp_tartiflette
	git clone https://github.com/dailymotion/tartiflette.git tmp_tartiflette
	mv ./tmp_tartiflette/docs docs
	rm -rf tmp_tartiflette

.PHONY: run
run:
	cd website && npm start