import styles from './section-title.module.scss';

const highlightLastWord = (text) => {
  const words = text.split(' ');
  const lastWord = words.pop();
  const highlightedLastWord = `<span>${lastWord}</span>`;
  words.push(highlightedLastWord);
  return words.join(' ');
}

export default function SectionTitle({ children, ...restProps }) {
  const text = highlightLastWord(children);
  return (
    <h2 className={styles.title} {...restProps} dangerouslySetInnerHTML={{ __html: text }}>
    </h2>
  );
}