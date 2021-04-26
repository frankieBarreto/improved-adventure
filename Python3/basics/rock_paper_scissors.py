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



# 	from random import randint
# player_wins = 0 
# computer_wins = 0
# winning_score = 3

# while player_wins < winning_score and computer_wins < winning_score:
#     print(f"Player Score: {player_wins} Computer Score: {computer_wins}")
#     print("...rock...")
#     print("...paper...")
#     print("...scissors...")

#     player = input("(Enter your choice): ").lower()
#     if player == "quit" or player == "q":
#         break
#     random_num = randint(0, 2)
#     if (random_num == 0):
#         computer = "rock"
#     elif (random_num == 1):
#         computer = "paper"
#     else:
#         computer = "scissors"

#     print(f"The computer plays: {computer}")

#     if player == computer:
#         print("It's a tie!")
#     elif player == "rock":
#         if computer == "paper":
#             print("Computer wins :( ")
#             computer_wins += 1
#         else:
#             print("Player wins!")
#             player_wins += 1
#     elif player == "paper":
#         if computer == "rock":
#             print("Player win!")
#             player_wins += 1
#         else:
#             print("Computer wins!")
#             computer_wins += 1
#     elif (player == "scissors"):
#         if (computer == "rock"):
#             print("Computer wins!")
#             computer_wins += 1
#         else:
#             print("You win!")
#             player_wins += 1
#     else:
#         print("Please enter a valid move!")

# if player_wins > computer_wins:
#     print("CONGRATS, YOU WON!")
# elif player_wins == computer_wins:
#     print("IT'S A TIE")
# else: 
#     print("OH NO :( THE COMPUTER WON...")

