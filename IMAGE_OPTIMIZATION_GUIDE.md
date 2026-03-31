# 🚀 BITS Vizag - Image Optimization Instructions

## Current Problem

Your homepage images are **155MB unoptimized**, causing slow header loading.

## Critical Images to Compress

### 1. **CS-Banners** (45MB total) - `/static/CS-Banners/`

```
1.png  → 6.0M  → Target: 600KB (WebP)
2.png  → 5.2M  → Target: 520KB (WebP)
3.png  → 17M   → Target: 1.7MB (WebP)   ⚠️ CRITICAL
4.png  → 15M   → Target: 1.5MB (WebP)   ⚠️ CRITICAL
```

### 2. **Header Icons** (80MB total) - `/static/header/`

```
T10main.png            → 19M   → Target: 2MB (WebP)    ⚠️ CRITICAL
ViceChancellor-Ban.png → 7.9M  → Target: 800KB (WebP)  ⚠️ CRITICAL
pitchathon.png         → 7.9M  → Target: 800KB (WebP)  ⚠️ CRITICAL
autonomous.mp4         → 16M   → Already OK (but reduce to 3MB)
newcourse.mp4          → 7.8M  → Reduce to 2MB
other PNG files        → 1-2.6M → Convert to WebP
```

### 3. **Video Background** - `/static/baba.*`

```
baba.mp4    → 3.0M ✓ OK (keep as primary)
baba.webm   → 5.1M → Can remove if mp4 sufficient
```

## Optimization Step-by-Step

### Option 1: Using Online Tools (Easiest)

1. Go to **TinyPNG** (https://tinypng.com/)
   - Upload each large PNG
   - Download compressed WebP version
   - Can optimize up to 20 files free

2. Go to **Squoosh** (https://squoosh.app/)
   - Upload image
   - Convert PNG → WebP
   - Set quality: 75-80
   - Download optimized

### Option 2: Using Command Line (Faster for batch)

```bash
# Install ImageMagick (one-time)
# Windows: Download from https://imagemagick.org/

# Convert PNG to WebP
magick convert input.png -quality 75 output.webp

# Batch convert all PNG in folder
for %F in (*.png) do magick convert %F -quality 75 %~nF.webp
```

### Option 3: Using FFmpeg for Videos

```bash
# Compress MP4 to 3MB
ffmpeg -i input.mp4 -b:v 2M -b:a 128k output.mp4

# Reduce resolution (1920x1080 → 1280x720)
ffmpeg -i input.mp4 -vf scale=1280:720 -b:v 1500k output.mp4
```

## Update Image Paths After Optimization

Once you've compressed images, replace them:

1. Backup original files (create `/static/backup/` folder)
2. Replace PNG files with optimized WebP
3. Update component references (if needed)

### Updated File Structure

```
/static/
├── CS-Banners/
│   ├── 1.webp  (was 1.png)
│   ├── 2.webp  (was 2.png)
│   ├── 3.webp  (was 3.png)  ← 17MB → 1.7MB saved!
│   ├── 4.webp  (was 4.png)  ← 15MB → 1.5MB saved!
│   └── ... (other files)
│
├── header/
│   ├── T10main.webp           ← 19MB → 2MB saved!
│   ├── ViceChancellor-Ban.webp ← 7.9MB → 7MB saved!
│   ├── pitchathon.webp        ← 7.9MB → 7MB saved!
│   └── ... (others)
│
└── baba.mp4 (keep as is)
```

## Code Changes Made ✓

- ✓ Scroll listener optimized (60fps smooth scrolling)
- ✓ Added `loading="lazy"` to CS Banner (defers non-visible images)
- ✓ Added `loading="lazy"` to Autonomous Banner
- ✓ Added `decoding="async"` (non-blocking image decoding)
- ✓ Removed scroll binding performance drain

## Expected Results After Optimization

| Metric        | Before   | After  |
| ------------- | -------- | ------ |
| PNG Size      | 45M      | 8-10M  |
| Header Size   | 80M      | 15-20M |
| Homepage Load | 8-10s    | 2-3s   |
| Mobile Load   | 15-20s   | 3-5s   |
| Scroll FPS    | 30-40fps | 60fps  |

## Quick Wins (Do These First)

1. **Delete Unused Images** in `/static/`
   - `image copy.png` (1.1M)
   - `image copy 2.png` (988K)
   - `image copy 3.png` (394K)
   - `eee copy.png` (1.1M)

2. **Move Large Files**
   - Consider CDN for banner images
   - Serve from `/public` instead of `/static`

3. **Enable Caching**
   - Add headers in `vercel.json`

## Deployment Steps

1. Compress images locally
2. Upload optimized versions to `/static/`
3. Test homepage load time
4. Deploy to Vercel
5. Monitor Core Web Vitals in Google Search Console

## Tools Recommended

- **TinyPNG**: Best for bulk PNG compression
- **Squoosh**: Best control over quality vs size
- **ImageMagick**: Best for batch processing
- **FFmpeg**: Best for video optimization
- **Lighthouse**: Test improvements (`npm run preview` then audit in Chrome DevTools)

---

**Estimated Time to Compress**: 30-60 minutes for full optimization
**Estimated Size Reduction**: 70-80% (155MB → 30-45MB)
**Expected Load Time Improvement**: 75% faster
