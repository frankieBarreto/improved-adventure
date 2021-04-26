from random import choice  # DON'T CHANGE!
char_info = {"name": "DK", "email": "DK@Kong.com", "password": "bananajams"}
user_info = dict(name="Kito", email="FB@gmail.com", password="7189930943")

print(char_info["email"])
print(char_info["name"])
print(user_info["password"])


artist = {
    "first": "Neil",
    "last": "Young",
}
full_name = f"{artist['first']} {artist['last']}"
# print(full_name) # Neil Young


#  Iterating through dics

# for key in char_info.keys():
#     print("key: ", key)

# for val in char_info.values():
#     print("val: ", val)

# for key, val in char_info.items():
#     print(key, ":", val)


donations = dict(sam=25.0, lena=88.99, chuck=13.0, linus=99.5,
                 stan=150.0, lisa=50.25, harrison=10.0)
total_donations = 0
for donation in donations.values():
    total_donations += donation
# print(total_donations)


# CLEAR
# print(user_info)
user_info.clear()  # removes everything within the object
# print(user_info)

# copy

clone = char_info.copy()  # makes a copy but they are not the same in memory
# print(clone is char_info) # false
# print(clone, char_info)

# FROMKEYS used to generate default values

a = {}.fromkeys("a", "b")
b = {}.fromkeys(["email", "password"], "not_registered")
c = {}.fromkeys("abc", [1, 2, 3, 4, 5])
# print(c)


# GET
# print(a.get('email'))
# print(b.get('email'))
# print(c.get('b'))
# print(char_info.get('name'))


# This code picks a random food item:
food = choice(["cheese pizza", "quiche", "morning bun",
              "gummy bear", "tea cake"])  # DON'T CHANGE!

# DON'T CHANGE THIS DICTIONARY EITHER!
bakery_stock = {
    "almond croissant": 12,
    "toffee cookie": 3,
    "morning bun": 1,
    "chocolate chunk cookie": 9,
    "tea cake": 25
}

# YOUR CODE GOES BELOW:
count = bakery_stock.get(food)

if count:
    print(f"{count} left")
else:
    print("We don't make that")

    # DO NOT TOUCH game_properties!
game_properties = ["current_score", "high_score", "number_of_lives", "items_in_inventory", "power_ups", "ammo",
                   "enemies_on_screen", "enemy_kills", "enemy_kill_streaks", "minutes_played", "notifications", "achievements"]

# Use the game_properties list and dict.fromkeys() to generate a dictionary with all values set to 0. Save the result to a variable called initial_game_state

initial_game_state = {}.fromkeys(game_properties, 0)
# print(initial_game_state) 




# POP 

d = dict(a=1, b=2, c=3, d=4, e=5, f=6)
# d.pop()  throws a type error
# print(d)
# d.pop('a') # removed key&value a:1
# print(d)

# tup = d.popitem() # removed somthing at random
# print(d)
# print(tup)

# UPDATE
person = dict(name='frankie', food='pizza', age=32)

person.update(char_info)





inventory = {'croissant': 19, 'bagel': 4, 'muffin': 8, 'cake': 1} #DON'T CHANGE THIS LINE!

# Make a copy of inventory and save it to a variable called stock_list USE A DICTIONARY METHOD

stock_list = inventory.copy()


# add the value 18 to stock_list under the key "cookie"
stock_list['cookie'] = 18


# remove 'cake' from stock_list USE A DICTIONARY METHOD
stock_list.pop('cake')
# print(stock_list)






# Dictionary comprehention SECTION //////////////////////////////////////////////////////////////////

numbers = dict(first=1, second=2, third=3, forth=4)

squared_numbers = {key: val ** 2 for key, val in numbers.items()}
# print(squared_numbers)




num_list = [1,2,3,4]
nums_cubed = {num: num ** 3 for num in num_list}
# print(nums_cubed)


str = "ABC"
str_num = "123"

letter_nums = {str[i]:str_num[i] for i in range(len(str))}
# print(letter_nums)



# CONDITIONAL DICTIONARY COMPREHENTION
human = dict(planet='Earth', galaxy='Milkyway', sun='Sol', sex='male', name='John Doe')
loud_human = {k.upper():v.upper() for k,v in human.items()}
# print(loud_human)


numeros = [1,2,3,4,5,6,7,8,9,10]
# odds_evens = {num:("even" if num % 2 == 0 else "odd") for num in numeros}
# odds_evens = {num:("even" if num % 2 == 0 else "odd") for num in range(101)}
# print(odds_evens)

list1 = ["CA", "NJ", "RI"]
list2 = ["California", "New Jersey", "Rhode Island"]

# make sure your solution is assigned to the answer variable so the tests can work!
answer = {list1[i]:list2[i] for i in range(len(list1))}
# print(answer)

person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]

# use the person variable in your answer
answer2 = {el[0]:el[1] for el in person}
# print(answer2)
answer3 = {k:v for k,v in person}
# print(answer3)


vowels = 'aeiuo'
# answer4 = {}.fromkeys(vowels, 0)
answer4 = {char:0 for char in vowels}
# print(answer4)



# return a dict with all letters chars using their ASCII codes
upper_alph = {n: chr(n) for n in range(65, 91)}
alph = {n: chr(n) for n in range(97, 123)}
alph.update(upper_alph)
print(alph)