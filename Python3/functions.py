def generate_evens():
    return [num for num in range(2, 50) if num % 2 == 0]


    def yell(str):
        # return f"{str.upper()}!"
        return str.upper() + "!"



        # Without adding any new lines of code, make count_dollar_signs work as intended
def count_dollar_signs(word):
    count = 0
    for char in word:
        if char == '$':
            count += 1
    return count




def speak(animal='dog'):
    if animal == 'pig':
        return 'oink'
    elif animal == 'duck':
        return 'quack'
    elif animal == 'cat':
        return 'meow'
    elif animal == 'dog':
        return 'woof'
    else:
        return "?"





def product(a, b):
    return a * b

def return_day(n):
    if n <= 0 or n > 7:
        return None
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    # days = {i+1:list[i] for i in range(len(list))}
    day = days[n-1]
    return day



def last_element(list):
    if list == []:
        return None
    
    return list[-1]



def number_compare(a, b):
    if a == b:
        return "Numbers are equal"
    elif a > b:
        return "First is greater"
    else:
        return "Second is greater"

def single_letter_count(str, char):
    # t = tuple(str.lower()[:])
    return str.lower().count(char.lower())


def multiple_letter_count(str):
    # count = {}
    # for char in str:
    #     if count.get(char):
    #         count[char]+=1
    #     else:
    #         count[char] = 1
    count = {char:str.count(char) for char in str}
    return count


# print(multiple_letter_count("hello"))

arr = [1,2,3]
def list_manipulation(items, command, location, value=None):
    if(command == 'remove' and location == 'end'):
        return items.pop()
    elif (command == 'remove' and location == 'beginning'):
        return items.pop(0)
    elif (command == 'add' and location == 'end'):
        items.append(value)
        return items
    elif (command == 'add' and location == 'beginning'):
        items.insert(0, value)
        return items

print(list_manipulation(arr, 'add', 'beginning', 'a'))




def is_palindrome(str):
    str = str.replace(" ", "")
    return str[::-1] == str

print(is_palindrome("tac ocat"))



def frequency(list, item):
    return list.count(item)



def multiply_even_numbers(list):
    prod = 1
    for n in list:
        if (n % 2 == 0):
            prod *= n
    return prod


def capitalize(str):
    str = str[0].upper() + str[1:]
    return str

def compact(list):
    return [item for item in list if item]
    
def intersection(list1, list2):
    return [el for el in list1 if el in list2]


def partition(list, cb):
    return [[el for el in list if cb(el)], [el for el in list if not cb(el)]]
