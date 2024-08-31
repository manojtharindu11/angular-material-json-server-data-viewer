# Angular Material JSON Server Data Viewer

This repository demonstrates how to use JSON Server to work with dummy data in an Angular application. The project focuses on adding and displaying data without the need for a traditional database or backend. Angular Material elements such as MatTable, MatDialog, and MatToolbar are utilized to create a user-friendly interface.

## Features

- **Add Data:** Allows users to add new entries to the dummy data set.
- **Display Data:** View and interact with the added data using Angular Material's MatTable.
- **No Backend Required:** Operates without a traditional backend or database, using JSON Server for data storage.

## Technology Stack

- **Frontend:** Angular
- **UI Components:** Angular Material (MatTable, MatDialog, MatToolbar)
- **Backend:** JSON Server (for dummy data management)

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Angular CLI](https://angular.io/cli) installed
- [JSON Server](https://www.npmjs.com/package/json-server) installed globally

### Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/angular-material-json-server-data-viewer.git
   cd angular-material-json-server-data-viewer
   ```

2. **Install Angular dependencies:**

   ```bash
   npm install
   ```

3. **Start the JSON Server:**

   ```bash
   json-server --watch db.json
   ```

4. **Run the Angular application:**

   ```bash
   ng serve
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:4200` to interact with the application.

## Usage

- **Adding Data:** Use the MatDialog component to input new data entries.
- **Viewing Data:** The MatTable component is used to display the data, with features such as sorting and pagination.
