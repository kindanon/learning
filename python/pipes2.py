import pipes

tpipe = pipes.Template()
fpipe = tpipe.open('pipe', r)


while(True):
	
	user_string = fpipe.read()
	print(user_string)
	