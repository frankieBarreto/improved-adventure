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

