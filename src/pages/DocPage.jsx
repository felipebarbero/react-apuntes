// Página de un apunte. La URL trae la categoría y el slug; el contenido sale del catálogo.
import { Link, useParams } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';
import RichText from '../components/RichText.jsx';
import ZoomImage from '../components/ZoomImage.jsx';
import { getDoc } from '../data/catalog.js';
import { usePageTitle } from '../hooks/usePageTitle.js';

// Solo estas variantes existen en Bootstrap. Cualquier otra cae en "info".
const ALERT_VARIANTS = new Set(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']);

export default function DocPage() {
  // Los valores por defecto evitan undefined si la ruta todavía no tiene parámetros.
  const { categoryId = '', slug = '' } = useParams();
  const doc = getDoc(categoryId, slug);
  usePageTitle(doc ? doc.article.title : 'No encontrado');

  // La ruta existe como patrón, pero esa pareja categoría/slug no está en el catálogo.
  if (!doc) {
    return (
      <article>
        <h1 className="display-6 fw-semibold">Este apunte no está</h1>
        <p className="lead text-secondary">El enlace no coincide con ningún concepto del catálogo.</p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </article>
    );
  }

  const { category, article } = doc;

  return (
    <article>
      {/* La miga muestra el inicio y la categoría. El título del apunte va en el h1, no aquí. */}
      <nav aria-label="Miga de pan">
        <ol className="breadcrumb mb-3">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {category.title}
          </li>
        </ol>
      </nav>
      <h1 className="display-6 fw-semibold">{article.title}</h1>
      <p className="lead text-secondary">
        <RichText text={article.summary} />
      </p>

      {/* content (o blocks) se pinta en el orden del array.
          Sin esa lista, los campos sueltos salen en un orden fijo. */}
      {article.sections.map((section) => {
        const flow = section.content ?? section.blocks;

        return (
        <section key={section.title} className="mt-4">
          <div style={{ padding: '10px', backgroundColor: '#243857', borderRadius: '10px 10px 0px 0px' }}>
            <h2 className="h4 fw-semibold text-white mb-0">{section.title}</h2>
          </div>
          {flow ? (
            flow.map((block, index) => (
              <SectionBlock key={`${section.title}-block-${index}`} block={block} />
            ))
          ) : (
            <>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 mb-0">
                  <RichText text={paragraph} />
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 mb-0">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="mt-2">
                      <RichText text={bullet} />
                    </li>
                  ))}
                </ul>
              )}
              {section.alerts?.map((alert, index) => (
                <Alert
                  key={`${section.title}-alert-${index}`}
                  variant={alert.variant}
                  title={alert.title}
                  texts={alertTexts(alert)}
                />
              ))}
              {section.images?.map((image) => (
                <ZoomImage
                  key={`${image.src}-${image.alt}`}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  caption={image.caption}
                />
              ))}
              {section.note && (
                <p className="callout mt-3 mb-0 border-start border-primary border-3 bg-primary-subtle rounded-end px-3 py-2">
                  <RichText text={section.note} />
                </p>
              )}
              {section.code && <CodeBlock language={section.code.language} value={section.code.value} />}
            </>
          )}
        </section>
        );
      })}
    </article>
  );
}

// Un ítem de `content`. El orden del array es el orden en la página.
function SectionBlock({ block }) {
  if (block.type === 'p') {
    return (
      <p className="mt-3 mb-0">
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.type === 'ul') {
    return (
      <ul className="mt-3 mb-0">
        {block.items?.map((item) => (
          <li key={item} className="mt-2">
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'alert') return <Alert variant={block.variant} title={block.title} texts={alertTexts(block)} />;
  if (block.type === 'image') {
    return <ZoomImage src={block.src} alt={block.alt} width={block.width} height={block.height} caption={block.caption} />;
  }
  if (block.type === 'note') {
    return (
      <p className="callout mt-3 mb-0 border-start border-primary border-3 bg-primary-subtle rounded-end px-3 py-2">
        <RichText text={block.text} />
      </p>
    );
  }
  if (block.type === 'code') return <CodeBlock language={block.language} value={block.value} />;

  return null;
}

// Junta paragraphs y text. text puede ser un párrafo o una lista de párrafos.
// Así los avisos viejos, que solo traen text, siguen pintándose igual.
function alertTexts(source) {
  const paragraphs = Array.isArray(source.paragraphs) ? source.paragraphs : [];
  const text = Array.isArray(source.text) ? source.text : source.text ? [source.text] : [];
  return [...paragraphs, ...text].filter((paragraph) => paragraph);
}

function Alert({ variant, title, texts }) {
  const name = ALERT_VARIANTS.has(variant) ? variant : 'info';
  if (!title && texts.length === 0) return null;

  return (
    <div className={`alert alert-${name} my-3`} role="note">
      {title && (
        <p className="alert-title">
          <RichText text={title} />
        </p>
      )}
      {texts.map((paragraph, index) => (
        <p key={index} className="alert-copy">
          <RichText text={paragraph} />
        </p>
      ))}
    </div>
  );
}
