// src/pages/BlogPostPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostData, getAllPostSlugs } from '../utils/posts'; // Import BOTH functions
import Typography from '../components/Typography/Typography';
import Section from '../components/Section/Section';
import styles from './BlogPostPage.module.css'; // Make sure this CSS file exists and is styled
import { format, parseISO } from 'date-fns'; // Import date formatting

// --- getStaticPaths for SSG ---
export async function getStaticPaths() {
  const slugs = getAllPostSlugs(); // Get all available slugs
  // Map slugs to the format vite-ssg expects: { params: { slug: 'your-slug' } }
  return slugs.map(slug => ({ params: { slug } }));
}
// --- END OF getStaticPaths ---

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
      return (
          <Section padding="md">
            <Typography variant="p">Loading post...</Typography>
          </Section>
      );
  }

  const post = getPostData(slug);

  if (!post) {
    return (
      <Section padding="md">
        <Typography variant="h2">Post Not Found</Typography>
        <Typography variant="p">Sorry, the post you are looking for does not exist.</Typography>
        <Link to="/blog">Back to Blog</Link>
      </Section>
    );
  }

  // --- DEBUG LOGGING FOR DATE ---
  let dateObject: Date | null = null;
  let isValidDate = false;
  try {
    dateObject = parseISO(post.date); // Parse the date string
    isValidDate = !isNaN(dateObject.getTime()); // Check validity
    console.log(`BlogPost - Slug: ${slug}, Date String: "${post.date}", Parsed Date:`, dateObject, 'Is Valid:', isValidDate);
  } catch (parseError) {
     console.error(`BlogPost - Error parsing date for slug ${slug}: "${post.date}"`, parseError);
  }
  // --- END DEBUG LOGGING ---

  return (
    <Section padding="md" className={styles.blogPost}>
      <Typography variant="h1" className={styles.postTitle}>{post.title}</Typography>
      <Typography variant="caption" className={styles.postMeta}>
        {post.author && `By ${post.author} `}on {isValidDate && dateObject ? format(dateObject, 'MMMM d, yyyy') : 'Invalid Date'}
      </Typography>
      <article className={styles.postContent}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
    </Section>
  );
};

export default BlogPostPage;