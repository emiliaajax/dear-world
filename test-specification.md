# Testspecifikation

## What is tested and how?
The testing is done with manual test cases of the requirements that are implemented. The requirements that doesn't have any test cases are yet to be implemented.

## Test matrix

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

## Test cases

#### **TC1.1 Navigate to the application**

###### **Input**
- Navigate to the start page.

###### **Output**
- Menu with subject categories and an add button is shown. 
- All posts is shown.

#### **TC2.1 Navigate to create post page**

###### **Input**
- Click on the add button in the menu.

###### **Output**
- A form for creating a post is shown.

#### **TC2.2 Unsuccessful publishing with empty fields**

###### **Input**
- Click on ”Publish”.

###### **Output**
- A form for creating a post is shown.
- Title, subject and text field are marked red.

#### **TC2.3 Unsuccessful publishing with only author field filled out**

###### **Input**
- Fill in the author field with ”Jane Doe”.
- Click on ”Publish”

###### **Output**
- A form for creating a post is shown.
- Title, subject and text field are marked red.

#### **TC2.4 Unsuccessful publishing with author and subject fields filled out**

###### **Input**
- Fill in the author field with ”Jane Doe”.
- Pick the subject category ”Dreams & Goals”
- Click on ”Publish”

###### **Output**
- A form for creating a post is shown.
- Title and text field are marked red.

#### **TC2.5 Unsuccessful publishing with author, subject and title fields filled out**

###### **Input**
- Fill in the author field with ”Jane Doe”.
- Pick the subject category ”Dreams & Goals”
- Fill in the title field with ”Far far away…”
- Click on ”Publish”

###### **Output**
- A form for creating a post is shown.
- Text field is marked red.

#### **TC2.6 Unsuccessful publishing with author, subject and text fields filled out**

###### **Input**
- Fill in the author field with ”Jane Doe”.
- Pick the subject category ”Dreams & Goals”
- Fill in the text field with ”Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”
- Click on ”Publish”

###### **Output**
- A form for creating a post is shown.
- Title field is marked red.

#### **TC2.7 Unsuccessful publishing with author, title and text fields filled out**

###### **Input**
- Fill in the author field with ”Jane Doe”.
- Fill in the title field with ”Far far away…”.
- Fill in the text field with ”Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”
- Click on ”Publish”

###### **Output**
- A form for creating a post is shown.
- Subject field is marked red.

#### **TC2.8 Unsuccessful publishing with title field only containing spaces**

###### **Input**
- Fill in the author field with ”Jane Doe”.
- Pick the subject category ”Dreams & Goals”.
- Fill in the title field with three spaces.
- Fill in the text field with ”Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”
- Click on ”Publish”

###### **Output**
- A form for creating a post is shown.
- Title field is marked red.

#### **TC2.9 Unsuccessful publishing with text field containing less than 500 characters**

###### **Input**
- Fill in the author field with ”Jane Doe”
- Pick the subject category ”Dreams & Goals”
- Fill in the title field with ”Far far away…”
- Fill in the text field with ”Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
- Click on ”Publish”

###### **Output**
- A form for creating a post is shown.
- Text field is marked red.

#### **TC2.10 Successful publishing of post with all fields filled out**

###### **Input**
- Fill in the author field with ”Jane Doe”
- Fill in the subject category with ”Dreams & Goals”
- Fill in the text field with ”Far far away…”
- Fill in the text field with ”Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”
- Click on ”Publish”

###### **Output**
- The published post is shown.

#### **TC2.11 Successful showing of new post in the listing of all posts**

###### **Input**
- TC2.4
- Click on ”All” in menu

###### **Output**
- The post is shown in the list of posts.

#### **TC2.12 Successful publishing of post with subject and text fields filled out**

###### **Input**
- Pick "Dreams & Goals" in the subject category
- Fill in the text field with ”Far far away…”
- Fill in the text field with ”Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”
- Click on ”Publish”
- Click on ”All” in the menu.

###### **Output**
The published post is shown.
The author is ”Anonymous”.

#### **TC2.13 Successful publishing of post with author field containing spaces only**

###### **Input**
Fill in the author field with three spaces only.
Fill in the subject category with ”Dreams & Goals”
Fill in the text field with ”Far far away…”
Fill in the text field with ”Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”
Click on ”Publish”
Click on ”All” in the menu.

###### **Output**
The published post is shown.
The author is ”Anonymous”.

#### **TC3.1 Reading of post**

###### **Input**

- TC1.1
- Click on a post.

###### **Output**
- The full post is shown.

#### **TC4.1 Unsuccessful submitting of comment with empty fields**

###### **Input**
- TC3.1 
- Click on ”Submit comment”

###### **Output**
- Comment field shows a red error text.

#### TC4.2 **Unsuccessful submitting of comment with only name provided**

###### **Input**
- TC3.1 
- Fill in the name field with ”John Doe”
- Click on ”Submit comment”

###### **Output**
- Comment field shows a red error text.

#### **TC4.3 Unsuccessful submitting of comment with spaces only**

###### **Input**
- TC3.1 
- Fill in the name field with ”John Doe”
- Fill in the comment field with three spaces.
- Click on ”Submit comment”

###### **Output**
- Comment field shows a red error text.

#### **TC4.4 Successful submitting of comment with all fields filled out**

###### **Input**
- TC3.1 
- Fill in the name field with ”John Doe”
- Fill in the comment field with ”Great article!”
- Click on ”Submit comment”

###### **Output**
- The comment is shown above the comment form.
- The comment form fields are empty.

#### **TC4.5 Successful submitting of comment with name not provided**

###### **Input**
- TC3.1
- Fill in the comment field with ”I can relate!”
- Click on ”Submit comment”

###### **Output**
- The comment is shown above the comment form.
- The name is ”Anonymous”.
- The comment form fields are empty.

#### **TC4.6 Successful submitting of comment with emoticons in comment field**

###### **Input**
- TC3.1 
- Fill in the name field with ”John Doe”
- Fill in the comment field with ”Great article! :) (Y) I can relate! <3”
- Click on ”Submit comment”

###### **Output**
- The comment is shown above the comment form.
- The emoticons are shown as emojis.
- The comment form fields are empty.

#### **TC4.7 Successful submitting of name field containing spaces only**

###### **Input**
- TC3.1
- Fill in the name field with three empty spaces.
- Fill in the comment field with ”Great article!”
- Click on ”Submit comment”

###### **Output**
- The comment is shown above the comment form.
- The name is ”Anonymous”.
- The comment form fields are empty.

#### **TC5.1 Sort posts by subject category**

###### **Input**
- TC1.1
- Click on ”Dreams & Goals”

###### **Output**
- The posts with subject category ”Dreams & Goals” are shown.