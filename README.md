# Codefolio — Explore the person behind GitHub

Welcome to **Codefolio**, a React-based web app that lets you **search GitHub users**, view their **profile details**, and browse through their **public repositories** 

![Home page img](https://github.com/Sufyanmd/Codefolio_project/blob/main/src/assets/Images/CodefolioImg/HomeScreen.png?raw=true)

## Website URL

## Problem Statement
GitHub is great for hosting code, but not for visually exploring developer profiles.
It’s hard to quickly search, view, or showcase someone’s GitHub in a clean, readable way.

Codefolio solves this by turning GitHub data into a simple, searchable, portfolio-like interface, perfect for recruiters, learners, and developers.

![Ideation page img]()

##  Features

- **Search GitHub users** by username
- View detailed user profile (profile pic, location, followers, etc.)
- See a paginated list of their repositories
- Each repo shows: name, description, stars, language, and GitHub link
- Handles empty states, loading, and 404 errors
- Almost Responsive and elegant UI built with Tailwind CSS

![userinfo page img]()
![Reps page img]()



## Project Structure

![project structure img]()

### Project Setup

Follow these steps to run the app locally:
```bash
#1. Clone the repo

git clone https://github.com/your-username/codefolio.git
cd codefolio

#2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

Now open your browser and go to:
==> http://localhost:5173

```
##### NOTE: GitHub's API allows only 60 unauthenticated requests per hour. To increase the limit to 5,000 requests per hour, you need to authenticate using a personal access token and include it in your API requests.

##### Security Note: We strongly recommend not pushing your .env file or token to GitHub. Your GitHub token = your identity. Always add .env to .gitignore.


## Extra Features Implemented

* Search bar with back button
* Pagination for repositories with Prev and Next buttons
* API rate limit detection with GitHub token fallback
* Error handling for 404s and empty usernames
* almost responsive UI (mobile => desktop)
* Loading spinner for async operations
* line-clamp to maintain consistent repo card height
* Keyboard access: Press Enter to search



## Built With
*  React
*  Tailwind CSS
*  GitHub REST API
*  Vite for blazing fast dev environment

## Video Demo
![demo video]()
