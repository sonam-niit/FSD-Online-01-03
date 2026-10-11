# backup

- open cmd as administrator
- move to this location: cd C:\Program Files\MySQL\MySQL Server 8.0\bin

```bash
mysqldump -u root -p movie_review_management > movie_backup.sql
```

- enter your mysql password and your backup will be stored at bin folder.

# Restore

```sql
--  inside sql create new Database
CREATE DATABASE movie_review_restore;
```
- comeout side from sql command line
- now again open the above location mentioned for backup
- run below command
```bash
mysql -u root -p movie_review_restore < movie_backup.sql
```

### Verify

- connect to database

```sql
use movie_review_restore
show tables;
select * from movies;
```

## How to do it from WorkBench

- go to workbench
- server -> Data Export
- select Database -> export
- same for Restore use Data Import.
- select SQL file and import