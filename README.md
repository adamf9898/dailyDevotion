# Daily Devotion Web App

A simple, elegant web application for daily devotional readings. This app provides daily spiritual content including scripture verses, devotional readings, and prayers.

## Features

- **Daily Devotions**: A collection of devotional readings that cycle through the year
- **Scripture Verses**: Each devotion includes a highlighted Bible verse
- **Prayers**: Guided prayers to help focus your spiritual practice
- **Navigation**: Easy navigation between past and future devotions
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Keyboard Navigation**: Use arrow keys (←/→) to navigate between devotions, Home key for today's devotion
- **Print-Friendly**: Optimized for printing individual devotions

## Getting Started

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/adamf9898/dailyDevotion.git
   cd dailyDevotion
   ```

2. Open `index.html` in your web browser, or serve using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Visit `http://localhost:8000` in your browser

## Project Structure

```
dailyDevotion/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Application styles
├── js/
│   ├── app.js          # Main application logic
│   └── devotions.js    # Devotional content data
└── README.md           # This file
```

## Customization

### Adding New Devotions

Edit `js/devotions.js` to add new devotional content. Each devotion should follow this structure:

```javascript
{
    id: 13,
    title: "Your Devotion Title",
    verse: "Scripture verse text here",
    reference: "Book Chapter:Verse",
    content: `<p>Your devotional content here...</p>`,
    prayer: "Prayer text here..."
}
```

### Styling

Modify `css/styles.css` to customize the appearance. The app uses CSS custom properties (variables) for easy theming:

```css
:root {
    --primary-color: #4a6fa5;
    --secondary-color: #6b8cae;
    --accent-color: #daa520;
    --background-color: #faf8f5;
    --text-color: #333;
}
```

## Browser Support

This application works in all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and educational use.
