class Comment:
    def __init__(self, username, text, likes=0):
        self.username = username
        self.text = text
        self.likes = likes


class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0.0
    
    def deposit(self,amount):
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if self.balance >= amount: self.balance -= amount
        else:
            return "Amount requested exceeds balance."
        return self.balance



class Chicken:
    total_eggs = 0
    def __init__(self, name, species, eggs=0):
        self.name = name
        self.species = species
        self.eggs = eggs
    
    def lay_egg(self):
        self.eggs += 1
        Chicken.total_eggs += 1
        return self.eggs


from random import shuffle
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return "{} of {}".format(self.value, self.suit)

class Deck:    
    # suits = ["♡", "♢", "♧", "♤"]

    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3" ,"4" ,"5","6","7","8","9","10", "J", "Q", "K"]
        self.cards = [Card(s, v) for s in suits for v in values]

# NOTE made deck iterable
    def __iter__(self):
        return iter(self.cards)


    def __repr__(self):
        print(self.cards)
        return "Deck of {} cards".format(self.count())
    
    def count(self):
        return len(self.cards)

    def _deal(self, num):
        count = self.count()
        possible_amount = min([count, num])

        if count == 0:
            raise ValueError("All cards have been dealt.")
        else:
            deal_list = self.cards[-possible_amount:]
            self.cards = self.cards[:-possible_amount]
        return deal_list

    def shuffle(self):
        if self.count() == 52:
            shuffle(self.cards)
        else:
            raise ValueError("Only full decks can be shuffled.")
    
    def deal_card(self):
        card = self._deal(1)
        return card[0]

    
    def deal_hand(self, hand_size):
        cards = self._deal(hand_size)
        return cards

# d = Deck()
# d.shuffle()
# print("Deck: ", d)
# print("deal_hand: ", d.deal_hand(5)) # n cards dealt
# print("deal_card: ", d.deal_card()) # 1 card dealt
# print(d)




class Character:
    def __init__(self, name, hp, level):
        self.name = name
        self.hp = hp
        self.level = level

class NPC(Character):
    def __init__(self, name, hp, level):
        super().__init__(name, hp, level)
    
    def speak(self):
        return "I heard there were monsters running around last night!"



    

