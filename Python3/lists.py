# Define my_stuff
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