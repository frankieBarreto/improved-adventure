file = open("story.txt") # opens file
print(file)

story = file.read()  # prints the file
print(story)



seek = file.seek(1) # seeks lines
print(seek)


print(file.readline(4)) # 'Once' first 4 lines
file.close()
print(file.closed)# closes the file
print(file.read())# return bool depending if the file is closed or not 