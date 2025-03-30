// src/utils/posts.ts
import matter from 'gray-matter';

export interface PostFrontmatter {
  title: string;
  date: string; // Keep as string for sorting, format later
  slug: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
  // Add other frontmatter fields as needed
}

export interface Post extends PostFrontmatter {
  content: string;
}

// Get all posts' frontmatter, sorted by date
export function getSortedPostsData(): PostFrontmatter[] {
  console.log('Attempting to get sorted posts data...'); // Log function entry
  const postsModules = import.meta.glob('../posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  console.log('Raw Posts Modules Found:', postsModules); // Log the raw glob result

  const postsData = Object.entries(postsModules).map(([path, rawContent]) => {
    console.log(`Processing file: ${path}`); // Log each file being processed
    const contentString = typeof rawContent === 'string' ? rawContent : '';
    const { data } = matter(contentString);

    // Log the parsed data for debugging
    // console.log(`Parsed frontmatter for ${path}:`, data);

    if (!data.title || !data.date || !data.slug) {
      console.warn(`Post at ${path} is missing required frontmatter (title, date, slug)`);
      return null; // Skip posts with missing required fields
    }
    return data as PostFrontmatter;
  }).filter(post => post !== null) as PostFrontmatter[];

  console.log('Processed Posts Frontmatter (Before Sort):', postsData); // Log the processed data

  // Sort posts by date (newest first)
  const sortedData = postsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  console.log('Sorted Posts Frontmatter:', sortedData); // Log the sorted data
  return sortedData;
}

// Get data for a single post by slug
export function getPostData(slug: string): Post | null {
  console.log(`Attempting to get post data for slug: ${slug}`); // Log function entry
  try {
    const postsModules = import.meta.glob('../posts/*.md', {
      query: '?raw',
      import: 'default',
      eager: true
    });
    console.log('Raw Modules in getPostData:', postsModules); // Log glob result here too

    const postPath = `../posts/${slug}.md`;
    console.log(`Looking for post path: ${postPath}`); // Log expected path

    const rawContent = postsModules[postPath];

    if (!rawContent) {
        console.error(`Post not found for slug: ${slug} (expected path: ${postPath})`);
        return null; // Post not found
    }
    console.log(`Found raw content for ${slug}`); // Log success

    // Ensure rawContent is treated as a string
    const contentString = typeof rawContent === 'string' ? rawContent : '';
    const { data, content } = matter(contentString);
    console.log(`Parsed data for ${slug}:`, data); // Log parsed data

    if (!data.title || !data.date || !data.slug) {
      console.warn(`Post at ${postPath} is missing required frontmatter (title, date, slug)`);
      return null;
    }

    const postResult = {
        ...(data as PostFrontmatter), // Spread frontmatter data
        content, // Include the Markdown content
    };
    console.log(`Returning post data for ${slug}:`, postResult); // Log the final result
    return postResult;

  } catch (error) {
    console.error(`Error getting post data for slug: ${slug}`, error);
    return null;
  }
}

// Get all slugs for generating static paths
export function getAllPostSlugs(): string[] {
    console.log('Attempting to get all post slugs...'); // Log function entry
    const postsModules = import.meta.glob('../posts/*.md', {
      query: '?raw',
      import: 'default',
      eager: true
    });
    console.log('Raw Modules in getAllPostSlugs:', postsModules); // Log glob result

    const slugs = Object.keys(postsModules).map(path => path.replace('../posts/', '').replace('.md', ''));
    console.log('Extracted slugs:', slugs); // Log extracted slugs
    return slugs;
}