# Test report 2

### Date

24/10-2022

### Version

Server: 1.0.0
Client: 1.0.0

### Test environment

The application was tested in developement environment.

### Test matrix

| Test | UC2 | UC4 |
|------|-----|-----|
| TC2.1 | 1/:white_check_mark: | 0 |
| TC2.2 | 1/:white_check_mark: | 0 |
| TC2.3 | 1/:white_check_mark: | 0 |
| TC2.4 | 1/:white_check_mark: | 0 |
| TC2.5 | 1/:x: | 0 |
| TC2.6 | 1/:x: | 0 |
| TC2.7 | 1/:x: | 0 |
| TC2.8 | 1/:x: | 0 |
| TC2.9 | 1/:x: | 0 |
| TC2.10 | 1/:white_check_mark: | 0 |
| TC2.11 | 1/:white_check_mark: | 0 |
| TC2.12 | 1/:white_check_mark: | 0 |
| TC2.13 | 1/:white_check_mark: | 0 |
| TC4.1 | 0 | 1/:white_check_mark: |
| TC4.2 | 0 | 1/:white_check_mark: |
| TC4.3 | 0 | 1/:white_check_mark: |
| TC4.4 | 0 | 1/:x: |
| TC4.5 | 0 | 1/:x: |
| TC4.6 | 0 | 1/:x: |
| TC4.7 | 0 | 1/:x: |
| COVERAGE & SUCCESS | 8/:white_check_mark: 5/:x: | 3/:white_check_mark: 4/:x: |

### Improvement points

2.5, 2.9 - For some reason, the subject field is marked red which is not expected as a category has been selected.

2.6, 2.8 - All fields are marked red even though only title field are supposed to be red marked.

2.7 - Text field is marked red even though it's filled out with a text with more than 500 characters.

4.4, 4.5, 4.6, 4.7 - The issue with having to reload the page, after submitting a comment, still remains. Everything else works as expected and the issue with name being shown as empty and not 'Anonymous' when not filling the name field out has been fixed.

### Analysis
The error handling is only working for the create post form when all the fields are empty or when only the author field is filled out. <br /><br /> The issue with having to reload the page, after submitting a comment, still remains.