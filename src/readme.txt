# Feed Component

The `Feed` component is a React component that displays a list of categories and allows users to view jokes associated with each category. It fetches category names from an API and retrieves jokes from another API when a category is selected.

## How to Use

1. Install the dependencies:

2. Start the development server:

3. Open the application in your browser:

## Functionality

The `Feed` component provides the following functionality:

### Fetching Category Names

The component fetches category names from the API `https://api.chucknorris.io/jokes/categories` using the `fetch` function. The names are displayed as cards in a grid layout.

### Viewing Jokes

When a category card is clicked, the component makes a request to the API `https://api.chucknorris.io/jokes/random?category=<category-name>` to retrieve a random joke associated with the selected category. The joke is displayed in a pop-up message.

### Loading Indicator

While fetching a joke or loading the next joke, a loading indicator is displayed to indicate the process. The loading indicator is implemented using the `loading` state and a CSS animation.

### Fetching Next Joke

When the "Next Joke" button is clicked in the pop-up message, the component fetches a new random joke from the API for the currently selected category.

### Closing Pop-up Message

The pop-up message can be closed by clicking the "Close" button. Upon closing, the pop-up message and selected category are cleared.


- `Feed.js`: Contains the implementation of the `Feed` component.
- `feed.css`: Contains the CSS styles for the `Feed` component.
- `App.js`: Renders the `Feed` component.
- `index.js`: Entry point of the application.


