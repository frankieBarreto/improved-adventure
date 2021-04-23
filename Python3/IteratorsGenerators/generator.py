def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

counter = count_up_to(4)
print(list(counter))
# help(counter)


def get_multiples(n=1, count=10):
    for num in range(n, count+1):
        yield num

l = get_multiples()
print(list(l))