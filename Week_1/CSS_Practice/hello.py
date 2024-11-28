from math import sqrt , pow , pi
def quadratic():
    a , b , c = map(int,input("Enter 3 number with space (Like: 3 6 7): ").split())
    result = "Your Result is: "
    d = pow(b,2)-4*a*c

    if d>=0:
        ans = (-b + sqrt(d))/2*a 
        result += str(ans)
    else:
        result +="Complex Number..!"
    print(result)
 
def Circle_Area():
    r = int(input("Enter radius of circule: "))

    result = pi * pow(r,2)
    print(f"Your Result Circle : {result}")

def list_to_tuple():
    lst = [1,2,3,4,5]
    lst = tuple(lst)
    # tup = (*lst,)
    print(type(lst))
  
quadratic()
Circle_Area()
list_to_tuple()