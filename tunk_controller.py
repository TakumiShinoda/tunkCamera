import webiopi
import time

webiopi.setDebug()
GPIO = webiopi.GPIO
checker = 0

forwardPinR = 27
forwardPinL = 23
backPinR = 17
backPinL = 24
firstAlertPin = 16

def setup():
    GPIO.setup(forwardPinL, GPIO.OUT)
    GPIO.setup(backPinR, GPIO.OUT)
    GPIO.setup(backPinL, GPIO.OUT)
    GPIO.setup(forwardPinR, GPIO.OUT)
    GPIO.setup(20,GPIO.OUT)
    GPIO.setup(21,GPIO.IN)
    GPIO.setup(firstAlertPin, GPIO.OUT)

def loop():
    if checker == 1:
        GPIO.output(forwardPinR, True)
        GPIO.output(forwardPinL, True)
        
    elif checker == 2:
        GPIO.output(backPinR, True)
        GPIO.output(backPinL, True)
        
    elif checker == 3:
        GPIO.output(forwardPinL, True)
        
    elif checker == 4:
        GPIO.output(forwardPinR, True)
        
    elif checker == 0:
        GPIO.output(forwardPinR, False)
        GPIO.output(backPinR, False)
        GPIO.output(forwardPinL, False)
        GPIO.output(backPinL, False)
    elif checker == 5:
        GPIO.output(16, True)
    elif checker == 6:
        GPIO.output(16, False)
        
'''    
def sonic():
     GPIO.output(20, GPIO.LOW)
     time.sleep(0.3)
     GPIO.output(20, True)
     time.sleep(0.00001)
     GPIO.output(20, False)
        
     while GPIO.input(21) == 0:
         signaloff = time.time()
         
     while GPIO.input(21) == 1:
         signalon = time.time()
         
     timepassed = signalon - signaloff
     dis = timepassed * 17000

     return dis
'''

@webiopi.macro
def controlMortor(command):
    global checker
    checker = int(command)
