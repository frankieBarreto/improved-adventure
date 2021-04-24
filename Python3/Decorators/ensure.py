from functools import wraps

def ensure_no_kwargs(fn):
	@wraps(fn)
	def wrapper(*args, **kwargs):
		if kwargs:
			raise ValueError("No kwargs allowed! sorry :(")
		return fn(*args, **kwargs)
	return wrapper

@ensure_no_kwargs
def greet(name):
	print(f"hi there {name}")

greet(name="Tony")





'''
@show_args
def do_nothing(*args, **kwargs):
    pass

do_nothing(1, 2, 3,a="hi",b="bye")

# Should print (on two lines):
# Here are the args: (1, 2, 3)
# Here are the kwargs: {"a": "hi", "b": "bye"}
'''

from functools import wraps


def show_args(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print("Here are the args:", args)
        print("Here are the kwargs:", kwargs)
        fn(*args, **kwargs)
    return wrapper
	
   
    


