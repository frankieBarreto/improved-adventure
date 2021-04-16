# nested list comprehention

nums = [[num for num in range(3)] for list in range(3)]
print(nums) #[[0, 1, 2], [0, 1, 2], [0, 1, 2]]