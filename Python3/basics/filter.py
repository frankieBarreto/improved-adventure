users = [
	{"username": "samuel", "tweets": ["I love cake", "I love pie", "hello world!"]},
	{"username": "katie", "tweets": ["I love my cat"]},
	{"username": "jeff", "tweets": []},
	{"username": "bob123", "tweets": []},
	{"username": "doggo_luvr", "tweets": ["dogs are the best", "I'm hungry"]},
	{"username": "guitar_gal", "tweets": []}
]
#extract inactive users using filter:
inactive_users = list(filter(lambda u: not u['tweets'], users))

#extract inactive users using list comprehension:
inactive_users2= [user for user in users if not user["tweets"]]

# extract usernames of inactive users w/ map and filter:
usernames = list(map(lambda user: user["username"].upper(), 
	filter(lambda u: not u['tweets'], users)))

# extract usernames of inactive users w/ list comprehension
usernames2 = [user["username"].upper() for user in users if not user["tweets"]]


l1 = [-1,3,4,-99]
l2 = [-7, 0, 1, 2, 3, 4, 5, "1"]
l3 = [50, 60, 70]
def remove_negatives(l):
	return list(filter(lambda item: item >= 0, l))

# print(remove_negatives(l1))


def is_all_strings(l):
    return all([type(el) == str for el in l])

print(is_all_strings(l2))

def triple_and_filter(li):
    # return [el*3 for el in li if el % 4 == 0]
    return list(filter(lambda n: n % 4 == 0, li), map(lambda n: n*3))



'''
names = [{'first': 'Elie', 'last': 'Schoppik'}, {'first': 'Colt', 'last': 'Steele'}]
extract_full_name(names) # ['Elie Schoppik', 'Colt Steele']
'''
names = [{'first': 'Elie', 'last': 'Schoppik'}, {'first': 'Colt', 'last': 'Steele'}]
def extract_full_name(data):
	# return [d['first']+ " " + d['last'] for d in data]
	 return list(map(lambda val: "{} {}".format(val['first'], val['last']), data))

print(extract_full_name(names)) # ['Elie Schoppik', 'Colt Steele']

