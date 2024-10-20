# Pokémon App
A React application that fetches and displays Pokémon data using the [PokéAPI](https://pokeapi.co/). This project is built with Vite and showcases a clean and responsive design, allowing users to explore Pokémon details seamlessly.

## Features
- Browse a list of Pokémon
- View detailed information for each Pokémon
- Responsive design for mobile and desktop

## Technologies Used
- **Frontend**: React, Vite, Tailwind CSS
- **API**: [PokéAPI](https://pokeapi.co/)
- **Routing**: React Router

## Installation

To get started with this project, clone the repository and install the dependencies:
```bash
git clone https://github.com/yourusername/pokemon-app.git
cd pokemon-app
npm install
```

## Usage
Once the installation is complete, you can run the application locally:
```bash
npm run dev
```
Navigate to http://localhost:3000 in your browser to view the app.

## Project Structure
```bash    ├── public
           │   ├── vite.svg
           ├── src
           ├── ├── assets
           │   ├── components
           │   │   ├── CardComponent.jsx
           │   │   ├── Home.jsx
           │   │   ├── Navbar.jsx
           │   │   └── PokemonDetails.jsx
           │   ├──styles
           │   │   ├── CardComponent.css
           │   │   ├── Home.css
           │   │   └── Navbar.css           
           │   ├── index.css
           │   ├── index.jsx
           │   └── App.jsx
           ├── .gitignore
           ├── index.html
           ├── License
           ├── package-lock.json           
           ├── package.json
           ├── postcss.config.js
           ├── README.md
           └── tailwind.config.css

```

## Future Improvements
- Host the application globally for easier access.
- Add features such as search functionality and Pokémon filtering.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License
This project is licensed under the [MIT Licence](License) - see the LICENSE file for details.