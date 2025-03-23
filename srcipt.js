/* Global Styles */
body {
    background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
    font-family: 'Arial', sans-serif;
    color: white;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Container */
.container {
    width: 90%;
    max-width: 800px;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    text-align: center;
}

/* Chart */
canvas {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 10px;
}

/* Controls */
.controls {
    margin-top: 20px;
}

select, button {
    font-size: 16px;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

select {
    background: white;
    color: black;
}

button {
    background: #ff9800;
    color: white;
    transition: background 0.3s ease;
}

button:hover {
    background: #e68900;
}

