/* Base Styles */
body {
    overflow-x: hidden;
    overflow-y: auto;
    font-family: 'Roboto', sans-serif;
    background-color: #000000;
    color: #ffffff;
    margin: 0;
}

/* Hero Section */
.hero {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.slides {
    display: flex;
    width: 300vw;
    transition: transform 0.5s ease-in-out;
}

.slide {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    flex-shrink: 0;
}

/* Floating Elements */
.floating-text {
    position: absolute;
    top: -50px;
    left: 20px;
    width: 260px;
    font-size: 16px;
    color: white;
    background: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 5px;
    opacity: 0;
    transition: top 1s ease-in-out, opacity 1s ease-in-out;
    z-index: 3;
    line-height: 1.4em;
}

.slide.active .floating-text {
    top: 20px;
    opacity: 1;
}

.floating-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    opacity: 0;
    transition: all 0.3s ease;
}

.slide.active .floating-button {
    opacity: 1;
    bottom: 20px;
}

/* Navigation Controls */
.dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 5;
}

.dot {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
}

.dot.active {
    background: #007bff;
}

.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.5);
    color: black;
    padding: 10px;
    cursor: pointer;
    border: none;
    font-size: 24px;
    z-index: 10;
}

.prev { left: 10px; }
.next { right: 10px; }

/* Blog Styles */
.container {
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.post {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
}
