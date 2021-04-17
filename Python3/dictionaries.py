char_info = {"name":"DK", "email":"DK@Kong.com", "password":"bananajams"}
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

for key in char_info.keys():
    print("key: ", key)

for val in char_info.values():
    print("val: ", val)

for key, val in char_info.items():
    print(key, ":", val)



donations = dict(sam=25.0, lena=88.99, chuck=13.0, linus=99.5, stan=150.0, lisa=50.25, harrison=10.0)
total_donations = 0
for donation in donations.values():
    total_donations += donation
print(total_donations)



# clear
print(user_info)
user_info.clear() # removes everything within the object
print(user_info)

# copy

clone = char_info.copy() # makes a copy but they are not the same in memory
print(clone, char_info)