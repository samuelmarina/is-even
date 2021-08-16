import os


commit = ""

for i in range(21,705):
	if i%2 == 1:
		commit += f'\n    else if(number === {i}) return false;'
	else:
		commit += (f'\n    else if(number === {i}) return true;')

print(commit)
