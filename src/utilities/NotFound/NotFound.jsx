import css from './NotFound.modules.css';
const image =
  'https://img.freepik.com/premium-vector/modern-minimal-of-404-error-page-for-website-404-error-the-page-not-found-with-dead-ghost-concept_599740-702.jpg?w=996';

export default function NotFound() {
  return (
    <div className={css.notFoundContainer}>
      <img src={image} alt="404 Error"></img>
    </div>
  );
}
