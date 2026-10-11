/**
 * Centralized image asset manifest.
 *
 * Every image is a SAMPLE stock photograph from Unsplash (https://unsplash.com/license,
 * free to use), downloaded locally into /public/images by `npm run fetch:images`.
 * They are illustrative placeholders — NOT personal photographs of the site owner.
 *
 * To use your own photos: drop a file at the same path under public/images/ (same
 * name), or point `src` at a new local path here. Keep descriptive `alt` text.
 */

import type { PlaceholderVariant } from '@/components/PlaceholderImage';

export type GalleryCategory = 'Landscapes' | 'Streets' | 'Food' | 'Little moments';

export interface ImageAsset {
  src: string;
  alt: string;
  /** SVG fallback scene if the file is missing */
  fallback: PlaceholderVariant;
  /** Palette hue for the fallback */
  hue?: string;
  /** Gallery filter bucket (travel galleries) */
  category?: GalleryCategory;
  credit?: string;
}

const asset = (
  src: string,
  alt: string,
  fallback: PlaceholderVariant,
  hue?: string,
  category?: GalleryCategory,
): ImageAsset => ({ src, alt, fallback, hue, category, credit: 'Unsplash' });

export const images = {
  hero: {
    alps: asset('/images/hero/alps.jpg', 'Alpine peaks above a valley', 'mountains', '#456A83'),
    books: asset('/images/hero/books.jpg', 'A stack of worn books', 'book', '#7C5A46'),
    coffee: asset('/images/hero/coffee.jpg', 'A cup of coffee on a table', 'coffee', '#B08968'),
    street: asset('/images/hero/street.jpg', 'A colourful old-town street', 'street', '#B08968'),
  },

  travel: {
    switzerland: {
      cover: asset('/images/travel/switzerland/cover.jpg', 'A turquoise alpine lake below snowy peaks', 'lake', '#456A83'),
      gallery: [
        asset('/images/travel/switzerland/ridge.jpg', 'A mountain ridge at dusk', 'mountains', '#456A83', 'Landscapes'),
        asset('/images/travel/switzerland/snow.jpg', 'Snow-covered mountains', 'mountains', '#6E8CA0', 'Landscapes'),
        asset('/images/travel/switzerland/valley.jpg', 'A green alpine valley', 'lake', '#5E7D6B', 'Landscapes'),
        asset('/images/travel/switzerland/train.jpg', 'A scenic train winding through the mountains', 'window', '#6E8CA0', 'Little moments'),
        asset('/images/travel/switzerland/cafe.jpg', 'Coffee and a pastry by a window', 'coffee', '#B08968', 'Food'),
      ],
    },
    germany: {
      cover: asset('/images/travel/germany/cover.jpg', 'Colourful houses on an old-town street', 'street', '#B08968'),
      gallery: [
        asset('/images/travel/germany/timber.jpg', 'Half-timbered houses', 'city', '#A6764F', 'Streets'),
        asset('/images/travel/germany/town.jpg', 'A quiet German town square', 'city', '#8A6B4F', 'Streets'),
        asset('/images/travel/germany/forest.jpg', 'A path through the Black Forest', 'forest', '#5E7D6B', 'Landscapes'),
        asset('/images/travel/germany/cake.jpg', 'A slice of cake with coffee', 'food', '#A6764F', 'Food'),
        asset('/images/travel/germany/flowers.jpg', 'Flowers on a windowsill', 'window', '#5E7D6B', 'Little moments'),
      ],
    },
    austria: {
      cover: asset('/images/travel/austria/cover.jpg', 'A lakeside village under the mountains', 'lake', '#5E7D6B'),
      gallery: [
        asset('/images/travel/austria/village.jpg', 'An alpine village', 'city', '#6E8CA0', 'Streets'),
        asset('/images/travel/austria/lavender.jpg', 'A field in soft afternoon light', 'forest', '#7E6F86', 'Little moments'),
        asset('/images/travel/austria/cafe.jpg', 'A cosy café interior', 'coffee', '#B08968', 'Food'),
      ],
    },
    prague: {
      cover: asset('/images/travel/prague/cover.jpg', 'A historic stone bridge in Prague', 'city', '#B08968'),
      gallery: [
        asset('/images/travel/prague/rooftops.jpg', 'Terracotta rooftops of the old town', 'city', '#A6764F', 'Landscapes'),
        asset('/images/travel/prague/street.jpg', 'A cobblestone Prague street', 'street', '#8A6B4F', 'Streets'),
        asset('/images/travel/prague/bookshop.jpg', 'Shelves in a historic bookshop', 'book', '#7C5A46', 'Little moments'),
        asset('/images/travel/prague/food.jpg', 'A table of food in warm light', 'food', '#A6764F', 'Food'),
      ],
    },
    india: {
      cover: asset('/images/travel/india/cover.jpg', 'Himalayan foothills and hill-town scenery', 'mountains', '#6E8CA0'),
      gallery: [
        asset('/images/travel/india/hills.jpg', 'Pine-covered hills', 'forest', '#5E7D6B', 'Landscapes'),
        asset('/images/travel/india/arch.jpg', 'Historic architecture', 'city', '#B08968', 'Streets'),
        asset('/images/travel/india/market.jpg', 'Colour in a local market', 'street', '#A6764F', 'Streets'),
        asset('/images/travel/india/food.jpg', 'A spread of local food', 'food', '#A6764F', 'Food'),
      ],
    },
  },

  library: {
    shelf: asset('/images/books/library.jpg', 'A warm wooden home library', 'book', '#7C5A46'),
    stack: asset('/images/books/stack.jpg', 'A stack of books', 'book', '#7C5A46'),
    reading: asset('/images/books/reading.jpg', 'An open book in warm light', 'book', '#B08968'),
  },

  food: {
    bowl: asset('/images/food/bowl.jpg', 'A bowl of food, overhead', 'food', '#B08968'),
    cooking: asset('/images/food/cooking.jpg', 'Cooking in natural light', 'food', '#A6764F'),
    table: asset('/images/food/table.jpg', 'A table set with coffee and food', 'coffee', '#B08968'),
  },

  everyday: {
    coffee: asset('/images/everyday/coffee.jpg', 'A cup of coffee', 'coffee', '#B08968'),
    plant: asset('/images/everyday/plant.jpg', 'A plant by the window', 'window', '#5E7D6B'),
    window: asset('/images/everyday/window.jpg', 'Soft light through a window', 'window', '#6E8CA0'),
    forest: asset('/images/everyday/forest.jpg', 'A misty forest walk', 'forest', '#5E7D6B'),
  },

  profession: {
    code: asset('/images/profession/code.jpg', 'Code on a screen', 'abstract', '#456A83'),
    screen: asset('/images/profession/screen.jpg', 'A developer workspace', 'abstract', '#456A83'),
    night: asset('/images/profession/night.jpg', 'A mountain under a night sky', 'mountains', '#2E4455'),
  },
};
