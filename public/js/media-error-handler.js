// Media Error Handler - Handles video and audio loading failures
document.addEventListener('DOMContentLoaded', function() {
    // Handle video loading errors
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('error', function(e) {
            console.warn('Video failed to load:', this.src);
            
            // Try to fallback to a working video or hide the element
            const fallbackVideo = '/src/videos/landingpage/landing-page.mp4';
            if (this.src !== fallbackVideo) {
                this.src = fallbackVideo;
            } else {
                // If even fallback fails, hide the video container
                const container = this.closest('.video-container, .slide-content, .reel-media');
                if (container) {
                    container.style.display = 'none';
                }
            }
        });
        
        video.addEventListener('loadstart', function() {
            this.classList.add('loading');
        });
        
        video.addEventListener('canplaythrough', function() {
            this.classList.remove('loading');
            this.classList.add('loaded');
        });
    });
    
    // Handle source elements in videos
    const sources = document.querySelectorAll('video source');
    sources.forEach(source => {
        source.addEventListener('error', function(e) {
            console.warn('Video source failed to load:', this.src);
        });
    });
});