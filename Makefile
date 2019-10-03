.PHONY: import-docs
import-docs:
	rm -rf ./tmp_tartiflette ./docs
	git clone https://github.com/tartiflette/tartiflette.git tmp_tartiflette
	mv ./tmp_tartiflette/docs docs
	rm -rf tmp_tartiflette

.PHONY: run
run:
	cd website && npm start