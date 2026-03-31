# OptimizedImage Component - Quick Reference

## Purpose

High-performance image component with automatic lazy loading, responsive image support, and performance optimizations.

## Installation

```svelte
import OptimizedImage from '$lib/components/OptimizedImage.svelte';
```

## Props

| Prop        | Type    | Default    | Description                        |
| ----------- | ------- | ---------- | ---------------------------------- |
| `src`       | string  | (required) | Image source URL                   |
| `alt`       | string  | (required) | Alt text for accessibility         |
| `width`     | string  | undefined  | Image width attribute              |
| `height`    | string  | undefined  | Image height attribute             |
| `eager`     | boolean | false      | Load eagerly for above-fold images |
| `sizes`     | string  | undefined  | Responsive image sizes hint        |
| `srcset`    | string  | undefined  | Responsive image sources           |
| `className` | string  | ''         | Additional CSS classes             |

## Usage Examples

### Simple Example

```svelte
<OptimizedImage
  src="/images/college-banner.jpg"
  alt="BITS Vizag College Campus"
/>
```

### Eager Loading (Hero Images)

```svelte
<OptimizedImage
  src="/images/hero.jpg"
  alt="College Hero Section"
  eager={true}
/>
```

### With Responsive Images (WebP)

```svelte
<OptimizedImage
  src="/images/department.webp"
  srcset="
    /images/department-320.webp 320w,
    /images/department-640.webp 640w,
    /images/department-1024.webp 1024w,
    /images/department-1440.webp 1440w
  "
  sizes="
    (max-width: 640px) 320px,
    (max-width: 1024px) 640px,
    (max-width: 1440px) 1024px,
    1440px
  "
  alt="Department Overview"
/>
```

### With Custom Styling

```svelte
<OptimizedImage
  src="/images/about.jpg"
  alt="About BITS Vizag"
  className="w-full h-auto rounded-lg shadow-lg"
/>
```

### Gallery Images

```svelte
<div class="grid grid-cols-3 gap-4">
  {#each galleryImages as image}
    <OptimizedImage
      src={image.src}
      alt={image.alt}
      className="w-full h-64 object-cover rounded"
      eager={false}
    />
  {/each}
</div>
```

## Performance Benefits

✅ **Automatic Lazy Loading**: Images below viewport load only when needed
✅ **Async Decoding**: Prevents blocking main thread
✅ **Responsive Images**: Serves correct size to each device
✅ **GPU Acceleration**: CSS containment reduces paint areas
✅ **Smooth Transitions**: Fade-in effect when image loads

## When to Use Props

### `eager={true}`

- Hero section images
- Above-the-fold images
- Critical images needed immediately

### Without `eager` (default: lazy)

- Images below the fold
- Gallery items
- Images inside scrollable sections

### `srcset` & `sizes`

- When you have pre-optimized image variants
- High-resolution displays (2x, 3x)
- Responsive design with multiple breakpoints

## Migration Guide

### Before

```svelte
<img src="/image.jpg" alt="..." />
```

### After

```svelte
<OptimizedImage src="/image.jpg" alt="..." />
```

### With Optimization

```svelte
<OptimizedImage
  src="/image.webp"
  srcset="/image-320.webp 320w, /image-640.webp 640w"
  sizes="(max-width: 640px) 320px, 640px"
  alt="..."
/>
```

## Tips for Best Results

1. **Always provide alt text** - Required for accessibility
2. **Use WebP format** where possible - 25-35% smaller than PNG/JPG
3. **Generate variants** - Create 2-3 size variants for each image
4. **Set dimensions** - Helps prevent layout shift
5. **Use eager for hero** - Critical images should load immediately

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS 13+, Android 9+)
- ⚠️ IE 11 (lazy loading not supported, falls back to eager)

## Styling Examples

### Full Width, Fixed Height

```svelte
<OptimizedImage
  src="/image.jpg"
  alt="..."
  className="w-full h-64 object-cover"
/>
```

### Rounded Corners

```svelte
<OptimizedImage
  src="/image.jpg"
  alt="..."
  className="w-full h-auto rounded-lg"
/>
```

### With Shadow

```svelte
<OptimizedImage
  src="/image.jpg"
  alt="..."
  className="w-full h-auto rounded-lg shadow-2xl"
/>
```

### Responsive Grid

```svelte
<OptimizedImage
  src="/image.jpg"
  alt="..."
  className="w-full h-48 sm:h-64 md:h-80 object-cover"
/>
```

## Performance Metrics

Expected improvements:

- **Lazy Loaded Images**: 30-50% faster initial page load
- **WebP Format**: 25-35% smaller file size
- **Async Decoding**: 10-20ms faster rendering

## Troubleshooting

### Image not showing

- Check `src` prop path
- Verify file exists in `/static` directory
- Check browser console for 404 errors

### Layout shift

- Provide `width` and `height` props
- Use aspect ratio CSS if available

### Not lazy loading

- Check `eager` prop isn't set to true
- Verify browser supports `loading="lazy"`
- Check DevTools Network tab for load behavior

---

For full details, see `PERFORMANCE_OPTIMIZATION.md`
