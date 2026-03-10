# 8-Puzzle

### Overview

8-Puzzle is a high-performance, browser-based implementation of the classic sliding puzzle game. It features a retro-cyberpunk aesthetic combined with an optimized A* search algorithm to provide automated solving capabilities. The application is designed to be fully responsive, ensuring a consistent experience across desktop and mobile devices.

### Features

+ __Interactive Game Board:__ Fluid tile movement via click, touch, or keyboard arrow keys.

+ __A* Solver Engine:__ An automated solver utilizing the A* search algorithm with Manhattan +distance heuristics to find the most efficient path to the goal state.

+ __Dynamic Feedback:__ Real-time tracking of moves and elapsed time.

+ __Solvability Validation:__ Shuffling logic ensures that every generated puzzle state is mathematically solvable by checking inversion parity.

+ __Cyberpunk Aesthetic:__ A high-contrast UI built with custom CSS variables and pixel-art inspired typography.

### Technical Stack

+ __Frontend:__ HTML5, JavaScript (ES6+).

+ __Styling:__ Tailwind CSS for utility-first layout management and custom CSS for thematic animations.

+ __Algorithm:__ A* Search Algorithm for pathfinding and state-space search.

+ __Deployment:__ Optimized for static hosting environments such as Vercel.

### Implementation Details

The core logic resides in a single-file architecture to minimize latency and simplify deployment. The solver manages state-space complexity by utilizing a closed set to track visited configurations, preventing infinite loops and optimizing memory usage during deep search operations.

### Deployment

This project is configured for seamless deployment on Vercel. It utilizes clean URLs and standard routing to serve the application as a highly available static site.
