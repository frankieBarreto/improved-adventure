import random

random_number = random.randint(1,10)  # numbers 1 - 10
guess = None
# handle user guesses
#   if they guess correct, tell them they won
#     otherwise tell them if they are too high or too low

# BONUS - let player play again if they want!

while True:
    guess = input("Guess of a number between 1 and 10: ")
    guess = int(guess)
    if guess > random_number:
        print(f'{guess} too low!')
    elif guess < random_number:
        print(f'{guess} is too high!')
    else:
        print('You win!')
        play_again = input("Do you want to play again? (y/n) ")
        if play_again == 'y':
            random_number = random.randint(1, 10)
            guess = None
        else:
            break
