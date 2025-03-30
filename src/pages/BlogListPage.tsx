// src/pages/BlogListPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { getSortedPostsData, PostFrontmatter } from '../utils/posts'; // Import utility and interface
import Typography from '../components/Typography/Typography';
import Section from '../components/Section/Section';
import styles from './BlogListPage.module.css'; // Make sure this CSS file exists and is styled
import { format, parseISO } from 'date-fns'; // Import date formatting

const BlogListPage: React.FC = () => {
  console.log('Rendering BlogListPage'); // Debug log

  let allPostsData: PostFrontmatter[] = []; // Initialize as empty array
  try {
      allPostsData = getSortedPostsData(); // Fetch the post data
      console.log('Data fetched in BlogListPage:', allPostsData); // Debug log
  } catch (error) {
      console.error("Error fetching posts in BlogListPage:", error); // Error logging
      // Optionally render a more user-friendly error message here
  }

  return (
    <Section padding="md">
      <Typography variant="h1" className={styles.pageTitle}>Blog</Typography>
      <ul className={styles.postList}> {/* Ensure this class is styled */}
        {allPostsData.length === 0 && (
            <Typography variant="p">No posts found yet. Check back soon!</Typography>
        )}
        {/* Map over the fetched post data to render each list item */}
        {allPostsData.map(({ slug, date, title, excerpt }) => {
          let dateObject: Date | null = null;
          let isValidDate = false;
          try {
            dateObject = parseISO(date); // Parse the date string
            isValidDate = !isNaN(dateObject.getTime()); // Check if the resulting date object is valid
            // --- DEBUG LOG ---
            console.log(`BlogList - Slug: ${slug}, Date String: "${date}", Parsed Date:`, dateObject, 'Is Valid:', isValidDate);
          } catch (parseError) {
            console.error(`BlogList - Error parsing date for slug ${slug}: "${date}"`, parseError);
          }

          return (
            <li key={slug} className={styles.postItem}> {/* Ensure this class is styled */}
              <Link to={`/blog/${slug}`} className={styles.postLink}> {/* Ensure this class is styled */}
                <Typography variant="h3" className={styles.postTitle}>{title}</Typography> {/* Ensure this class is styled */}
              </Link>
              <Typography variant="caption" className={styles.postDate}> {/* Ensure this class is styled */}
                {/* Format the date using date-fns only if valid */}
                {isValidDate && dateObject ? format(dateObject, 'MMMM d, yyyy') : 'Invalid Date'}
              </Typography>
              {/* Conditionally render the excerpt if it exists */}
              {excerpt && <Typography variant="p" className={styles.postExcerpt}>{excerpt}</Typography>} {/* Ensure this class is styled */}
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default BlogListPage;