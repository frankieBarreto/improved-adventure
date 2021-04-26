# tuples are immutable! does not change

nums = (1,2,3,4,5,6)

print(3 in nums) # true

letters = ("a", "b", "c", "d", 'a')

# tuples are fasters than list

# print(letters.append("e")) # throws an error, cant add or remove

print("__________________________________________")
print(letters[0])
print("count: ", letters.count('a'))
print("index of c: ", letters.index('c'))
print(tuple.__len__(letters))

print("__________________________________________")
# you can not use a list as a key in dicts
locations = {
    (35.6895, 39.6917): "Tokyo",
    (40.7128, 74.0060): "New York"
}

print(locations[(35.6895, 39.6917)])

print("__________________________________________")
# returns a tuple of each key, val pair
print(locations.items())


print("__________________________________________")

# Looping ----------------------------------------------------------------------------------------------------

for char in letters:
    print(char)


print("__________________________________________")
i = len(letters) - 1
while i >= 0:
    print(letters[i])
    i -= 1


#  slice
print("slice: ",nums[0:4])



# SECTION SETS ////////////////////////////////////////////////////////////////////////////////////////////////////

#  sets have no order and do not have duplicates
s = set({1,4,5, "hello", "e", 2.938, "hello"})

# print(s)

for el in s:
    print("set element: ", el)

#  set methods
s.add("world") # adds data like push
print(s)

s.remove('e') #removes item if its in the set, it will throw an error if element not in set
print(s)



name = "frankie"

tup_name = tuple(name[:])
print(tup_name)






# 1 - Create a variable called numbers which is a tuple with the the values 1, 2, 3 and 4 inside.

numbers = (1,2,3,4)
# 2 - Create a variable called value which is a tuple with the the value 1 inside.

value = (1,) 
# value = tuple([1]) 
# value = tuple({1}) 
# 3 - Given the following variable:

values = [10,20,30]

# Create a variable called static_values which is the result of the values variable converted to a tuple
static_values = tuple(values[:])

# 4 - Given the following variable

stuff = [1,3,1,5,2,5,1,2,5]

# Create a variable called unique_stuff which is a set of only the unique values in the stuff list
unique_stuff = set(stuff)
print(value)
 