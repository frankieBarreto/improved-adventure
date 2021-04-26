file = open("story.txt") # opens file
print(file)

story = file.read()  # reads the file into memory as a string
story = file.readlines()  # reads the fil into memory as a list of strings
print(story)



seek = file.seek(1) # seeks lines moves cursor anywhere in an open file
print(seek)


print(file.readline(4)) # 'Once' first 4 lines
file.close()
print(file.closed)# closes the file
print(file.read())# return bool depending if the file is closed or not 