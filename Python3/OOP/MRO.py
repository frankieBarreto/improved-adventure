class Mother:
    def __init__(self):
        self.eye_color = "brown"
        self.hair_color = "dark_brown"
        self.hair_type = "curly"
    
    def __repr__(self):

        return f"Eye Color: {self.eye_color}, Hair Color: {self.hair_color}, Hair Type: {self.hair_type}"

class Father:
    def __init__(self):
        self.eye_color = "blue"
        self.hair_color = "blond"
        self.hair_type = "straight"

    def __repr__(self):
        return f"Eye Color: {self.eye_color}, Hair Color: {self.hair_color}, Hair Type: {self.hair_type}"
        
        
class Child(Mother, Father):
    pass

M = Mother()
F = Father()
C = Child()

print("Mother", M)
print("Father", F)
print("Child", C)