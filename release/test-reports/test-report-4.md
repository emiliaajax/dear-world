# Test report 4

### Date

31/10-2022

### Version

Server: 1.0.0
<br />
Client: 1.0.0

### Test environment

The deployed application: https://dearworldapp.netlify.com

### Test matrix

| Test | UC1 | UC2 | UC3 | UC4 | UC5 |
|------|-----|-----|-----|-----|------|
| TC1.1 | 1/:white_check_mark: | 0 | 0 | 0 | 0 |
| TC2.1 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.2 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.3 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.4 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.5 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.6 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.7 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.8 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.9 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.10 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.11 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.12 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.13 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC3.1 | 0 | 0 | 1/:white_check_mark: | 0 | 0 |
| TC4.1 | 0 | 0 | 0 | 1/:white_check_mark: | 0 |
| TC4.2 | 0 | 0 | 0 | 1/:white_check_mark: | 0 |
| TC4.3 | 0 | 0 | 0 | 1/:white_check_mark: | 0 |
| TC4.4 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.5 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.6 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.7 | 0 | 0 | 0 | 1/:x: | 0 |
| TC5.1 | 0 | 0 | 0 | 0 | 1/:white_check_mark: |
| COVERAGE & SUCCESS | 1/:white_check_mark: | 13/:white_check_mark: | 1/:white_check_mark: | 3/:white_check_mark: 4/:x: | 1/:white_check_mark: |

### Improvement points
**TC1.1** The posts are showing when navigating to the page, but it takes a few seconds before the posts are loaded. Sometimes it can take up to 10 seconds. The application is deployed using Heroku with MongoDB Atlas as database. This issue has been heard of before regarding MongoDB Atlas.

**TC4.4, TC4.5, TC4.6, TC4.7** - All is working as expected except for having to reload the page to see the submitted comment.

### Analysis
A state handler needs to be introduced to implement rerendering of component when submitting a comment. Trouble shooting of MongoDB Atlas needs to be done or another database provider should be discussed.
