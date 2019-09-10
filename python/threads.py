import threading 
import time

def parent():
	print("my thread id is ", threading.get_ident())
	thread = threading.Thread(target = child, args = ())
	print("child starts now")
	thread.start()
	print("current thread count = ",threading.active_count())
	thread.join()
	time.sleep(1)
	print("current thread count = ",threading.active_count())
	
	
	
def child():
	print("my thread id is ", threading.get_ident())
	time.sleep(1)
	
	
if __name__ == "__main__":
	thread = threading.Thread(target = parent, args = ())
	thread.start()
	thread.join()