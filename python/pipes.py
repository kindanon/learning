import pipes

tpipe = pipes.Template()
fpipe = tpipe.open('pipe', w)

print('type "quit" to quit')
while(True):
	print("Input some text : ")
	user_string = input()
	fpipe.write(user_string)
	