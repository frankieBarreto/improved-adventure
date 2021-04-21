from re import S
import pyfigletgit
from termcolor import colored

msg = input("What would you like to print? ")
color_msg = input("What color? ")
def fig_print(message, color):
    valid_colors = ('red', ' blue', "yellow", 'blue', 'magenta', 'cyan')
    if(color not in valid_colors): color = 'cyan'
    string_format = pyfiglet.figlet_format(message, font='slant')
    text = colored(string_format, color=color)
    print(text)

fig_print(msg, color_msg)
