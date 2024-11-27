const express = require('express');
const path = require('path');
const routes = require('./routes'); // Import the route registry
const { url } = require('./helpers/urlHelper'); // Import the URL helper

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the directory where the template files are located
app.set('views', path.join(__dirname, '../views'));

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Make the URL helper and routes available in all EJS templates
app.locals.url = url;
app.locals.routes = routes;

// Routes
app.get(routes.home, (req, res) => {
    const data = {
        title: 'Home Page',
        message: 'Welcome to the Home Page!'
    };
    res.render('index', data);
});

app.get(routes.about, (req, res) => {
    const data = {
        title: 'About Us',
        message: 'Learn more About Us.'
    };
    res.render('about', data);
});

app.get(routes.aiInsights, (req, res) => {
    const data = {
        title: 'AI Insights',
        message: 'Explore insights into Artificial Intelligence.'
    };
    res.render('ai-insights', data);
});

app.get(routes.ufoStories, (req, res) => {
    const data = {
        title: 'UFO Stories',
        message: 'Discover fascinating UFO stories.'
    };
    res.render('ufo-stories', data);
});

app.get(routes.news, (req, res) => {
    const data = {
        title: 'News',
        message: 'Catch up on the latest news.'
    };
    res.render('news', data);
});

app.get(routes.contact, (req, res) => {
    const data = {
        title: 'Contact',
        message: 'Get in touch with us.'
    };
    res.render('contact', data);
});

// Handle 404 - Page Not Found
app.use((req, res) => {
    res.status(404).render('404', { title: '404: Page Not Found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
