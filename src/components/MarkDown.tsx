import DOMPurify from 'dompurify';

interface Props {
  mdElement: string;
}

const MarkDown = ({ mdElement }: Props) => {
  const htmlString = mdElement;
  const sanitizeHTML = (htmlContent: string) => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  const sanitizedHTML = sanitizeHTML(htmlString); // Prevents XSS attacks
  return <article dangerouslySetInnerHTML={sanitizedHTML} />;
};

export default MarkDown;
