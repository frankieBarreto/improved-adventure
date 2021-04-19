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