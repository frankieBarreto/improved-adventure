# A User class with both a class attribute
class User:

	active_users = 0

	def __init__(self, first, last, age):
		self.first = first
		self.last = last
		self.age = age
		User.active_users += 1

	def logout(self):
		User.active_users -= 1
		return f"{self.first} has logged out"

	def full_name(self):
		return f"{self.first} {self.last}"

	def initials(self):
		return f"{self.first[0]}.{self.last[0]}."

	def likes(self, thing):
		return f"{self.first} likes {thing}"

	def is_senior(self):
		return self.age >= 65

	def birthday(self):
		self.age += 1
		return f"Happy {self.age}th, {self.first}"
	
	@classmethod
	def display_active_user(cls):
		return f"There are currently {cls.active_users} active mods"

class Moderator(User):
	total_mods = 0
	def __init__(self, first, last, age, community):
		super().__init__(first, last, age)
		self.community = community
		Moderator.total_mods += 1

	@classmethod
	def display_active_mods(cls):
		return f"There are currently {cls.total_mods} active mods"

	@classmethod
	def remove_post(self):
		return f"{self.full_name()} removed a post from the {self.community} community"



# print(user1.likes("Ice Cream"))
# print(user2.likes("Chips"))

# print(user2.initials())
# print(user1.initials())

# print(user2.is_senior())
# print(user1.age)
# print(user1.birthday())
# print(user1.age)
# user1.say_hi()

user1 = User("Joe", "Smith", 68)
user2 = User("Blanca", "Lopez", 41)
user2 = User("Yorp", "Urkl", 391)

mod1 = Moderator("x", "men", 0, 'comics')
mod1 = Moderator("mario", "bros", 0, 'video games')
print(User.display_active_user())
print(Moderator.display_active_mods())
# print(User.active_users)
# print(User.active_users)
# print(user2.logout())
# print(User.active_users)










