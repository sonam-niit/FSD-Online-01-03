## Inheritance Points to remember

- extends is used to inherit class
- super() is used to call parent class constructor
- super.methodName() to call parent class method (when?) parent and child having same method so child overriding parent class method, so if you want both we can use super.method()
- a child class can access public and protected properties of parent class
- private members are not inherited.
- TS supports single Inheritance, once class can extends only one class.
    - you can't write child extends parent1,parent2. (not valid)

## Utility Types Keywords

- Partial<T>
- Readonly<T>
- Required<T>
- Pick<T,"id"|"name"> - select specific properties
- Omit<T,K> - removes specific Property
- Exclude<T,U> - remove specific type from union


## Practice Questions

1. Create User Type 
    - omit password 
    - print other values

2. Create Teacher and Student Classes and use Instance of  to identify Object Type with some method.

3. Write a generatic function swap<T>(a:T,b:T) that swap two values.
4. Write a generic function that returns first element of Array.
5. Create Class Employee that uses a Department enum and displays department name.
6. Create a string enum PaymentStatus with values "SUCCESS","FAILED" and "PENDING".

7. Create Person Class with name and age then create student class that adds a property course.
    - also include access modifiers like private, public and protected
    - access inside child class to understand the access.