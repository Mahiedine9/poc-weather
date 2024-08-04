# Weather App

This project is a weather application built with React and TypeScript that displays the weather based on the user's geographic location using the OpenWeatherMap API. It includes caching to limit the number of API requests and handles device location changes. The application is responsive and works on both PC and smartphones.

## Developer 

 - Mahiedine Ferdjoukh

## Features

- Displays current weather based on user's geographic location.
- Caching of weather data to limit API requests.
- Responsive design for both PC and smartphones.
- Handles device location changes.
- Displays day/night specific styles based on the time of day.
- **Search functionality** to view weather for any city.

## Stack

- React
- TypeScript
- Axios for API requests
- Bootstrap for responsive design

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/poc-weather.git
    ```

2. Navigate to the project directory:
    ```bash
    cd poc-weather
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

    The application will open in your default web browser at [http://localhost:3000](http://localhost:3000).

## Usage

- The application will prompt the user for location access.
- Based on the user's geographic location, it will fetch and display the current weather.
- Weather data is cached to limit the number of API requests.
- The UI will adjust to different screen sizes, providing a good experience on both PCs and smartphones.

## Project Structure

- `src/view/Weather.tsx`: Main component for fetching and displaying weather data.
- `src/view/WeatherCard.tsx`: Component for displaying weather details in a card format.
- `src/view/Header.tsx`: Component for the application header.
- `src/view/Footer.tsx`: Component for the application footer.
- `src/App.tsx`: Main application component that sets up routes and layout.
- `src/index.tsx`: Entry point for the React application.
- `public`: Public directory containing the HTML template.

## API

This project uses the OpenWeatherMap API to fetch weather data.

## Configuration

Make sure to replace the API key in `Weather.tsx` with your own OpenWeatherMap API key:
```typescript
const API_KEY = "your-api-key-here";


