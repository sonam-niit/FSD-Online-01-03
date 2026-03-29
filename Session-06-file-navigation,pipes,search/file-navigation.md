# Linux Commands for File Navigation

1. touch command is used to create empty file
    - touch file1.txt
    - ls (verify file created or not)

2. rename file
    - mv file1.txt sonam.txt
    - ls (verify)

3. remove file:
    - rm sonam.txt
    - ls (verify)

4. remove empty folder:
    - mkdir sonamsoni (folder created)
    - ls
    - rmdir sonamsoni (folder deleted)
    - ls 

5. delete folder which contains file:
    - mkdir data
    - touch data/file1.txt (create file under data folder)
    - ls data/ (check files under data folder)
    - rmdir data (will give error)
    - rm -r data (-r for recursive delete data from folder and then delete folder)
    - ls (verify)

6. read file
    - echo "this is me" >file.txt (file create)
    - cat file.txt
    - if you are using very big files then we can read it using below commands
    - less file.txt (you can go up down using arrows and exit using q)
    - more file.txt (works likw pager read file page by page or line by line)

7. edit file:
    - use nano editor for file editing
    - nano file.txt
    - it will open editor (here mouse will not work you can use key arrows to go up down and edit the contect )
    - once the content written ctrl+o then press enter ctrl+x

8. move files:
    - mkdir folder1 folder2 (creating 2 dir at a time)
    - ls (see if you have any file we can move to some folder)
    - mv file.txt folder2/
    - ls folder2/ (you can see file moved)

9. move multiple files
    - touch alex.txt parth.txt sonam.txt
    - mv *.txt folder2/ (all files .txt files moved)

10. Copy files
    - create file 
    - echo "My name is Alex" > alex.txt
    - touch catty.txt
    - cp alex.txt catty.txt (directly override data)
    - cp alex.txt catty.txt -i (ask you do you want to override)
    - cp alex.txt catty.txt -iv (ask and also show you verbose output)

11. Hard Link
    - mkdir developers
    - cd developers
    - mkdir folder1
    - echo "My name is alex" > folder1/file1.txt
    - i wnat to access this file using link
    - ln folder1/file.txt ref (ref is the name of link)
    - access file: cat ref (you can see data)
    - let's delete original file
    - rm -r folder1/
    - cat ref (still you can see data)
    - we cannot create hardlink for directory

12. Soft Link
    - mkdir folder2
    - echo "another file" > folder2/file.txt
    - ln -s folder2/file.txt myref (-s for soft link)
    - ls (you can see diffrent color for this link)
    - cat myref (work)
    - delete: rm -r folder2/
    - ls (myref in red color its broken link)
    - cat myref (you can see error)

