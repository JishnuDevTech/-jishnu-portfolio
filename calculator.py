import tkinter as tk
import tkinter.messagebox
from tkinter.constants import SUNKEN

# Create the main window
window = tk.Tk()
window.title("Calculator by Jishnu")

# Main Frame
frame = tk.Frame(master=window, bg="skyblue", padx=10)
frame.pack()

# Entry Box (Wider & Bigger Font)
entry = tk.Entry(master=frame, relief=SUNKEN, borderwidth=3, width=40, font=("Arial", 18))
entry.grid(row=0, column=0, columnspan=3, ipady=5, pady=5)

# Function to insert numbers & operators
def myclick(number):
    entry.insert(tk.END, number)

# Function to evaluate expression
def equal():
    try:
        y = str(eval(entry.get()))
        entry.delete(0, tk.END)
        entry.insert(0, y)
    except:
        tkinter.messagebox.showinfo("Error", "Syntax Error")

# Function to clear entry box
def clear():
    entry.delete(0, tk.END)

# Creating Buttons
buttons = [
    ('1', 1, 0), ('2', 1, 1), ('3', 1, 2),
    ('4', 2, 0), ('5', 2, 1), ('6', 2, 2),
    ('7', 3, 0), ('8', 3, 1), ('9', 3, 2),
    ('0', 4, 1), ('+', 4, 0), ('-', 4, 2),
    ('*', 5, 0), ('/', 5, 1)
]

for (text, row, col) in buttons:
    button = tk.Button(master=frame, text=text, padx=30, pady=20, width=5, font=("Arial", 14),
                       command=lambda t=text: myclick(t))
    button.grid(row=row, column=col, pady=2)

# Clear & Equal Buttons
button_clear = tk.Button(master=frame, text="Clear", padx=20, pady=10, width=12, font=("Arial", 14), command=clear)
button_clear.grid(row=6, column=0, columnspan=2, pady=2)

button_equal = tk.Button(master=frame, text="=", padx=20, pady=10, width=5, font=("Arial", 14), command=equal)
button_equal.grid(row=6, column=2, pady=2)

# Run the app
window.mainloop()
