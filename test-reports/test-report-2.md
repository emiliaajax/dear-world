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

### Analysis
To create a new post works perfectly when all of the fields are filled out (as well as when the author field is left empty or with spaces only), but the application does not work as expected in cases where fields, that are not supposed to be left empty, are left empty anyway. This goes for creating comments as well. Error handling in the UI should be implemented.<br /><br /> The issue with having to reload the page, after submitting a comment, to get the comment to show up requires some form of state handler. 