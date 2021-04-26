# To write to a file, first open it in "w" mode
with open("haiku.txt", "w") as file:
    file.write("Here's one more haiku\n")
    file.write("What about the older one?\n")
    file.write("Let's go check it out")

# You can also write to files that don't yet exist
with open("lol.txt", "w") as file:
    file.write("haha" * 10000)


# def copy(file1, new_file):
#     file1 = open(file1)
#     with open(new_file, "w") as file:
#         file.write(file1.read())

# def copy_and_reverse(file_name, new_file_name):
#     with open(file_name) as file:
#         text = file.read()
 
#     with open(new_file_name, "w") as new_file:
#         new_file.write(text[::-1])

# def statistics(file_name):
#     with open(file_name) as file:
#         lines = file.readlines()
 
#     return { "lines": len(lines),
#              "words": sum(len(line.split(" ")) for line in lines),
#    
#           "characters": sum(len(line) for line in lines) }

'''
statistics('story.txt') 
# {'lines': 172, 'words': 2145, 'characters': 11227}
'''


# def find_and_replace(file_name, old_word, new_word):
#     with open(file_name, "r+") as file:
#         text = file.read()
#         new_text = text.replace(old_word, new_word)
#         file.seek(0)
#         file.write(new_text)
