.PHONY: import-docs
import-docs:
	rm -rf ./tmp_tartiflette
	git clone git@github.com:dailymotion/tartiflette.git tmp_tartiflette
	mv ./tmp_tartiflette/docs docs
	rm -rf tmp_tartiflette