# 🚀 Complete Rookie's Guide to Editing & Deploying Your Dynasty Website

## Part 1: Setting Up Your Development Environment

### Step 1.1: Install Visual Studio Code (Free)
1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Download and install for your computer
3. Open VS Code when installed

### Step 1.2: Install Node.js (Needed to run the website locally)
1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the one on the left, it says "Recommended for most users")
3. Install it like any other program
4. **Restart your computer** (important!)

### Step 1.3: Get the Project Files
If you have the project as a folder on your computer:
1. Open VS Code
2. Click **File** → **Open Folder**
3. Navigate to your project folder and click "Open"

If you don't have the project folder yet, you need to get it from wherever you originally created it.

### Step 1.4: Install Project Dependencies
1. In VS Code, open the **Terminal** (click View → Terminal at the top)
2. Type this command and press Enter:
```
npm install
```
3. Wait for it to finish (will say "added X packages")

---

## Part 2: Running the Website Locally (To See Changes)

### Step 2.1: Start the Development Server
1. In the Terminal, type:
```
npm run dev
```
2. You'll see something like `Local: http://localhost:5173/`
3. **Hold Ctrl (or Cmd) and click** that link to open it in your browser

### Step 2.2: See Live Changes
- Now any edits you make to the code will automatically update in the browser!
- Keep the terminal open while you're working

---

## Part 3: Editing the Website Content

### Step 3.1: Edit Text Content
Open `src/App.tsx` in VS Code - all your text is there.

**To change the site title:**
- Look for the `<title>` tag in `index.html` at the top of the project

**To edit the hero section:**
- Find the `Hero()` function in App.tsx
- Change any text between the tags

**To edit projects:**
- Find the `projects` array (around line 100)
- Edit the title, description, category, or meta text

```javascript
// Example - change "The Freedom Fund" to "My Savings Plan"
{
  number: '01',
  category: 'Wealth',
  title: 'My Savings Plan',  // ← Change this
  description: 'A personal operating system...',  // ← Change this
  meta: 'Ongoing · 2024—',  // ← Change this
  icon: Landmark,
  color: 'gold',
},
```

### Step 3.2: Change the "Now" Section
Find the `Now()` function and edit:
```javascript
const items = [
  { label: 'Reading', content: 'The Creative Act' },  // ← Change these
  { label: 'Building', content: 'A calmer financial life' },
  { label: 'Learning', content: 'To trust the long route' },
];
```

### Step 3.3: Change Colors
Open `src/index.css` and find the color section at the top:
```css
--accent-gold: #c9a227;    /* Change #c9a227 to any color code */
--accent-rose: #c9596b;    /* Google "hex color picker" for codes */
```

---

## Part 4: Adding Your Own Images

### Step 4.1: Add Images to the Project
1. Create a folder called `images` inside the `public` folder
2. Put your images there (PNG, JPG, or WebP files)

### Step 4.2: Use Images in Code
In `App.tsx`, you can add an image component:

```jsx
// At the top of App.tsx, add this import:
import myImage from './my-image.png';  // Use your actual filename

// Then use it like this in your JSX:
<img src={myImage} alt="Description of image" />
```

### Step 4.3: Using External Image URLs (Easiest for Beginners)
You can also use images from the internet:

```jsx
<img 
  src="https://images.unsplash.com/photo-your-photo-id" 
  alt="Description"
  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
/>
```

### Step 4.4: Memory Grid Images (For the Archive Section)
In `Archive()`, replace the placeholder memories with real images:

```jsx
<div className="memory memory-tall" style={{
  backgroundImage: 'url(https://your-image-url.com/image.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
  <span>Lisbon, 6:42 PM</span>
</div>
```

---

## Part 5: Deploying to Netlify

### Step 5.1: Build Your Website
1. Open Terminal in VS Code
2. Make sure you've saved all your changes
3. Type:
```
npm run build
```
4. Wait for it to finish
5. A new folder called `dist` will appear in your project

### Step 5.2: Deploy to Netlify (Method 1 - Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Open your `dist` folder in File Explorer/Finder
3. **Drag the entire contents** of the `dist` folder onto the Netlify page
4. Wait a minute - your site is live!
5. You'll get a random URL like `happy-dog-12345.netlify.app`

### Step 5.3: Connect a Custom Domain
1. Go to [app.netlify.com](https://app.netlify.com) and sign up/login
2. Click "Add new site" → "Deploy manually"
3. Upload your `dist` folder each time you make changes
4. Click on your site → "Domain management" → "Add custom domain"
5. Type your desired domain (e.g., `myname.com`)
6. Follow Netlify's instructions to verify your domain

---

## Part 6: Updating Your Live Site

Every time you make changes:
1. Run `npm run build` again
2. Go to Netlify
3. Drag your new `dist` folder to the same deployment area
4. Your site updates automatically!

---

## Quick Reference: Common Tasks

| Task | How to Do It |
|------|-------------|
| Change site title | Edit `<title>` in `index.html` |
| Change hero text | Edit in `Hero()` function |
| Add new project | Copy a project object, paste, edit |
| Change project colors | Edit color classes in JSX |
| Add images | Put in `public/images/`, import in App.tsx |
| Change font | Edit Google Fonts link in `index.html` |

---

## Troubleshooting

**"npm is not recognized"**
- Restart your computer
- If still not working, reinstall Node.js

**Images not showing**
- Make sure the path is correct: `./images/your-photo.jpg`
- Or use a full URL starting with `https://`

**Changes not appearing**
- Make sure you saved the file (Ctrl+S / Cmd+S)
- Make sure you ran `npm run build` again
- Hard refresh the browser: Ctrl+Shift+R

---

## Need Help?

If you're stuck, Google is your best friend! Search for:
- "how to use React useState"
- "CSS background image not showing"
- "Netlify custom domain setup"

Good luck with your Dynasty! 👑
