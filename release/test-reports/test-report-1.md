# Test report 1

### Date

23/10-2022

### Version

Server: 1.0.0
<br />
Client: 1.0.0

### Test environment

The application was tested in developement environment.

### Test matrix

| Test | UC1 | UC2 | UC3 | UC4 | UC5 |
|------|-----|-----|-----|-----|------|
| TC1.1 | 1/:white_check_mark: | 0 | 0 | 0 | 0 |
| TC2.1 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.2 | 0 | 1/:x: | 0 | 0 | 0 |
| TC2.3 | 0 | 1/:x: | 0 | 0 | 0 |
| TC2.4 | 0 | 1/:x: | 0 | 0 | 0 |
| TC2.5 | 0 | 1/:x: | 0 | 0 | 0 |
| TC2.6 | 0 | 1/:x: | 0 | 0 | 0 |
| TC2.7 | 0 | 1/:x: | 0 | 0 | 0 |
| TC2.8 | 0 | 1/:x: | 0 | 0 | 0 |
| TC2.9 | 0 | 1/:x: | 0 | 0 | 0 |
| TC2.10 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.11 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.12 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC2.13 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC3.1 | 0 | 0 | 1/:white_check_mark: | 0 | 0 |
| TC4.1 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.2 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.3 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.4 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.5 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.6 | 0 | 0 | 0 | 1/:x: | 0 |
| TC4.7 | 0 | 0 | 0 | 1/:x: | 0 |
| TC5.1 | 0 | 0 | 0 | 0 | 1/:white_check_mark: |
| COVERAGE & SUCCESS | 1/:white_check_mark: | 5/:white_check_mark: 8/:x: | 1/:white_check_mark: | 7/:x: | 1/:white_check_mark: |

### Improvement points
**TC2.2, TC2.3, TC2.4, TC2.5, TC2.9**: The app crashes completely when publishing. The server throws a 500 error and needs to be restarted. The post has not been created. The publish button was not disabled as expected in the UI. The cause of the crash is most likely that the minimum length for the post text, that's set in the model in the backend, is 500 characters. A limit also needs to be implemented in the UI so that the publish button is disabled for all posts under 500 characters.

**TC2.6**: The post was created despite of the empty title field. The publish button was not disabled in the UI.

**TC2.7**: The post was created even though the category was left empty. The publish button was not disabled.

**TC2.8**: The post was created even though the title field only contained spaces. The publish button was not disabled.

**TC4.1, TC4.2, TC4.3**: The comment is submitted despite of having empty comment field. The submit button in the UI is not disabled as it's expected to be.

**TC4.4**: The comment is submitted as expected, but the page must be reload to see the comment. It doesn't show up directly after pressing submit as wanted.

**TC4.5, TC4.7**: The comment is submitted, however, the name doesn't say "Anonymous". The name shows as empty. Same problem as TC4.4 with having to reload the page to see the comment.

**TC4.6**: The comment is submitted and the emoticons has been replaced with emojis, but as above, the page needs to be reloaded to see it.

### Analysis
To create a new post works perfectly when all of the fields are filled out (as well as when the author field is left empty or with spaces only), but the application does not work as expected in cases where fields, that are not supposed to be left empty, are left empty anyway. This goes for creating comments as well. Error handling in the UI should be implemented.<br /><br /> The issue with having to reload the page, after submitting a comment, to get the comment to show up requires some form of state handler. 
