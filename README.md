# Kink.com Coding Challenge

This is a simple Node server API for taking a URL as a parameter and returning a word count from its response body.

## Setup
* Fork and/or clone this repo directly.
* Go to your cloned directory and `npm install` the dependencies.
* Make HTTP requests to `localhost:8888/api/words` with a `?url` parameter to count.

E.g.

```shell
$ curl http://localhost:8888/api/words?url=http://demo.chevro.co/kink
{"count":20}
```

## Potential Enhancements
* Implement a logger module to log what requests come through, whether they were valid, what their count was, and save it to a running text file.
* Provide an HTML endpoint with instructions at root, redirect all traffic there besides `/api/*`.
* Allow more query parameters, such as only including or excluding certain tags in count.
* Implement a character count as well, maybe at `/api/chars` or `/api/characters` (or both), or allow as query parameter to `/api/words`.
* Investigate the discrepancy of the used module `word-count` on large HTML documents. It seems to count text bodies really well, but I think it deals with tag separation differently than some other online word counters I tested.
