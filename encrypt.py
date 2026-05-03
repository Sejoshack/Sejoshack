import string
import random

chars = " " + string.punctuation + string.digits + string.ascii_letters 
chars= list(chars)
key = chars.copy()

random.shuffle(key)


print(f"chars:{chars}")
print(f"key:  {key}")

#ENCRYPT

text=input("Enter a message to encrypt:")
cipher_text=""

for letter in text:
    index = chars.index(letter)
    cipher_text +=key[index]
    
print(f"original text:  {text}")
print(f"Encrypted text:  {cipher_text}")

#DECRYPT
cipher_text=input("Enter a message to decrypt:")
text=""

for letter in cipher_text:
    index = key.index(letter)
    text +=chars[index]
    
print(f"Encrypted text:  {cipher_text}")
print(f"original text:  {text}")