from random import choice
# or you could do
# import random
# then random.choice()

l = ['rock','paper','scissors']
comp = choice(l)

player1 = input('Player 1, choose move! rock, paper or scissors: ')
# player2 = input('Player 2, choose move! rock, paper or scissors: ')
player2 = comp

# if player1 == 'rock' and player2 == 'scissors':
#     print("Player 1 wins!")
# elif player1 == 'rock' and player2 == 'paper':
#     print("Player 2 wins!")
# elif player1 == 'paper' and player2 == 'rock':
#     print('player 1 wins!')
# elif player1 == 'paper' and player2 == 'scissors':
#     print("Player 2 wins!")
# elif player1 == 'scissors' and player2 == 'paper':
#     print('player 1 wins!')
# elif player1 == 'scissors' and player2 == 'rock':
#     print("Player 2 wins!")
# elif player1 == player2:
#     print("Draw! Go again")
# else:
#     print('input must be one three choices')

if player1 == player2:
	print("It's a tie!")
elif player1 == "rock":
	if player2 == "scissors":
		print("player1 wins!")
	elif player2 == "paper":
		print("player2 wins!")
elif player1 == "paper":
	if player2 == "rock":
		print("player1 wins!")
	elif player2 == "scissors":
		print("player2 wins!")
elif player1 == "scissors":
	if player2 == "paper":
		print("player1 wins!")
	elif player2 == "rock":
		print("player2 wins!")	
else:
	print("something went wrong")
