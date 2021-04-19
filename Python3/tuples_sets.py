# tuples are immutable! does not change

nums = (1,2,3,4,5,6)

3 in nums # true

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
print(nums[0:4])



# SECTION SETS ////////////////////////////////////////////////////////////////////////////////////////////////////

#  sets have no order and do not have duplicates
s = set({1,4,5, "hello", "e", 2.938, "hello"})

print(s)

for el in s:
    print("set element: ", el)
