names = ['Arya', "Samson", "Dora", "Tim", "Ollivander"]

# finds the minimum length of a name in names
min(len(name) for name in names) # 3

# find the longest name itself
max(names, key=lambda n:len(n)) #Ollivander

songs = [
	{"title": "happy birthday", "playcount": 1},
	{"title": "Survive", "playcount": 6},
	{"title": "YMCA", "playcount": 99},
	{"title": "Toxic", "playcount": 31}
]

# Finds the song with the lowerest playcount
min(songs, key=lambda s: s['playcount']) #{"title": "happy birthday", "playcount": 1}

# Finds the title of the most played song
max(songs, key=lambda s: s['playcount'])['title'] #YMCA

l1 = [1,2,3,4,5]
t1 = (99, 25,30,-7)
string = "alcatraz"
def extremes(data):
	# mi = min([el for el in data])
	# ma = max([el for el in data])
	# return(tuple([mi, ma]))
	return (min(data), max(data))

print(extremes(string))


def max_magnitude(li):
    # return max([abs(el) for el in li])
	return max(abs(el) for el in li)



