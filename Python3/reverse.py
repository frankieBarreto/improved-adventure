
rev_str = reversed("hello world")
print(rev_str) # reversed object 
rev_str = list(rev_str) # turned into a list
print(rev_str)
rev_str = "".join(rev_str) # join it to a string
print(rev_str) # final string revered or just use slice


for n in reversed(range(0, 11)):
    if n == 0: print('blast off!')
    else: 
        print(n)




