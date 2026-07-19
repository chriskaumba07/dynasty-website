# 🎯 SUPER SIMPLE UPDATE GUIDE
## For your Dynasty site at empyrio.netlify.app

---

## 📁 THE ONE FILE YOU'LL EVER NEED TO EDIT

Open this file in VS Code: **`src/data.ts`**

That's it! Everything you might want to change is in there.

---

## 🔄 HOW TO UPDATE YOUR SITE (3 Steps)

### Step 1: Edit the file
Open `src/data.ts` in VS Code and change whatever you want.

### Step 2: Build
Open terminal and type:
```
npm run build
```

### Step 3: Deploy
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click on your site
3. Click **"Deploys"** tab
4. Scroll down to **"Deploy settings"**
5. Scroll to **"API controls"** and click **"Lock deployment"** to off
6. Go back to the **"Deploys"** tab
7. Drag your new `dist` folder there

🎉 Done!

---

## ✏️ SPECIFIC THINGS TO CHANGE

### 🌟 Change "Thought of the Week" (The Quote)
Find this in `data.ts`:

```
export const thoughtOfTheWeek = {
  text: "Collecting days that feel like they belong in a film.",
  date: "Field note 024",
};
```

**Change to:**
```
export const thoughtOfTheWeek = {
  text: "Your new thought here!",
  date: "Week 2 · July 2026",
};
```

---

### 📚 Change the "Now" Section
Find this in `data.ts`:

```
export const nowSection = {
  eyebrow: "Right now · Summer 2026",
  heading: "Planting things I may never sit in the shade of.",
  items: [
    { label: "Reading", content: "The Creative Act" },
    { label: "Building", content: "A calmer financial life" },
    { label: "Learning", content: "To trust the long route" },
  ],
};
```

**Change to:**
```
export const nowSection = {
  eyebrow: "Right now · August 2026",
  heading: "Your new heading here!",
  items: [
    { label: "Reading", content: "New book title" },
    { label: "Building", content: "What you're working on" },
    { label: "Learning", content: "What you're learning" },
  ],
};
```

---

### 🖼️ Add Your Own Photos

#### Option A: Use Netlify (Easiest for Beginners)
1. Go to your site on Netlify
2. Click **"Site settings"** → **"File storage"**
3. Upload your image
4. Copy the URL it gives you
5. In `data.ts`, find a memory and change it like this:

```
// BEFORE:
background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",

// AFTER:
background: "url(https://your-netlify-url.com/image.jpg)",
```

#### Option B: Add Images to Your Code
1. Create a folder called `images` inside the `public` folder
2. Put your photo there (name it something simple like `lisbon.jpg`)
3. In `data.ts`:

```
background: "url(./images/lisbon.jpg)",
```

---

### 🎨 Change Memory/Archive Colors
Each memory has a `background` property with a color gradient.

**Change the color by editing the hex codes:**
```
background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                                         ↑         ↑         ↑
                                    change these hex color codes
```

**Find hex color codes:** Go to [coolors.co](https://coolors.co) and pick any color!

---

### 📝 Change Project Info
Find the `projects` array in `data.ts`:

```
{
  number: "01",
  category: "Wealth",           // Wealth, Art, or Becoming
  title: "The Freedom Fund",   // Your project title
  description: "A personal...", // What it is
  meta: "Ongoing · 2024—",     // Status
  color: "gold",               // gold, rose, green, blue, clay, plum
},
```

---

## 🔢 QUICK COLOR REFERENCE

| Color Name | Hex Code | Use For |
|------------|----------|---------|
| Gold | `#c9a227` | Wealth projects |
| Rose | `#c9596b` | Art projects |
| Green | `#4a9c6d` | Becoming projects |
| Blue | `#4a7ac9` | Art projects |
| Clay | `#c97a4a` | Warmth |
| Plum | `#8b4ac9` | Creativity |

---

## ❓ TROUBLESHOOTING

**"My changes aren't showing"**
- Did you save the file? (Ctrl+S / Cmd+S)
- Did you run `npm run build` again?
- Did you upload the NEW `dist` folder to Netlify?

**"Image isn't showing"**
- Check the URL is correct
- Make sure the image file extension is correct (.jpg, .png, .webp)
- Make sure the path is exactly right

**"I broke something!"**
- Just open `data.ts` and look for the original text
- Copy it back to how it was
- Save and rebuild

---

## 📱 DEPLOYING FROM YOUR PHONE

Can't access VS Code? No problem!

1. Use **Netlify's CLI** or
2. **Connect to GitHub** so changes auto-deploy or
3. Use the **Netlify DROP** on your phone browser

---

## 💡 PRO TIPS

- Keep a backup of your original `data.ts` file
- Test locally first (`npm run dev`) before deploying
- Use simple, short text - it looks better on the elegant design
- Your "Est. MMXXVI" is Roman numerals for 2026 - change if needed!

---

**Need help?** Remember: Google is your friend! Search for "how to edit React data file" or "Netlify drag drop deploy"
