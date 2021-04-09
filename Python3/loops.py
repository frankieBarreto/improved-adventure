# for x in range(1,10):
# 	print(x)
# 	print(x*x)

# for letter in "coffee":
# 	print(letter*5)

# r = range(5)
# arr = list(r)

# print(arr) # [0,1,2,3,4]


# for num in range(8, 0, -2):
# 	print(num)




# Add up all odd numbers between 10 and 20
# Store the result in x:
# x = 0

# for n in range(10, 21):  #remember range is exclusive, so we have to go up to 21
#     if n % 2 != 0:
#         x += n


# x = 0
 
# for i in range(11,21,2):
#         x += i

# print(x)




# times = input("How many times do I have to tell you? ")
# time = int(times)


# for time in range(5):
# 	print(f"{time+1}: Take out the garbage!")


# print odds and even
# for num in range(1, 21):
# 	if num % 2 == 0:
# 		print(f"{num} is even")
# 	else:
# 		print(f"{num} is odd")



# user_response = input("Whats the magic word? ")
# while user_response != "please":
# 	user_response = input("'Nope! Try again:' ")


# for n in range(11):
# 	print("\U0001f600" * n)

# count = 1
# while count < 11:
# 	print("\U0001f600" * count)
# 	count += 1



from random import randint  # use randint(a, b) to generate a random number between a and b

number = 0 # store random number in here, each time through
i = 0  # i should be incremented by one each iteration

while number != 5:
	number = randint(1, 10)
	i += 1

print(i)