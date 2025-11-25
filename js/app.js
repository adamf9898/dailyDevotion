/**
 * Daily Devotion Application
 * Main application logic for displaying and navigating devotions
 */
(function() {
    'use strict';

    // DOM Elements
    const currentDateEl = document.getElementById('current-date');
    const devotionTitleEl = document.getElementById('devotion-title');
    const verseTextEl = document.getElementById('verse-text');
    const verseReferenceEl = document.getElementById('verse-reference');
    const devotionContentEl = document.getElementById('devotion-content');
    const prayerTextEl = document.getElementById('prayer-text');
    const prevBtn = document.getElementById('prev-btn');
    const todayBtn = document.getElementById('today-btn');
    const nextBtn = document.getElementById('next-btn');

    // State
    let currentDevotionIndex = 0;

    /**
     * Format date for display
     * @param {Date} date - Date to format
     * @returns {string} - Formatted date string
     */
    function formatDate(date) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    }

    /**
     * Get today's devotion index based on the day of the year
     * @returns {number} - Index of today's devotion
     */
    function getTodayDevotionIndex() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        
        // Cycle through devotions based on day of year
        return dayOfYear % devotions.length;
    }

    /**
     * Get the date for a specific devotion index
     * @param {number} index - Devotion index
     * @returns {Date} - Date for the devotion
     */
    function getDateForIndex(index) {
        const today = new Date();
        const todayIndex = getTodayDevotionIndex();
        const diff = index - todayIndex;
        
        const date = new Date(today);
        date.setDate(date.getDate() + diff);
        
        return date;
    }

    /**
     * Display a devotion by index
     * @param {number} index - Index of the devotion to display
     */
    function displayDevotion(index) {
        // Ensure index is within bounds (cycling)
        if (index < 0) {
            index = devotions.length - 1;
        } else if (index >= devotions.length) {
            index = 0;
        }

        currentDevotionIndex = index;
        const devotion = devotions[index];
        const date = getDateForIndex(index);

        // Update DOM with animation
        const devotionEl = document.getElementById('devotion');
        devotionEl.style.animation = 'none';
        devotionEl.offsetHeight; // Trigger reflow
        devotionEl.style.animation = null;

        // Update content
        currentDateEl.textContent = formatDate(date);
        devotionTitleEl.textContent = devotion.title;
        verseTextEl.textContent = devotion.verse;
        verseReferenceEl.textContent = '— ' + devotion.reference;
        devotionContentEl.innerHTML = devotion.content;
        prayerTextEl.textContent = devotion.prayer;

        // Update button states
        updateNavigationState();
    }

    /**
     * Update navigation button states
     */
    function updateNavigationState() {
        const todayIndex = getTodayDevotionIndex();
        
        // Disable today button if we're on today's devotion
        todayBtn.disabled = (currentDevotionIndex === todayIndex);
    }

    /**
     * Navigate to previous devotion
     */
    function goToPrevious() {
        displayDevotion(currentDevotionIndex - 1);
    }

    /**
     * Navigate to next devotion
     */
    function goToNext() {
        displayDevotion(currentDevotionIndex + 1);
    }

    /**
     * Navigate to today's devotion
     */
    function goToToday() {
        displayDevotion(getTodayDevotionIndex());
    }

    /**
     * Handle keyboard navigation
     * @param {KeyboardEvent} event - Keyboard event
     */
    function handleKeyboard(event) {
        switch (event.key) {
            case 'ArrowLeft':
                goToPrevious();
                break;
            case 'ArrowRight':
                goToNext();
                break;
            case 'Home':
                goToToday();
                break;
        }
    }

    /**
     * Initialize the application
     */
    function init() {
        // Verify devotions data is available
        if (typeof devotions === 'undefined' || !Array.isArray(devotions) || devotions.length === 0) {
            console.error('Devotions data not found');
            devotionTitleEl.textContent = 'Error loading devotions';
            return;
        }

        // Set up event listeners
        prevBtn.addEventListener('click', goToPrevious);
        nextBtn.addEventListener('click', goToNext);
        todayBtn.addEventListener('click', goToToday);
        document.addEventListener('keydown', handleKeyboard);

        // Display today's devotion
        displayDevotion(getTodayDevotionIndex());
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
