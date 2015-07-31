test:
	@node node_modules/lab/bin/lab --ignore 'navigator,window,document' -S -T node_modules/lab-babel 'test/'
test-cov:
	@node node_modules/lab/bin/lab -t 100 --ignore 'navigator,window,document' -S -T node_modules/lab-babel 'test/'
test-cov-html:
	@node node_modules/lab/bin/lab -r html -o coverage.html --ignore 'navigator,window,document' -S -T node_modules/lab-babel 'test/'
test-coveralls:
	@node node_modules/lab/bin/lab -t 100 -r lcov --ignore 'navigator,window,document' -S -T node_modules/lab-babel 'test/' | ./node_modules/coveralls/bin/coveralls.js

.PHONY: test test-cov test-cov-html test-coveralls
