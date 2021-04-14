# Define my_stuff
from typing import ValuesView


my_stuff = [1, 2, 3, 4, "Camera", 2.5]
# Define nums
nums = list(range(1,100))

my_stuff[0] # 1
my_stuff[-2] # "Camera"
my_stuff[1] #  2

# DON'T TOUCH THIS PLEASE!
people = ["Hanna","Louisa","Claudia", "Angela","Geoffrey", "aparna"]
# DON'T TOUCH THIS PLEASE!

#Change "Hanna" to "Hannah"
people[0] = "Hannah"
#Change "Geoffrey" to "Jeffrey"
people[-2] = "Jeffrey"
#Change "aparna" to "Aparna" (capitalize it)
people[-1] = "Aparna"
print(people)




sounds = ["super", "cali", "fragil", "istic", "expi", "ali", "docious"]

# Define your code below:
result = ""
for sound in sounds:
    result += sound

print(result.upper())


# NOTE Adding to existing list
# Create a list called instructors
instructors = []
# Add the following strings to the instructors list 
    # "Colt"
    # "Blue"
    # "Lisa"
instructors.append("Colt")
instructors.extend(["Lisa"])
instructors.insert(1, "Blue")
# Run the tests to make sure you've done this correctly!
print(instructors)


# Removing NOTE
# Remove the last value in the list
instructors.pop()
# Remove the first value in the list
instructors.remove("Colt")
# Add the string "Done" to the beginning of the list
instructors.insert(0, "Done")
# Run the tests to make sure you've done this correctly!
print(instructors)





# Slicing NOTE
colors = ['red', 'blue', 'green', 'yellow', 'indigo', 'violet']
# copy of a list
copy = colors[0:]

# print(colors)
# print(copy)
print(copy is colors) # false


half = colors[0:3]
# print(half)

print(colors[:5]) # all but the last
print(colors[:2]) #slices until the second index but not included
print(colors[:-2]) # all but the last two elements
print(colors[-2:]) # just last the last two elements


# Step slicing NOTE

print(colors[0::2]) # returns an array from index 0 til the end but stepping over 2 each iteration

# REVERSE NOTE
print(colors[::-1])
print(colors[2::-1])
print(colors[:1:-1])

# You can do the same with strings



# Swapping Values
colors[0], colors[-1] = colors[-1], colors[0]
print(colors)

# LIST COMPREHENSION
nums = [1,2,3,4,5,6,7,8,9,10]
multiply_by_ten = [n * 10 for n in nums]
print(nums, multiply_by_ten)


name = 'Frankie'
cap_char_list = [c.upper() for c in name]
print(cap_char_list)


str_nums = [str(n) for n in nums]
print(str_nums)



# conditional list comprehenion

odds = [n for n in nums if n % 2 == 1]

evens = [n for n in nums if n % 2 == 0]

print(odds, evens)


even_prod_odd_half = [n*2 if n % 2 == 0 else n/2 for n in nums]
print(even_prod_odd_half)


str = " !!! "
str = str.join(['strange', 'python', 'power'])
print(str)


with_vowels = "This is so much fun!"
with_vowels = "".join(char for char in with_vowels if char not in "aeiou")


print(with_vowels)