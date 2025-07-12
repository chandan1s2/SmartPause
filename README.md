# AutoPause Learning Videos – Chrome Extension

This is a lightweight Chrome extension that automatically pauses and resumes videos on learning platforms like YouTube, Coursera, Khan Academy, Physics Wallah, and more. It helps students stay focused by removing the need to manually pause and play videos while switching between tabs or taking notes in other applications.

## Features

- Automatically pauses the video when you switch away from the tab or window
- Automatically resumes when you come back
- Currently supports YouTube, Coursera, Khan Academy, Physics Wallah, and similar platforms
- Runs silently in the background without interrupting your workflow

## Demo
This is a simple yet effective extension, it looks and works like this - 


<img width="482" height="354" alt="image" src="https://github.com/user-attachments/assets/4f42cf46-301c-4376-b6c8-50501cb9a242" />
<img width="486" height="353" alt="image" src="https://github.com/user-attachments/assets/1953518e-bb94-4011-9bbd-12a3b45300ed" />



## Why I Built This

While learning from video lectures, I found it frustrating to constantly pause and play videos when switching between YouTube and a note-taking app. This extension solves that problem. Around 15 of my friends are already using it regularly, and I see real potential for it to grow with more features and platform support.

## Installation (for developers)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable "Developer Mode" (top-right)
4. Click "Load unpacked" and select the project folder

## How It Works

The extension uses content scripts to detect when the user switches focus away from the video tab. When that happens, it automatically pauses the video, and resumes it when the user returns. It works by targeting the HTML video elements directly, with custom handling for different platforms.

## Roadmap

- Support for more platforms (e.g., edX, Skillshare)
- Toggle functionality from the extension icon
- Break reminders and study timers
- Note-taking panel integration

## Contributing

If you have ideas, suggestions, or want to help expand this extension, feel free to open an issue or contribute.

---

This extension was built out of a real personal need — and it's helping others already. Feedback is welcome.

