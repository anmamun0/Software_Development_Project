from datetime import *

birth = datetime.strptime("15-11-2004","%d-%m-%Y")
now = datetime.now()

gap = now - birth

mon = gap.days/30
yr = mon/12

print(gap) 
print(mon)
print(yr)

print(birth)
print(now)