# Dependency-Check Core
# https://jeremylong.github.io/DependencyCheck/dependency-check-cli/arguments.html

.PHONY: deps-check
deps-check:
	@echo --------------Start---------------

	dependency-check --enableExperimental \
		--project SendLineLocation \
		--format HTML \
		--scan ./package.json \
		--scan ./package-lock.json \
		--out ./deps-report

	@echo ---------------End----------------