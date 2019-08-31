.PHONY: local 

local:
	jekyll build --safe -d ./lanes
	(sleep 1 && open "http://127.0.0.1:4000") &
	jekyll serve

