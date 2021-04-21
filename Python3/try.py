# THE BASIC SYNTAX:
# try:
# except:

# try: 
#     foobar
# except:
#     print("PROBLEM!")
# print("after the try")

# from typing import final


# def get(d,key):
# 	try:
# 		return d[key]
# 	except KeyError:
# 		return None
# d = {"name": "Ricky"}
# print(get(d, "city"))
# # d["city"]




# else:
# finally:


# try: # WILL ATTEMPT TO RUN SOMETHING
# 	num = int(input('Please enter a number: '))
# except: # IF THERES A PROBLEM EXCEPT RUNS
# 	print("Thats not a number!")
# else: # RUNS IF THERE IS NOT A PROBLEM
# 	print(f"I'm an else: the input number was {num}")
# finally: # NO MATTER WHAT FINALLY RUNS EVEN IF PROBLEM 
# 	print("RUNS NO MATTER WHAT!")


# def divide(a, b):
# 	try:
# 		res = a / b
# 	except ZeroDivisionError as err:
# 		print("don't divide by zero")
# 		print(err)
# 	except TypeError as err:
# 		print('a and b must be a number')
# 		print(err)
# 	else:
# 		print( f"{a} divided by {b} is equal to  {res}")

# def divide(a, b):
# 	try:
# 		res = a / b
# 	except (ZeroDivisionError, TypeError) as err: # you can make the errors a tuple
# 		print("don't divide by zero")
# 		print(err)
# 	else:
# 		print( f"{a} divided by {b} is equal to  {res}")

# divide(4,2)
# print("``````````````````````````````````````````")

# divide(5,0)
# print("``````````````````````````````````````````")

# divide(5,"x")
# print("``````````````````````````````````````````")