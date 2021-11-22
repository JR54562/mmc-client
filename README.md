# My Movies Collection

![mcc_promo](https://user-images.githubusercontent.com/87659547/142914492-193a9bf4-d39b-4179-a977-c6bf959283ce.png)


Link to Application - http://mmc-app.surge.sh
<br>

# Technologies used:<br>
JavaScript, React js, CSS, Axios, PostgreSQL, Bootstrap v5.0

# Approach
I wanted to expand on the idea of collecting 'things', after doing a music database app previously. I wanted to be able to use a public api to reference movie titles, return the included information and share that with the user. Then, that particular movie could be saved to the user's personal collection. 

The collection of a user can be viewed after logging into the associated account. 

![MMC_ERD](https://user-images.githubusercontent.com/87659547/142916280-338fa563-bb4a-4c12-8bd2-2657d69f5020.png)

## User Stories

- As a user, I want to be able to create a personal account with password.
- I want to be able to update the password.
- I want to search for movies by title.
- I want to review the results.
- I want to add a result to my personal collection. 
- I want to view collection in a meaningful way. 

# Main Features
- Main selection screen
- Login page
- Signup page
- Profile page
- Movie title search page
- Movie detail page
- Movie collection page

# Known Issues
- On initial page load, a double click is required to show the movie search results page.
- If state of a user is lost at some point, the user must return Home and login again. 


# Acknowledgements

- The movie lookup api provided at http://www.omdbapi.com/

- Color theme 'Yeti' by Bootswatch.com (https://bootswatch.com/5/yeti/bootstrap.css)
